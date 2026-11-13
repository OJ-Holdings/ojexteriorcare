import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2, CheckCircle2, ArrowRight, Snowflake } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LEAD_PREFIX, SPRING_LOCKIN_EVENT, WASHER_SERVICES, type Timing } from "@/config/season";
import { useSeasonPhase } from "@/hooks/use-season-phase";

const inputClass =
  "w-full bg-carbon border border-bone/15 rounded-xl px-4 py-3.5 text-base text-bone placeholder:text-bone-dim/60 focus:outline-none focus:border-ember/60 focus:ring-2 focus:ring-ember/20 transition-all duration-200";

const labelClass = "font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-2 block";

const ContactForm = ({ sectionNumber = "08" }: { sectionNumber?: string }) => {
  const phase = useSeasonPhase();
  const [timing, setTiming] = useState<Timing>("");
  const [springLead, setSpringLead] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service_needed: "",
    description: "",
  });

  const isWasher = WASHER_SERVICES.includes(formData.service_needed);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Last call: pressure washing can only be booked for spring
    if (phase === "lastcall" && e.target.name === "service_needed" && WASHER_SERVICES.includes(e.target.value)) {
      setTiming("spring");
    }
  };

  // "Lock in my spring spot" in the spring section picks the spring option here
  useEffect(() => {
    if (phase !== "lastcall") return;
    const pickSpring = () => setTiming("spring");
    window.addEventListener(SPRING_LOCKIN_EVENT, pickSpring);
    return () => window.removeEventListener(SPRING_LOCKIN_EVENT, pickSpring);
  }, [phase]);

  // Seasonal tag goes in front of the details so it shows in the lead row and the
  // notification email without any schema change. Off phase: no tag, same as before.
  const leadTiming = (): Timing => {
    if (phase === "winter") return "spring";
    if (phase === "lastcall") return isWasher ? "spring" : timing;
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const id = crypto.randomUUID();
      const lt = leadTiming();
      const prefix = lt ? LEAD_PREFIX[lt] : "";
      const details = formData.description.trim();
      const description = prefix ? (details ? `${prefix} ${details}` : prefix) : formData.description;
      const { error } = await supabase.from("quote_requests").insert({
        id,
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        address: formData.address || null,
        service_needed: formData.service_needed || null,
        description: description || null,
        sms_consent: smsConsent,
      });

      if (error) throw error;

      // Try to send notification email (non-blocking)
      try {
        const { data: fnData, error: fnError } = await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "quote-request-notification",
            recipientEmail: "ojexteriorcare@gmail.com",
            idempotencyKey: `quote-notify-${id}`,
            templateData: {
              name: formData.name,
              phone: formData.phone,
              email: formData.email || "Not provided",
              address: formData.address || "Not provided",
              service: formData.service_needed || "Not specified",
              description: description || "No details provided",
              smsConsent: smsConsent ? "Yes" : "No",
            },
          },
        });
        if (fnError) console.error("Email function error:", fnError);
        else console.log("Email function response:", fnData);
      } catch (e) {
        console.error("Email invoke exception:", e);
      }

      setSpringLead(lt === "spring");
      setSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting quote request:", error);
      const msg = error?.message || error?.error_description || JSON.stringify(error);
      toast.error(`Submit failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden grain">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
      />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">{sectionNumber}</span>
              <span className="eyebrow eyebrow-dim">Contact</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone mb-5">
              Get your free quote{" "}
              <span className="accent-serif text-ember-gradient">today.</span>
            </h2>
            <p className="text-bone-dim leading-relaxed max-w-xl mx-auto">
              Fill out the form below and we&rsquo;ll get back to you with a free,
              no-obligation quote.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="surface rounded-2xl p-12 text-center glow-ember-sm"
            >
              <span className="w-14 h-14 rounded-full bg-leaf/15 border border-leaf/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-7 h-7 text-leaf" strokeWidth={1.5} />
              </span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-bone mb-3">
                Quote request{" "}
                <span className="accent-serif text-ember">received.</span>
              </h3>
              <p className="text-bone-dim leading-relaxed">
                {springLead
                  ? "We’ll get back to you, usually within the hour, to put a real spring 2027 date on the calendar. Thank you for choosing OJ Exterior Care."
                  : "We’ll get back to you, usually within the hour. Thank you for choosing OJ Exterior Care."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="surface rounded-2xl p-7 md:p-12"
            >
              <div className="space-y-7">
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <label htmlFor="cf-name" className={labelClass}>Name (required)</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className={labelClass}>Phone (required)</label>
                    <input
                      id="cf-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <label htmlFor="cf-email" className={labelClass}>Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-address" className={labelClass}>Address</label>
                    <input
                      id="cf-address"
                      type="text"
                      name="address"
                      autoComplete="street-address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-service" className={labelClass}>Service Needed</label>
                  <select
                    id="cf-service"
                    name="service_needed"
                    value={formData.service_needed}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="">Select a service</option>
                    <option>House Washing</option>
                    <option>Driveway Cleaning</option>
                    <option>Patio Cleaning</option>
                    <option>Sidewalk Cleaning</option>
                    <option>Deck Cleaning</option>
                    <option>Oil Stain Treatment</option>
                    <option>Rust Stain Treatment</option>
                    <option>Exterior Surface Washing</option>
                    <option>Gutters / Roof (ask us)</option>
                    <option>Window Cleaning</option>
                    <option>Multiple Services</option>
                  </select>
                </div>

                {phase === "lastcall" && (
                  <div>
                    <label htmlFor="cf-timing" className={labelClass}>When do you want it done?</label>
                    <select
                      id="cf-timing"
                      name="timing"
                      value={isWasher ? "spring" : timing}
                      onChange={(e) => setTiming(e.target.value as Timing)}
                      aria-describedby={isWasher ? "cf-timing-note" : undefined}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select timing</option>
                      <option value="windows" disabled={isWasher}>Before Nov 22 (window cleaning only)</option>
                      <option value="spring">Spring 2027 (10% off)</option>
                    </select>
                    {isWasher && (
                      <p id="cf-timing-note" className="mt-2.5 flex items-start gap-2 text-xs text-ice leading-relaxed">
                        <Snowflake aria-hidden className="w-3 h-3 shrink-0 mt-0.5" />
                        Pressure washing is done for 2026. We&rsquo;ll lock in a spring date, 10% off.
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label htmlFor="cf-desc" className={labelClass}>Tell us about your project</label>
                  <textarea
                    id="cf-desc"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the area to be cleaned, any specific stains, and preferred timing..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 shrink-0 rounded border-bone/25 bg-carbon text-ember accent-ember focus:outline-none focus:ring-2 focus:ring-ember/20"
                  />
                  <span className="text-bone-dim text-xs leading-relaxed">
                    I consent to receive appointment confirmations, quote follow-ups, and service
                    reminders from OJ Exterior Care at the phone number provided. Message frequency
                    varies. Message &amp; data rates may apply. Reply HELP for help or STOP to opt
                    out.
                  </span>
                </label>

                {phase === "winter" && (
                  <p className="flex items-start justify-center gap-2 text-sm text-ice leading-relaxed text-center">
                    <Snowflake aria-hidden className="w-3.5 h-3.5 shrink-0 mt-[0.2em]" />
                    All bookings are for spring 2027. 10% off when you book by Feb 28.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group btn-shine w-full bg-ember text-carbon py-5 rounded-full font-display font-semibold text-base flex items-center justify-center gap-3 hover:bg-ember-bright glow-ember-sm transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  )}
                  {loading ? "Submitting..." : "Submit Quote Request"}
                </button>

                <p className="text-bone-dim text-xs leading-relaxed text-center">
                  By submitting, you agree to receive text messages from OJ Exterior Care about
                  your quote. Msg &amp; data rates may apply. Msg frequency varies. Consent is not
                  a condition of purchase. Reply STOP to opt out, HELP for help. See our{" "}
                  <a href="/privacy-policy" className="text-ember hover:text-ember-bright underline underline-offset-2">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms-of-service" className="text-ember hover:text-ember-bright underline underline-offset-2">
                    Terms of Service
                  </a>
                  .
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
