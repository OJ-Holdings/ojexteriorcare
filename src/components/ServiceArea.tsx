import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";

const areas = [
  { name: "Kenosha", note: "Primary service area" },
  { name: "Racine", note: "Full coverage" },
  { name: "Zion, IL", note: "Full coverage" },
  { name: "Pleasant Prairie", note: "Full coverage" },
  { name: "Somers", note: "Full coverage" },
  { name: "Bristol", note: "Full coverage" },
  { name: "Silver Lake", note: "Available" },
  { name: "Paddock Lake", note: "Available" },
  { name: "Twin Lakes", note: "Available" },
  { name: "Winthrop Harbor, IL", note: "Available" },
  { name: "Gurnee, IL", note: "Available" },
  { name: "North Chicago, IL", note: "Available" },
];

const ServiceArea = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Area</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
              Proudly Serving Southeast Wisconsin
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Based in Kenosha, we serve homeowners across southeast Wisconsin and the northern Illinois border. Don't see your city? Just ask — we may still cover you.
            </p>
          </motion.div>

          {/* Coverage grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10"
          >
            {areas.map((area, i) => (
              <div
                key={area.name}
                className={`rounded-xl border px-4 py-3 flex items-start gap-2.5 ${
                  i === 0
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-gradient-card"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
                <div>
                  <p className={`text-sm font-semibold leading-tight ${i === 0 ? "text-foreground" : "text-foreground"}`}>
                    {area.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{area.note}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Not sure CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-border bg-gradient-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="font-heading font-bold text-xl mb-1">Not sure if we cover your area?</h3>
              <p className="text-muted-foreground text-sm">Reach out and we'll let you know — usually within the hour.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="/#contact"
                className="bg-gradient-orange text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+12623517796"
                className="border border-border bg-secondary text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
              <a
                href="sms:+12623517796"
                className="border border-border bg-secondary text-foreground px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Text Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
