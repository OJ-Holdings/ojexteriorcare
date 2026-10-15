import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import foundersImg from "@/assets/founders/founders.webp";

const FoundersStrip = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden grain">
      <div
        aria-hidden
        className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.07) 0%, transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="frame lift relative">
              <img
                src={foundersImg}
                alt="Oscar and Jacob, co-founders of OJ Exterior Care"
                width={1440}
                height={1920}
                loading="lazy"
                decoding="async"
                className="w-full object-cover object-top aspect-[3/4]"
              />
              <span className="absolute bottom-3 left-3 bg-carbon/80 backdrop-blur-sm text-bone font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                Oscar &amp; Jacob, Co-Founders
              </span>
            </div>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 md:col-start-7"
          >
            <span className="eyebrow block mb-6">The Crew</span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-bone mb-6">
              Hi, we&rsquo;re{" "}
              <span className="accent-serif text-ember-gradient">Oscar &amp; Jacob.</span>
            </h2>
            <p className="text-bone-dim text-lg leading-relaxed mb-4 max-w-lg">
              Two guys from Kenosha who got tired of watching big, faceless companies
              overpromise and underdeliver. No job is finished until an owner signs off
              on it. We take full responsibility for every job we complete, and if
              anything isn&rsquo;t up to our standard, we come back and fix it free of charge.
            </p>
            <p className="font-serif italic text-bone/80 text-lg mb-8">
              We&rsquo;re hungry, ambitious entrepreneurs who turned OJ into an established
              company in under two years, with 100+ jobs done and a perfect 5.0 on Google.
            </p>
            <a
              href="/about"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ember link-grow pb-0.5"
            >
              Meet the crew
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersStrip;
