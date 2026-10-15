import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Request a quote",
    description:
      "Fill out our quick form or call/text us. We'll get back to you with a free, no-obligation quote, usually same day.",
    cta: { label: "Get a Quote", href: "#contact" },
  },
  {
    step: "02",
    title: "We schedule your service",
    description:
      "Pick a time that works for you. We confirm your appointment and handle everything else.",
    cta: null,
  },
  {
    step: "03",
    title: "We clean & transform",
    description:
      "We arrive on time, work thoroughly, and leave your home looking incredible.",
    cta: null,
  },
];

const Process = () => {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-carbon-2/50 grain">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.08) 0%, transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-6 mb-14 md:mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">05</span>
              <span className="eyebrow eyebrow-dim">How It Works</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              Three simple{" "}
              <span className="accent-serif text-ember-gradient">steps.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-bone-dim leading-relaxed">
            No sales pitch, no runaround. From first message to finished job, the
            process is built to be effortless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {/* Connector line */}
          <div aria-hidden className="hidden md:block absolute top-[4.2rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-ember/40 via-bone/15 to-bone/15" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative surface rounded-2xl p-8 lift"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="ghost-numeral text-6xl md:text-7xl leading-none select-none" aria-hidden>
                  {s.step}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-ember" style={{ animation: i === 0 ? "pulse-glow 2.5s ease-in-out infinite" : undefined }} aria-hidden />
              </div>
              <h3 className="font-display font-semibold text-xl md:text-2xl tracking-[-0.02em] text-bone mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="text-bone-dim text-sm leading-relaxed">{s.description}</p>

              {s.cta && (
                <a
                  href={s.cta.href}
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ember group/link"
                >
                  <span className="group-hover/link:underline underline-offset-4">{s.cta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
