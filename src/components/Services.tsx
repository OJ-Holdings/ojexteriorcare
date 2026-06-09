import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Car, Umbrella, Route, TreePine, Droplets, Wrench, Waves, CloudRain, AppWindow } from "lucide-react";
import { useRef, MouseEvent } from "react";

const services = [
  { title: "Driveway Cleaning", description: "Remove years of grime, oil stains, and buildup. Restore curb appeal in hours.", icon: Car, href: "/services/driveway-pressure-washing" },
  { title: "Patio Cleaning", description: "Deep clean that removes dirt, algae, and discoloration from any surface.", icon: Umbrella, href: "/services/patio-cleaning" },
  { title: "Sidewalk Cleaning", description: "Clean, safe sidewalks that look fresh and well-maintained year-round.", icon: Route, href: "#contact" },
  { title: "Deck Cleaning", description: "Gentle yet thorough cleaning for wood, composite, and concrete decks.", icon: TreePine, href: "#contact" },
  { title: "Oil Stain Treatment", description: "Specialized treatment to lift and remove stubborn oil stains from concrete.", icon: Droplets, href: "#contact" },
  { title: "Rust Stain Treatment", description: "Expert rust removal from concrete, pavers, and stone surfaces.", icon: Wrench, href: "#contact" },
  { title: "Exterior Surface Washing", description: "Comprehensive cleaning for walls, steps, retaining walls, and more.", icon: Waves, href: "#contact" },
  { title: "Gutter Cleaning", description: "Clear debris and buildup. Protect your home from water damage.", icon: CloudRain, href: "#contact" },
  { title: "Window Cleaning", description: "Crystal-clear, streak-free windows inside and out. Let the light in.", icon: AppWindow, href: "/services/window-cleaning" },
];

// ─── 3D Tilt Card ────────────────────────────────────────────────
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 250, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 250, damping: 25 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { mx.set(0); my.set(0); };
  const Icon = service.icon;
  const isLinked = service.href.startsWith("/services");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative bg-gradient-card border border-border rounded-2xl p-6 h-full flex flex-col overflow-hidden hover:border-primary/30 transition-colors duration-300 hover:shadow-card-hover"
      >
        {/* Cursor glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{ background: `radial-gradient(ellipse 90px 90px at ${glowX} ${glowY}, hsl(25 100% 55% / 0.1), transparent)` }}
        />

        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/18 group-hover:border-primary/35 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <span className="absolute top-4 right-5 text-5xl font-black font-heading text-white/[0.04] select-none leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="text-lg font-bold font-heading mb-2 leading-tight">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{service.description}</p>

        <a href={service.href} className="text-primary text-sm font-semibold flex items-center gap-1.5 group/link w-fit">
          <span className="group-hover/link:underline underline-offset-2">{isLinked ? "Learn More" : "Get a Quote"}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
        </a>
      </motion.div>
    </motion.div>
  );
};

// ─── Section ─────────────────────────────────────────────────────
const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Our Services</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-none mb-4">
            EVERYTHING YOUR<br />
            <span className="text-gradient-orange">EXTERIOR NEEDS</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Professional-grade equipment and attention to detail on every single job.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
