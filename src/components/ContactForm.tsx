import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service_needed: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      });

      if (error) throw error;

      // Try to send notification email (non-blocking)
      try {
        const { data: fnData, error: fnError } = await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "quote-request-notification",
            recipientEmail: "superbassoof@gmail.com",
            idempotencyKey: `quote-notify-${id}`,
            templateData: {
              name: formData.name,
              phone: formData.phone,
              email: formData.email || "Not provided",
              address: formData.address || "Not provided",
              service: formData.service_needed || "Not specified",
              description: formData.description || "No details provided",
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
      console.error("Error submitting quote request:", error);
      const msg = error?.message || error?.error_description || JSON.stringify(error);
      toast.error(`Submit failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you with a free, no-obligation quote.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-card border border-primary/30 rounded-xl p-10 text-center shadow-glow"
            >
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Quote Request Received!</h3>
              <p className="text-muted-foreground">We'll get back to you as soon as possible. Thank you for choosing OJ Exterior Care.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-gradient-card border border-border rounded-xl p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Address</label>
                  <input
                    type="text"
                    name="address"
                    autoComplete="street-address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Main St"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
                <select
                  name="service_needed"
                  value={formData.service_needed}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                >
                  <option value="">Select a service</option>
                  <option>Driveway Cleaning</option>
                  <option>Patio Cleaning</option>
                  <option>Sidewalk Cleaning</option>
                  <option>Deck Cleaning</option>
                  <option>Oil Stain Treatment</option>
                  <option>Rust Stain Treatment</option>
                  <option>Exterior Surface Washing</option>
                  <option>Gutter Cleaning</option>
                  <option>Window Cleaning</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Project</label>
                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the area to be cleaned, any specific stains, and preferred timing..."
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-orange text-primary-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {loading ? "Submitting..." : "Submit Quote Request"}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
