import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

// ─── Counter hook ────────────────────────────────────────────────
function useCountUp(target: number, duration = 1500, active = false) {
  const [val, setVal] = useState(0);
  const rafRef = useRef<number>();
  const startRef = useRef<number>();

  useEffect(() => {
    if (!active) return;
    startRef.current = undefined;

    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration, active]);

  return val;
}

const Stat = ({ value, suffix, label, active, delay = 0 }: {
  value: number; suffix: string; label: string; active: boolean; delay?: number;
}) => {
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [active, delay]);
  const count = useCountUp(value, 1400, started);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-display font-semibold text-3xl md:text-4xl text-bone leading-none tabular-nums tracking-tight">
        {count}
        <span className="text-ember">{suffix}</span>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">{label}</div>
    </div>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────
const lineVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const quickLinks = [
  { num: "01", label: "Driveways", href: "/services/driveway-pressure-washing" },
  { num: "02", label: "Patios", href: "/services/patio-cleaning" },
  { num: "03", label: "Windows", href: "/services/window-cleaning" },
];

const Hero = () => {
  const [statsActive, setStatsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  // Magnetic CTA
  const handleCtaMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const dy = (e.clientY - rect.top - rect.height / 2) * 0.18;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);
  const handleCtaLeave = useCallback(() => {
    if (ctaRef.current) ctaRef.current.style.transform = "";
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Scroll parallax on hero image
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 900], [0, 130]);

  return (
    <section ref={sectionRef} className="relative min-h-[100dvh] flex flex-col overflow-hidden grain">
      {/* ── Full-bleed background ── */}
      <motion.div className="absolute inset-[-8%_0_-8%_0]" style={{ y: parallaxY }}>
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          loading="eager"
          className="w-full h-full object-cover animate-ken-burns will-change-transform"
        />
        <div className="absolute inset-0 cine-overlay" />
        {/* Ember ambient glow */}
        <div
          aria-hidden
          className="absolute -bottom-32 -right-20 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.16) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </motion.div>

      {/* ── Content ── */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center pt-40 pb-10 md:pt-44">
        {/* Rating chip */}
        <motion.a
          href="https://www.google.com/search?q=OJ+Exterior+Care+Kenosha"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-full px-4 py-2 flex items-center gap-2.5 w-fit mb-8 hover:border-ember/40 transition-colors duration-200"
        >
          <span className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-ember text-ember" />
            ))}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
            5.0 on Google · Kenosha, WI
          </span>
        </motion.a>

        {/* Headline */}
        <div className="mb-8 max-w-5xl">
          <div className="overflow-hidden pb-1">
            <motion.h1
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-semibold text-[13vw] sm:text-[10vw] lg:text-[6.6rem] xl:text-[7.4rem] leading-[0.98] tracking-[-0.04em] text-bone"
            >
              Obsessive about
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-2">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-semibold text-[13vw] sm:text-[10vw] lg:text-[6.6rem] xl:text-[7.4rem] leading-[0.98] tracking-[-0.04em] text-bone"
            >
              the <span className="accent-serif text-ember-gradient pr-2">finish.</span>
            </motion.h1>
          </div>
        </div>

        {/* Sub + CTAs */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="text-bone/65 text-lg md:text-xl leading-relaxed max-w-xl mb-9"
        >
          Driveways, patios, windows &amp; more — restored with pro-grade equipment
          and an obsessive eye for detail. <span className="text-bone">Kenosha&rsquo;s most trusted exterior team.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <a
            ref={ctaRef}
            href="#contact"
            onMouseMove={handleCtaMove}
            onMouseLeave={handleCtaLeave}
            className="group btn-shine bg-ember text-carbon px-8 py-4 rounded-full font-display font-semibold text-base flex items-center gap-2.5 hover:bg-ember-bright glow-ember transition-colors duration-200"
            style={{ transition: "transform 0.15s ease, background-color 0.2s ease" }}
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="tel:+12623517796"
            className="glass text-bone px-8 py-4 rounded-full font-display font-medium text-base flex items-center gap-2.5 hover:border-bone/25 hover:bg-bone/10 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-ember" />
            (262) 351-7796
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-6 max-w-2xl"
        >
          <Stat value={23} suffix="+" label="Jobs Completed" active={statsActive} delay={0} />
          <Stat value={5} suffix=".0" label="Google Rating" active={statsActive} delay={150} />
          <Stat value={100} suffix="%" label="5-Star Reviews" active={statsActive} delay={300} />
          <Stat value={24} suffix="hr" label="Quote Turnaround" active={statsActive} delay={450} />
        </motion.div>
      </div>

      {/* ── Bottom index strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 border-t border-bone/10"
      >
        <div className="container py-5 flex items-center justify-between gap-6 overflow-x-auto">
          {quickLinks.map((q) => (
            <a
              key={q.num}
              href={q.href}
              className="group flex items-baseline gap-2.5 shrink-0"
            >
              <span className="font-mono text-[10px] text-ember">{q.num}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim group-hover:text-bone transition-colors duration-200">
                {q.label}
              </span>
            </a>
          ))}
          <a
            href="#services"
            className="group flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ember shrink-0"
          >
            All services
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
