import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useCallback } from "react";

import sidingAfter from "@/assets/work/siding-after.webp";
import drivewayAfter from "@/assets/work/driveway-after.webp";
import patioAfter from "@/assets/work/patio-after.webp";
import sidewalkAfter from "@/assets/work/sidewalk-after.webp";
import deckAfter from "@/assets/work/deck-after.webp";
import oilAfter from "@/assets/work/oil-after.webp";

const services = [
  { title: "House Washing", description: "Soft wash for siding, trim, and soffits. Lifts dirt, algae, and mildew without blasting your home.", href: "#contact", img: sidingAfter },
  { title: "Driveway Cleaning", description: "Remove years of grime, oil stains, and buildup. Restore curb appeal in hours.", href: "/services/driveway-pressure-washing", img: drivewayAfter },
  { title: "Patio Cleaning", description: "Deep clean that removes dirt, algae, and discoloration from any surface.", href: "/services/patio-cleaning", img: patioAfter },
  { title: "Sidewalk Cleaning", description: "Clean, safe sidewalks that look fresh and well-maintained year-round.", href: "#contact", img: sidewalkAfter },
  { title: "Deck Cleaning", description: "Gentle yet thorough cleaning for wood, composite, and concrete decks.", href: "#contact", img: deckAfter },
  { title: "Oil Stain Treatment", description: "Specialized treatment to lift and remove stubborn oil stains from concrete.", href: "#contact", img: oilAfter },
  { title: "Rust Stain Treatment", description: "Expert rust removal from concrete, pavers, and stone surfaces.", href: "#contact", img: oilAfter },
  { title: "Exterior Surface Washing", description: "Comprehensive cleaning for walls, steps, retaining walls, and more.", href: "#contact", img: patioAfter },
  { title: "Window Cleaning", description: "Crystal-clear, streak-free windows inside and out. Let the light in.", href: "/services/window-cleaning", img: sidewalkAfter },
];

const ServiceRow = ({
  service,
  index,
  onEnter,
  onLeave,
}: {
  service: typeof services[0];
  index: number;
  onEnter: (img: string) => void;
  onLeave: () => void;
}) => {
  const isLinked = service.href.startsWith("/services");

  return (
    <motion.a
      href={service.href}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onEnter(service.img)}
      onMouseLeave={onLeave}
      className="group relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[64px_1fr_1fr_auto] items-center gap-x-4 md:gap-x-8 border-b border-bone/10 py-6 md:py-7 px-3 md:px-5 -mx-3 md:-mx-5 rounded-xl transition-colors duration-300 hover:bg-carbon-3"
    >
      <span className="font-mono text-[11px] text-bone-dim group-hover:text-ember transition-colors duration-300 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display font-semibold text-2xl md:text-[1.9rem] leading-tight tracking-[-0.02em] text-bone group-hover:translate-x-1.5 transition-transform duration-300">
        {service.title}
      </h3>
      <p className="hidden md:block text-sm text-bone-dim leading-relaxed max-w-sm">
        {service.description}
      </p>
      <span className="flex items-center gap-3 justify-self-end">
        <span className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isLinked ? "View Service" : "Get a Quote"}
        </span>
        <span className="w-10 h-10 rounded-full border border-bone/15 flex items-center justify-center group-hover:bg-ember group-hover:border-ember transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-bone-dim group-hover:text-carbon transition-colors duration-300" />
        </span>
      </span>
    </motion.a>
  );
};

const Services = () => {
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Cursor-following preview (desktop only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 260, damping: 28, mass: 0.6 });
  const py = useSpring(my, { stiffness: 260, damping: 28, mass: 0.6 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }, [mx, my]);

  return (
    <section id="services" className="py-24 md:py-36 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-6 mb-14 md:mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">02</span>
              <span className="eyebrow eyebrow-dim">Services</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              Everything your exterior{" "}
              <span className="accent-serif text-ember-gradient">needs.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-bone-dim leading-relaxed">
            Pro equipment and real attention on every job.
            Nine services, one standard: done right.
          </p>
        </motion.div>

        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          className="relative border-t border-bone/10"
        >
          {/* Floating cursor preview */}
          <motion.div
            aria-hidden
            className="hidden lg:block absolute z-30 pointer-events-none w-[300px] aspect-[4/3] rounded-xl overflow-hidden border border-bone/20 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            style={{
              x: px,
              y: py,
              translateX: 40,
              translateY: "-50%",
              opacity: previewImg ? 1 : 0,
              scale: previewImg ? 1 : 0.92,
              transition: "opacity 0.25s ease, scale 0.25s ease",
            }}
          >
            {previewImg && (
              <img
                src={previewImg}
                alt=""
                width={300}
                height={225}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>

          {services.map((service, i) => (
            <ServiceRow
              key={service.title}
              service={service}
              index={i}
              onEnter={(img) => setPreviewImg(img)}
              onLeave={() => setPreviewImg(null)}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-bone-dim">
          Gutters or roof?{" "}
          <a href="#contact" className="text-ember font-medium hover:underline underline-offset-4">
            Ask us.
          </a>{" "}
          We handle those case by case.
        </p>
      </div>
    </section>
  );
};

export default Services;
