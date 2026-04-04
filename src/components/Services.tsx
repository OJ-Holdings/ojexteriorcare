import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Driveway Cleaning",
    description: "Remove years of grime, oil stains, and buildup from your driveway. Restore your home's curb appeal in hours.",
    icon: "🚗",
  },
  {
    title: "Patio Cleaning",
    description: "Bring your patio back to life with deep cleaning that removes dirt, algae, and discoloration.",
    icon: "🏡",
  },
  {
    title: "Sidewalk Cleaning",
    description: "Clean, safe sidewalks that look fresh and well-maintained. Perfect for improving your home's appearance.",
    icon: "🚶",
  },
  {
    title: "Deck Cleaning",
    description: "Gentle yet effective cleaning for wood, composite, and concrete decks. Protect and restore your outdoor space.",
    icon: "🪵",
  },
  {
    title: "Oil Stain Treatment",
    description: "Specialized treatment to lift and remove stubborn oil stains from concrete and asphalt surfaces.",
    icon: "🛢️",
  },
  {
    title: "Rust Stain Treatment",
    description: "Expert rust removal that eliminates unsightly orange stains from concrete, pavers, and stone.",
    icon: "🔧",
  },
  {
    title: "Exterior Surface Washing",
    description: "Comprehensive cleaning for all exterior hard surfaces. Walls, steps, retaining walls, and more.",
    icon: "✨",
  },
  {
    title: "Gutter Cleaning",
    description: "Keep your gutters clear of debris and buildup. Prevent water damage and protect your home's foundation.",
    icon: "🏠",
  },
  {
    title: "Window Cleaning",
    description: "Crystal-clear windows inside and out. Professional streak-free cleaning that lets the light in.",
    icon: "🪟",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Everything Your Exterior Needs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From routine maintenance to deep stain removal, we handle every exterior cleaning challenge with professional-grade equipment and attention to detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-lg font-bold font-heading mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <a
                href="#contact"
                className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
