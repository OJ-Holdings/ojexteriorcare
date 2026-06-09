import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

// ─── Counter hook ────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>();
  const startRef = useRef<number>();

  useEffect(() => {
    if (!active) return;
    startRef.current = undefined;

    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setVal(Math.round(ease * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, active]);

  return val;
}

// ─── Stat card ────────────────────────────────────────────────────
interface StatProps {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
  delay?: number;
}

const Stat = ({ value, suffix, label, active, delay = 0 }: StatProps) => {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  const count = useCountUp(value, 1600, started);

  return (
    <div className="flex flex-col gap-1">
      <div className="text-3xl md:text-4xl font-black font-heading leading-none text-foreground tabular-nums">
        {count}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
};

// ─── Floating water particle ──────────────────────────────────────
const Particle = ({ x, delay, size }: { x: number; delay: number; size: number }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      bottom: "8%",
      width: `${size}px`,
      height: `${size}px`,
      background: `hsl(25 100% 55% / ${0.3 + size * 0.08})`,
      animation: `float-up ${2.2 + size * 0.4}s ease-out infinite`,
      animationDelay: `${delay}s`,
      filter: size > 4 ? `blur(1px)` : "none",
    }}
  />
);

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  x: (i * 4.7) % 96,
  delay: (i * 0.28) % 3.5,
  size: 2 + (i % 4),
}));

// ─── Hero ─────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const [statsActive, setStatsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Magnetic CTA refs
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const animRef = useRef<number>();

  const handleCtaMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.22;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.22;
    el.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
  }, []);

  const handleCtaLeave = useCallback(() => {
    if (ctaRef.current) ctaRef.current.style.transform = "";
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden noise-bg"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Layered overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, hsl(0 0% 3% / 0.97) 0%, hsl(0 0% 5% / 0.80) 55%, hsl(0 0% 3% / 0.94) 100%)",
          }}
        />
        {/* Orange ambient glow — bottom-right */}
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            right: "5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, hsl(25 100% 55% / 0.14) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        {/* Top-left subtle glow */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle, hsl(25 100% 55% / 0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Particles ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="container relative z-10 pt-44 pb-28">
        <div className="max-w-5xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              Kenosha, WI · Pressure Washing & Exterior Care
            </span>
          </motion.div>

          {/* Big stacked heading — clip-reveal per line */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div variants={lineVariants}>
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem] font-black font-heading leading-[0.92] tracking-tight text-foreground">
                  MAKE YOUR
                </h1>
              </motion.div>
            </div>

            {/* Line 2 — orange */}
            <div className="overflow-hidden">
              <motion.div variants={lineVariants}>
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem] font-black font-heading leading-[0.92] tracking-tight text-gradient-orange-intense">
                  HOME
                </h1>
              </motion.div>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.div variants={lineVariants}>
                <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9rem] xl:text-[10rem] font-black font-heading leading-[0.92] tracking-tight text-foreground">
                  SHINE.
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="text-muted-foreground text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Driveways, patios, windows & more. Fast quotes. Professional results.{" "}
            <span className="text-foreground/70">Kenosha's most trusted exterior team.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.85 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              ref={ctaRef}
              href="#contact"
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              className="group bg-gradient-orange-intense text-white px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 btn-shine shadow-glow transition-shadow duration-300 hover:shadow-[0_0_60px_hsl(25_100%_55%/0.5)]"
              style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="tel:+12623517796"
              className="border border-white/15 bg-white/[0.04] backdrop-blur-sm text-foreground px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-primary" />
              (262) 351-7796
            </a>

            <a
              href="sms:+12623517796"
              className="hidden sm:flex border border-white/15 bg-white/[0.04] backdrop-blur-sm text-foreground px-8 py-4 rounded-xl font-bold text-base items-center gap-2 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              Text Us
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.05 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/[0.08]"
          >
            <Stat value={23} suffix="+" label="Jobs Completed" active={statsActive} delay={0} />
            <Stat value={5} suffix=".0★" label="Google Rating" active={statsActive} delay={200} />
            <Stat value={100} suffix="%" label="5-Star Reviews" active={statsActive} delay={400} />
            <Stat value={24} suffix="hr" label="Quote Turnaround" active={statsActive} delay={600} />
          </motion.div>
        </div>
      </div>

      {/* ── Diagonal bottom divider ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: "hsl(var(--background))",
          clipPath: "polygon(0 100%, 100% 30%, 100% 100%)",
        }}
      />

      {/* ── Bottom orange line ── */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, hsl(25 100% 55% / 0.5), transparent)",
        }}
      />
    </section>
  );
};

export default Hero;
