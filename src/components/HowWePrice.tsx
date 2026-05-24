import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Ruler, Sparkles, BadgeCheck } from "lucide-react";

const points = [
  {
    icon: Ruler,
    title: "Measured to Your Property",
    description: "Pricing is based on the actual square footage of your driveway, patio, or surfaces — not a one-size-fits-all guess.",
  },
  {
    icon: Sparkles,
    title: "Matched to Surface Condition",
    description: "Light maintenance, heavy buildup, oil stains, or rust — the condition of your surfaces shapes the scope and the price.",
  },
  {
    icon: BadgeCheck,
    title: "Always Free & No Obligation",
    description: "Every quote is free. We assess the job honestly, give you a straightforward price, and leave the decision up to you.",
  },
];

const HowWePrice = () => {
  return (
    <section id="how-we-price" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How We Price</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Every Home Is Different — So Every Quote Is <span className="text-gradient-orange">Custom</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don't believe in cookie-cutter pricing. Your quote is built around the actual size and condition of your surfaces,
            so you only pay for the work your property actually needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl p-6 md:p-8 border border-border bg-gradient-card hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-gradient-card p-8 md:p-10 shadow-card"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
            Ready for Your Free Custom Quote?
          </h3>
          <p className="text-muted-foreground mb-8">
            Tell us about your project and we'll get you an honest, no-pressure price — usually same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="bg-gradient-orange text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+12623517796"
              className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="sms:+12623517796"
              className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Text Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWePrice;
