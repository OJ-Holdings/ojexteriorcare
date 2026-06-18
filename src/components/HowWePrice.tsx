import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const points = [
  {
    num: "01",
    title: "Measured to your property",
    description:
      "Pricing is based on the actual square footage of your driveway, patio, or surfaces. Not a one-size-fits-all guess.",
  },
  {
    num: "02",
    title: "Matched to surface condition",
    description:
      "Light maintenance, heavy buildup, oil stains, or rust: the condition of your surfaces shapes the scope and the price.",
  },
  {
    num: "03",
    title: "Always free & no obligation",
    description:
      "Every quote is free. We assess the job honestly, give you a straightforward price, and leave the decision up to you.",
  },
];

const HowWePrice = () => {
  return (
    <section id="how-we-price" className="py-24 md:py-32 bg-carbon-2/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] text-ember">04</span>
            <span className="eyebrow eyebrow-dim">How We Price</span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.06] tracking-[-0.03em] text-bone">
            Every home is different, so every quote is{" "}
            <span className="accent-serif text-ember-gradient">custom.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="surface rounded-2xl p-8 lift"
            >
              <span className="ghost-numeral text-6xl md:text-7xl block mb-6 select-none" aria-hidden>
                {point.num}
              </span>
              <h3 className="font-display font-semibold text-xl md:text-2xl tracking-[-0.02em] text-bone mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-bone-dim leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-bone/10 pt-8"
        >
          <p className="text-bone-dim text-sm max-w-md">
            Tell us about your project and we&rsquo;ll get you an honest, no-pressure
            price, <span className="text-bone font-medium">usually same day.</span>
          </p>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#contact"
              className="group bg-ember text-carbon px-6 py-3.5 rounded-full font-display font-semibold text-sm flex items-center gap-2 hover:bg-ember-bright transition-colors duration-200"
            >
              Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="tel:+12623517796"
              className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-ember" /> Call
            </a>
            <a
              href="sms:+12623517796"
              className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5 text-ember" /> Text
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWePrice;
