import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andrew Capobianco",
    text: "I highly recommend OJ Exterior Care. They did an extraordinary job on my back patio and my side walkway. Both look cleaner and brighter than they ever have. These are hard working young men and they deliver a quality product at a reasonable price.",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Katherine Smith",
    text: "Oscar and Jacob are organized, responsive and a pleasure to work with. They did an excellent job of cleaning all my windows and I would not hesitate to hire them again.",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Chris Honey",
    text: "These guys did a spectacular job! My windows look great. I highly recommend them.",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Troy Buck",
    text: "Did a great job, very professional, and would hire them again.",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Kathy Jurgens",
    text: "Great experience and great results!",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Dave",
    text: "Nice job. On time. Good communication.",
    rating: 5,
    when: "June 2026",
  },
];

// Duplicate for seamless loop
const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const row2 = [...testimonials.slice(3), ...testimonials.slice(3)];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="relative flex-shrink-0 w-[320px] bg-gradient-card border border-border rounded-2xl p-6 mx-2 group hover:border-primary/25 transition-colors duration-300">
    {/* Quote mark */}
    <span className="absolute top-4 right-5 text-5xl font-serif text-primary/10 leading-none select-none">"</span>
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
    <div className="flex items-center justify-between pt-4 border-t border-border/60">
      <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
      <p className="text-xs text-muted-foreground">{t.when}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">Google Reviews</span>
            <h2 className="text-4xl md:text-6xl font-black font-heading leading-none">
              WHAT HOMEOWNERS<br />
              <span className="text-gradient-orange">ARE SAYING</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=OJ+Exterior+Care+Kenosha"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors border border-border rounded-xl px-4 py-2.5 hover:border-primary/30"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            5.0 on Google
          </a>
        </motion.div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-fast">
          {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
        {/* Edge fade */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <div className="flex animate-marquee-reverse-fast">
          {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
