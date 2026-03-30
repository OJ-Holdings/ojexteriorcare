import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <div className="text-4xl mb-4">🎉</div>
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
                    required
                    placeholder="Your full name"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                  <input
                    type="tel"
                    required
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
                    placeholder="you@email.com"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Address</label>
                  <input
                    type="text"
                    placeholder="123 Main St"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Service Needed</label>
                <select className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                  <option value="">Select a service</option>
                  <option>Driveway Cleaning</option>
                  <option>Patio Cleaning</option>
                  <option>Sidewalk Cleaning</option>
                  <option>Deck Cleaning</option>
                  <option>Oil Stain Treatment</option>
                  <option>Rust Stain Treatment</option>
                  <option>Exterior Surface Washing</option>
                  <option>Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1.5 block">Tell Us About Your Project</label>
                <textarea
                  rows={4}
                  placeholder="Describe the area to be cleaned, any specific stains, and preferred timing..."
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-orange text-primary-foreground py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
              >
                <Send className="w-5 h-5" />
                Submit Quote Request
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
