import { motion } from "framer-motion";
import { MessageSquare, CalendarCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Request a Quote",
    description: "Fill out our quick form or give us a call. We'll get back to you fast with a free, no-obligation quote.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "We Schedule Your Service",
    description: "Pick a time that works for you. We'll confirm your appointment and handle the rest.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "We Clean & Transform",
    description: "Our team arrives on time, cleans your surfaces, and leaves your home looking incredible.",
  },
];

const Process = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Three Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center relative">
                <s.icon className="w-7 h-7 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-orange text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
