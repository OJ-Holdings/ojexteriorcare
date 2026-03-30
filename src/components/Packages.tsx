import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Basic Refresh",
    price: "$149",
    popular: false,
    features: [
      "Driveway or patio cleaning",
      "Surface dirt and grime removal",
      "Great for routine maintenance",
    ],
  },
  {
    name: "Standard Exterior Clean",
    price: "$249",
    popular: true,
    features: [
      "Driveway + walkway or patio area",
      "Deep surface cleaning",
      "Ideal for homes with visible buildup",
    ],
  },
  {
    name: "Premium Restoration",
    price: "$399",
    popular: false,
    features: [
      "Full driveway/patio cleaning",
      "Oil spot or rust stain treatment",
      "Detailed attention to problem areas",
      "Best for heavily stained surfaces",
    ],
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Packages</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the package that fits your needs. Final pricing depends on surface size, stain severity, and scope of work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-xl p-6 md:p-8 border transition-all duration-300 ${
                pkg.popular
                  ? "border-primary bg-gradient-card shadow-glow scale-[1.02]"
                  : "border-border bg-gradient-card hover:border-primary/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-orange text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold font-heading mb-1">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-gradient-orange">{pkg.price}</span>
                <span className="text-muted-foreground text-sm">starting</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${
                  pkg.popular
                    ? "bg-gradient-orange text-primary-foreground hover:opacity-90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Final pricing depends on size, severity of staining, and scope of work. All quotes are free.
        </p>
      </div>
    </section>
  );
};

export default Packages;
