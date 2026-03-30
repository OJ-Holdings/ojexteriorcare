import { motion } from "framer-motion";
import { Shield, Eye, DollarSign, Clock, MapPin, ThumbsUp } from "lucide-react";

const points = [
  { icon: Shield, title: "Professional-Grade Equipment", description: "Commercial pressure washers and surface cleaners for superior results on every job." },
  { icon: Eye, title: "Attention to Detail", description: "We don't cut corners. Every edge, crack, and surface gets the attention it deserves." },
  { icon: DollarSign, title: "Honest Pricing", description: "Transparent quotes with no hidden fees. You know exactly what you're paying for." },
  { icon: Clock, title: "Fast Response Times", description: "Quick quotes and flexible scheduling. We respect your time and work around your availability." },
  { icon: MapPin, title: "Local & Reliable", description: "We're part of your community. Local service means accountability and care you can count on." },
  { icon: ThumbsUp, title: "Driveways, Patios & More", description: "From concrete driveways to stone patios, steps, and walkways — we clean it all." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why OJ Exterior Care</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            The Right Choice for Your Home
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border bg-gradient-card hover:border-primary/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
