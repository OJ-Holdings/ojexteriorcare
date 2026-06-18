import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import foundersImg from "@/assets/founders/founders.jpg";

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
                loading="lazy"
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
              overpromise and underdeliver. When you hire us, the people who quote
              your job are the people who show up and do it.
            </p>
            <p className="font-serif italic text-bone/80 text-lg mb-8">
              &ldquo;These are hard working young men&rdquo; — every review, basically.
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
