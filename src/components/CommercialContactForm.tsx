import { motion } from "framer-motion";
import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const inputClass =
  "w-full bg-carbon border border-bone/15 rounded-xl px-4 py-3.5 text-base text-bone placeholder:text-bone-dim/60 focus:outline-none focus:border-ember/60 focus:ring-2 focus:ring-ember/20 transition-all duration-200";

const labelClass = "font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-2 block";

const CommercialContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [smsConsent, setSmsConsent] = useState(false);
  const [recurringInterest, setRecurringInterest] = useState(false);
  const [formData, setFormData] = useState({
    business_name: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    service_needed: "",
    water_access: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waterAccess =
      formData.water_access === "yes" ? true : formData.water_access === "no" ? false : null;

    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("quote_requests").insert({
        id,
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        address: formData.address || null,
        service_needed: formData.service_needed || null,
        description: formData.description || null,
        sms_consent: smsConsent,
        property_type: "commercial",
        business_name: formData.business_name,
        water_access: waterAccess,
        recurring_interest: recurringInterest,
      });

      if (error) throw error;

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
              description: formData.description || "No details provided",
              smsConsent: smsConsent ? "Yes" : "No",
              propertyType: "commercial",
              businessName: formData.business_name,
              waterAccess: formData.water_access === "yes" ? "Yes" : formData.water_access === "no" ? "No" : "Not sure",
              recurringInterest,
            },
          },
        });
        if (fnError) console.error("Email function error:", fnError);
        else console.log("Email function response:", fnData);
      } catch (e) {
        console.error("Email invoke exception:", e);
      }

      setSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting commercial quote request:", error);
      const msg = error?.message || error?.error_description || JSON.stringify(error);
      toast.error(`Submit failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="commercial-contact" className="py-24 md:py-36 relative overflow-hidden grain">
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
            <span className="eyebrow eyebrow-dim block mb-6">Commercial Quote</span>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone mb-5">
              Request a commercial{" "}
              <span className="accent-serif text-ember-gradient">quote.</span>
            </h2>
            <p className="text-bone-dim leading-relaxed max-w-xl mx-auto">
              Tell us about your property and we&rsquo;ll follow up to scope the job and put
              together a custom quote, one-time or recurring.
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
                Request{" "}
                <span className="accent-serif text-ember">received.</span>
              </h3>
              <p className="text-bone-dim leading-relaxed">
                We&rsquo;ll reach out to discuss scope and scheduling. Thank you for considering
                OJ Exterior Care.
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
                    <label htmlFor="ccf-business" className={labelClass}>Business Name (required)</label>
                    <input
                      id="ccf-business"
                      type="text"
                      name="business_name"
                      required
                      value={formData.business_name}
                      onChange={handleChange}
                      placeholder="Your business name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="ccf-name" className={labelClass}>Contact Name (required)</label>
                    <input
                      id="ccf-name"
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
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <label htmlFor="ccf-phone" className={labelClass}>Phone (required)</label>
                    <input
                      id="ccf-phone"
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
                  <div>
                    <label htmlFor="ccf-email" className={labelClass}>Email</label>
                    <input
                      id="ccf-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ccf-address" className={labelClass}>Business Address (required)</label>
                  <input
                    id="ccf-address"
                    type="text"
                    name="address"
                    required
                    autoComplete="street-address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St, Kenosha, WI"
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                  <div>
                    <label htmlFor="ccf-service" className={labelClass}>Service Needed</label>
                    <select
                      id="ccf-service"
                      name="service_needed"
                      value={formData.service_needed}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select a service</option>
                      <option>Storefront Window Cleaning</option>
                      <option>Storefront &amp; Entryway Pressure Washing</option>
                      <option>Sidewalk / Walkway Cleaning</option>
                      <option>Not Sure / Multiple</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="ccf-water" className={labelClass}>Outdoor Water Spigot On Site?</label>
                    <select
                      id="ccf-water"
                      name="water_access"
                      value={formData.water_access}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="">Select an answer</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="ccf-desc" className={labelClass}>Tell us about the property</label>
                  <textarea
                    id="ccf-desc"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Square footage, number of windows, current condition, preferred timing..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={recurringInterest}
                    onChange={(e) => setRecurringInterest(e.target.checked)}
                    className="mt-0.5 w-4 h-4 shrink-0 rounded border-bone/25 bg-carbon text-ember accent-ember focus:outline-none focus:ring-2 focus:ring-ember/20"
                  />
                  <span className="text-bone-dim text-xs leading-relaxed">
                    I&rsquo;m interested in a recurring maintenance plan (monthly or quarterly),
                    not just a one-time clean.
                  </span>
                </label>

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
                  {loading ? "Submitting..." : "Request Commercial Quote"}
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

export default CommercialContactForm;
