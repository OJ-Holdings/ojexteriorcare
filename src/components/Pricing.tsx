import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const services = [
  {
    name: "Driveway Cleaning",
    range: "$149 – $350",
    factors: ["Single car: $149–$200", "Two-car: $200–$300", "Large/circular: $300–$350"],
  },
  {
    name: "Patio Cleaning",
    range: "$99 – $250",
    factors: ["Small patio: $99–$150", "Large patio: $150–$250", "Heavy algae: add $50"],
  },
  {
    name: "Sidewalk & Walkway",
    range: "$75 – $175",
    factors: ["Short walkway: $75–$100", "Full perimeter: $125–$175", "Staining: add $30–$50"],
  },
  {
    name: "Deck Cleaning",
    range: "$150 – $400",
    factors: ["Small deck: $150–$225", "Large deck: $250–$400", "Wood vs. composite varies"],
  },
  {
    name: "Window Cleaning",
    range: "$75 – $250",
    factors: ["Up to 10 windows: $75–$125", "Full home: $150–$250", "Inside + outside available"],
  },
  {
    name: "Gutter Cleaning",
    range: "$100 – $225",
    factors: ["Single story: $100–$150", "Two story: $150–$225", "Flush & test included"],
  },
  {
    name: "Oil Stain Treatment",
    range: "$75 – $200",
    factors: ["Add-on to driveway clean", "Standalone: $75–$150", "Severe staining: $150–$200"],
  },
  {
    name: "Rust Stain Removal",
    range: "$75 – $175",
    factors: ["Per affected area", "Concrete & pavers", "Standalone or add-on"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Transparent Pricing Ranges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every property is different, so every quote is custom. These ranges give you a realistic ballpark — your actual quote is always free and no-obligation.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-xl px-5 py-3 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              Final price depends on surface size, condition, and access. <strong className="text-foreground">We never charge more than quoted.</strong>
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-gradient-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="font-heading font-bold text-base mb-1">{s.name}</h3>
              <p className="text-primary font-bold text-xl mb-3">{s.range}</p>
              <ul className="space-y-1.5">
                {s.factors.map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5 shrink-0">·</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-gradient-card p-8 md:p-10 shadow-card"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
            Get Your Exact Price — It's Free
          </h3>
          <p className="text-muted-foreground mb-8">
            Submit your info and we'll get back to you with a real number, usually same day.
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
              <Phone className="w-4 h-4" /> Call (262) 351-7796
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
