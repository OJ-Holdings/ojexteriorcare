import { motion } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
// TODO: Replace beforeSrc values below with actual "before" photos once available.
// Currently using the two result images as stand-ins for the slider demo.
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

// Real job photos — before & after pairs (hover grid)
import drivewayBefore from "@/assets/work/driveway-before.jpg";
import drivewayAfter from "@/assets/work/driveway-after.jpg";
import patioBefore from "@/assets/work/patio-before.jpg";
import patioAfter from "@/assets/work/patio-after.jpg";
import sidewalkBefore from "@/assets/work/sidewalk-before.jpg";
import sidewalkAfter from "@/assets/work/sidewalk-after.jpg";
import deckBefore from "@/assets/work/deck-before.jpg";
import deckAfter from "@/assets/work/deck-after.jpg";
import oilBefore from "@/assets/work/oil-before.jpg";
import oilAfter from "@/assets/work/oil-after.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/ojexteriorcare/";
const TIKTOK_URL = "https://www.tiktok.com/@oj.exterior.care";

// ─── Slider with auto-demo sweep ─────────────────────────────────
interface SliderProps {
  beforeSrc: string;
  afterSrc: string;
  label: string;
  demo?: boolean;
}

const BeforeAfterSlider = ({ beforeSrc, afterSrc, label, demo = false }: SliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const interacted = useRef(false);
  const demoPlayed = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  const updateSlider = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(95, Math.max(5, raw)));
  }, []);

  const markInteracted = useCallback(() => {
    interacted.current = true;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    markInteracted();
    isDragging.current = true;
  }, [markInteracted]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current) return;
      updateSlider(e.clientX);
    },
    [updateSlider]
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      markInteracted();
      updateSlider(e.touches[0].clientX);
    },
    [updateSlider, markInteracted]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // Auto-demo: one smooth sweep when first scrolled into view
  useEffect(() => {
    if (!demo) return;
    const el = containerRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || demoPlayed.current || interacted.current) return;
        demoPlayed.current = true;

        const start = performance.now();
        const duration = 2600;
        const tick = (ts: number) => {
          if (interacted.current) return;
          const p = Math.min((ts - start) / duration, 1);
          // Smooth full sweep: 50 → 76 → 24 → 50
          setSliderPos(50 + Math.sin(p * Math.PI * 2) * 26);
          if (p < 1) rafRef.current = requestAnimationFrame(tick);
          else setSliderPos(50);
        };
        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.55 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [demo]);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative frame select-none cursor-ew-resize bg-carbon-2"
        ref={containerRef}
        onTouchMove={handleTouchMove}
      >
        <img
          src={afterSrc}
          alt={`After — ${label}`}
          draggable={false}
          width={1280}
          height={768}
          className="w-full aspect-[16/10] object-cover block pointer-events-none"
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={`Before — ${label}`}
            draggable={false}
            width={1280}
            height={768}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-carbon/30" />
        </div>

        <div className="absolute top-4 left-4 pointer-events-none z-10">
          <span className="bg-carbon/80 backdrop-blur-sm text-bone font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
            Before
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none z-10">
          <span className="bg-leaf text-carbon font-mono font-semibold text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
            After
          </span>
        </div>

        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => { markInteracted(); isDragging.current = true; }}
          onTouchEnd={() => { isDragging.current = false; }}
        >
          <div className="absolute inset-y-0 w-[2px] bg-bone shadow-[0_0_12px_rgba(0,0,0,0.6)]" />
          <div className="relative w-11 h-11 rounded-full bg-bone shadow-xl flex items-center justify-center">
            <MoveHorizontal className="w-5 h-5 text-carbon" />
          </div>
        </div>
      </div>

      <figcaption className="caption flex items-center justify-between mt-4">
        <span>{label}</span>
        <span className="text-ember">Drag to compare</span>
      </figcaption>
    </motion.figure>
  );
};

const pairs: SliderProps[] = [
  {
    beforeSrc: beforeAfter2, // TODO: swap for actual before photo
    afterSrc: beforeAfter1,
    label: "Patio restoration — Kenosha, WI",
    demo: true,
  },
  {
    beforeSrc: beforeAfter1, // TODO: swap for actual before photo
    afterSrc: beforeAfter2,
    label: "Driveway oil stain removal",
  },
];

// ─── Hover-reveal job grid ───────────────────────────────────────
const jobs = [
  { label: "Driveway",  before: drivewayBefore, after: drivewayAfter },
  { label: "Patio",     before: patioBefore,    after: patioAfter },
  { label: "Sidewalk",  before: sidewalkBefore, after: sidewalkAfter },
  { label: "Deck",      before: deckBefore,     after: deckAfter },
  { label: "Oil Stain", before: oilBefore,      after: oilAfter },
];

const JobCard = ({ job, index }: { job: typeof jobs[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      <div className="group relative aspect-[4/3] frame lift">
        <img
          src={job.before}
          alt={`${job.label} before cleaning`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <img
          src={job.after}
          alt={`${job.label} after cleaning`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
        <span
          className="absolute top-3 right-3 font-mono font-medium text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full transition-colors duration-300"
          style={{
            background: hovered ? "hsl(var(--leaf))" : "hsl(var(--carbon) / 0.8)",
            color: hovered ? "hsl(var(--carbon))" : "hsl(var(--bone))",
            backdropFilter: "blur(6px)",
          }}
        >
          {hovered ? "After ✓" : "Before"}
        </span>
      </div>
      <figcaption className="caption flex items-center justify-between mt-2.5">
        <span>{job.label}</span>
        <span className="hidden sm:block">Hover to reveal</span>
      </figcaption>
    </motion.figure>
  );
};

// ─── Section ─────────────────────────────────────────────────────
const BeforeAfter = () => {
  return (
    <section id="results" className="py-24 md:py-36 bg-carbon-2/50">
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
              <span className="font-mono text-[11px] text-ember">01</span>
              <span className="eyebrow eyebrow-dim">Results</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              See the{" "}
              <span className="accent-serif text-ember-gradient">difference.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-bone-dim leading-relaxed">
            Drag the slider, hover the photos. Real results from real homes in
            Kenosha and Racine. Nothing staged, nothing stock.
          </p>
        </motion.div>

        {/* Sliders */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-16 md:mb-20">
          {pairs.map((pair) => (
            <BeforeAfterSlider key={pair.label} {...pair} />
          ))}
        </div>

        {/* Hover grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6 mb-10">
          {jobs.map((job, i) => (
            <JobCard key={job.label} job={job} index={i} />
          ))}
        </div>

        {/* Social + more work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 pt-7"
        >
          <a
            href="/our-work"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember link-grow pb-0.5"
          >
            View the full portfolio →
          </a>
          <div className="flex items-center gap-5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim hover:text-bone transition-colors duration-200"
            >
              Instagram ↗
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim hover:text-bone transition-colors duration-200"
            >
              TikTok ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
