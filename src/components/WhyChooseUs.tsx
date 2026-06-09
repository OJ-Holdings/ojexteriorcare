import { motion } from "framer-motion";
import { Shield, Eye, DollarSign, Clock, MapPin, Zap } from "lucide-react";

// Bento grid items — first one is the featured "hero" cell
const bentoItems = [
  {
    icon: Shield,
    title: "Professional-Grade Equipment",
    description: "Commercial pressure washers and surface cleaners purpose-built for results that hold up. No consumer-grade shortcuts.",
    featured: true,
    stat: "150+",
    statLabel: "jobs completed",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every edge, crack, and corner. We don't cut corners because your home deserves better.",
    featured: false,
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Transparent quotes, no hidden fees. You know what you're paying before we start.",
    featured: false,
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day quotes, flexible scheduling. We work around your availability.",
    featured: false,
  },
  {
    icon: MapPin,
    title: "Local & Accountable",
    description: "We live here too. Local service means you can actually hold us to our word.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Results That Last",
    description: "We use the right pressure and technique for every surface so results actually last.",
    featured: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative bg-secondary/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Why OJ Exterior Care</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-none">
            THE RIGHT CHOICE<br />
            <span className="text-gradient-orange">FOR YOUR HOME</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {bentoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`relative rounded-2xl border p-6 flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-card-hover ${
                  item.featured
                    ? "lg:col-span-2 bento-featured hover:border-primary/35"
                    : "bg-gradient-card border-border hover:border-primary/20"
                }`}
              >
                {/* Glow on featured */}
                {item.featured && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 60% at 20% 50%, hsl(25 100% 55% / 0.1), transparent)",
                    }}
                  />
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  item.featured
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-primary/10 border border-primary/15 group-hover:bg-primary/15 group-hover:border-primary/30"
                } transition-all duration-300`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-lg mb-2 leading-tight">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>

                {item.featured && item.stat && (
                  <div className="mt-6 pt-5 border-t border-primary/15 flex items-baseline gap-2">
                    <span className="text-5xl font-black font-heading text-gradient-orange leading-none">{item.stat}</span>
                    <span className="text-sm text-muted-foreground font-medium">{item.statLabel}</span>
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
