import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Request a Quote",
    description: "Fill out our quick form or call/text us. We'll get back to you fast with a free, no-obligation quote.",
    cta: { label: "Get a Quote", href: "#contact" },
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "We Schedule Your Service",
    description: "Pick a time that works for you. We confirm your appointment and handle everything else.",
    cta: null,
  },
  {
    icon: Sparkles,
    step: "03",
    title: "We Clean & Transform",
    description: "We arrive on time, work thoroughly, and leave your home looking incredible.",
    cta: null,
  },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-lg"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3 block">How It Works</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading leading-none">
            THREE<br />
            <span className="text-gradient-orange">SIMPLE STEPS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Giant step number */}
              <div
                aria-hidden
                className="text-[5rem] md:text-[6rem] font-black font-heading leading-none text-white/[0.06] select-none mb-2 group-hover:text-primary/[0.1] transition-colors duration-300"
              >
                {s.step}
              </div>

              {/* Card */}
              <div className="relative bg-gradient-card border border-border rounded-2xl p-6 group-hover:border-primary/25 transition-colors duration-300 hover:shadow-card-hover">
                {/* Orange top accent */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-orange rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/18 group-hover:border-primary/35 transition-all duration-300">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-heading font-bold text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>

                {s.cta && (
                  <a
                    href={s.cta.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-primary text-sm font-semibold group/link"
                  >
                    <span className="group-hover/link:underline underline-offset-2">{s.cta.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-1/2 -right-5 text-primary/30 text-xl z-10"
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
