import { motion } from "framer-motion";
import { Shield, Eye, DollarSign, Clock, MapPin, Zap } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Professional-grade equipment",
    description:
      "Commercial pressure washers and surface cleaners purpose-built for results that hold up. No consumer-grade shortcuts.",
    featured: true,
    stat: "150+",
    statLabel: "surfaces restored",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    description: "Every edge, crack, and corner. We don't cut corners because your home deserves better.",
  },
  {
    icon: DollarSign,
    title: "Honest pricing",
    description: "Transparent quotes, no hidden fees. You know what you're paying before we start.",
  },
  {
    icon: Clock,
    title: "Fast response",
    description: "Same-day quotes, flexible scheduling. We work around your availability.",
  },
  {
    icon: MapPin,
    title: "Local & accountable",
    description: "We live here too. Local service means you can actually hold us to our word.",
  },
  {
    icon: Zap,
    title: "Results that last",
    description: "We use the right pressure and technique for every surface so results actually last.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] text-ember">07</span>
            <span className="eyebrow eyebrow-dim">Why OJ Exterior Care</span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
            The right choice for{" "}
            <span className="accent-serif text-ember-gradient">your home.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`relative surface rounded-2xl p-7 flex flex-col lift overflow-hidden ${
                  item.featured ? "lg:col-span-2" : ""
                }`}
              >
                {item.featured && (
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 70% at 15% 80%, hsl(var(--ember) / 0.10), transparent)" }}
                  />
                )}

                <div className="relative flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-ember" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] text-bone-dim tabular-nums">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>

                <h3 className="relative font-display font-semibold text-xl md:text-2xl tracking-[-0.02em] text-bone mb-2.5 leading-tight">
                  {item.title}
                </h3>
                <p className="relative text-bone-dim text-sm leading-relaxed flex-1 max-w-md">
                  {item.description}
                </p>

                {item.featured && item.stat && (
                  <div className="relative mt-7 pt-5 border-t border-bone/10 flex items-baseline gap-3">
                    <span className="accent-serif text-5xl md:text-6xl text-ember-gradient leading-none">
                      {item.stat}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim">
                      {item.statLabel}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
