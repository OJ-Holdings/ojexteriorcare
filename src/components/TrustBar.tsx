import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, MapPin } from "lucide-react";

const signals = [
  {
    icon: Star,
    value: "5.0",
    label: "Google Rating",
    sub: "All 5-star reviews",
  },
  {
    icon: ShieldCheck,
    value: "Insured",
    label: "Fully Protected",
    sub: "Licensed & covered",
  },
  {
    icon: Zap,
    value: "Same Day",
    label: "Fast Quotes",
    sub: "Usually within hours",
  },
  {
    icon: MapPin,
    value: "Local",
    label: "Kenosha & Racine",
    sub: "Serving your community",
  },
];

const TrustBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative border-y border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-orange" />

      <div className="container relative py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 md:gap-y-0 md:divide-x md:divide-border">
          {signals.map(({ icon: Icon, value, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 md:justify-center md:px-8"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-base font-black font-heading text-foreground leading-none tracking-wide">
                  {value}
                </p>
                <p className="text-xs font-semibold text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
