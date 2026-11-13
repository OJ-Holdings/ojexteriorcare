import { motion } from "framer-motion";
import { ArrowRight, Phone, Snowflake } from "lucide-react";
import { SPRING_LOCKIN_EVENT } from "@/config/season";

// Spring 2027 lock-in. Rendered on the homepage during the lastcall and winter phases only.
const facts = ["10% off your quote", "No deposit", "Book by Feb 28"];

const SpringLockIn = () => {
  // Tell the quote form to pick the spring option; the anchor itself scrolls to the form
  const lockIn = () => window.dispatchEvent(new Event(SPRING_LOCKIN_EVENT));

  return (
    <section id="spring" className="py-24 md:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] text-ember">05</span>
            <span className="eyebrow eyebrow-dim flex items-center gap-2">
              <Snowflake aria-hidden className="w-3 h-3 text-ice-deep" />
              Spring 2027
            </span>
          </div>
          <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
            Beat the spring{" "}
            <span className="accent-serif text-ember-gradient">rush.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="surface frost-edge rounded-2xl overflow-hidden"
        >
          <div className="px-6 py-8 md:px-12 md:py-12">
            <p className="text-bone/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              Pressure washing is done for the season. Lock in your spring 2027 date now and get 10% off
              your quote. No deposit, just a real date on our calendar.
            </p>

            <ul className="mt-8 md:mt-10 grid sm:grid-cols-3 border-y border-bone/10">
              {facts.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 py-4 sm:py-6 border-b last:border-b-0 sm:border-b-0 sm:border-l sm:first:border-l-0 border-bone/10 sm:px-6 sm:first:pl-0"
                >
                  <Snowflake aria-hidden className="w-4 h-4 shrink-0 text-ice-deep" />
                  <span className="font-display font-semibold text-lg md:text-xl tracking-[-0.01em] text-bone">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                onClick={lockIn}
                className="group btn-shine bg-ember text-carbon px-7 py-4 rounded-full font-display font-semibold text-base flex items-center justify-center gap-2 hover:bg-ember-bright transition-colors duration-200"
              >
                Lock in my spring spot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+12625153083"
                className="glass text-bone px-7 py-4 rounded-full font-display font-medium text-base flex items-center justify-center gap-2 hover:border-bone/25 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-ember" /> Call
              </a>
            </div>

            <p className="mt-6 font-mono text-[11px] text-bone-dim tracking-wide">
              Applies to spring 2027 service dates booked by Feb 28, 2027. $150 visit minimum still applies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpringLockIn;
