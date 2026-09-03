import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const services = [
  {
    name: "Driveway Cleaning",
    range: "$149–350",
    factors: ["Single car: $149–$200", "Two-car: $200–$300", "Large/circular: $300–$350"],
  },
  {
    name: "Patio Cleaning",
    range: "$99–250",
    factors: ["Small patio: $99–$150", "Large patio: $150–$250", "Heavy algae: add $50"],
  },
  {
    name: "Sidewalk & Walkway",
    range: "$75–175",
    factors: ["Short walkway: $75–$100", "Full perimeter: $125–$175", "Staining: add $30–$50"],
  },
  {
    name: "Deck Cleaning",
    range: "$150–400",
    factors: ["Small deck: $150–$225", "Large deck: $250–$400", "Wood vs. composite varies"],
  },
  {
    name: "Window Cleaning",
    range: "$75–250",
    factors: ["Up to 10 windows: $75–$125", "Full home: $150–$250", "Inside + outside available"],
  },
  {
    name: "Gutter Cleaning",
    range: "$100–225",
    factors: ["Single story: $100–$150", "Two story: $150–$225", "Flush & test included"],
  },
  {
    name: "Oil Stain Treatment",
    range: "$75–200",
    factors: ["Add-on to driveway clean", "Standalone: $75–$150", "Severe staining: $150–$200"],
  },
  {
    name: "Rust Stain Removal",
    range: "$75–175",
    factors: ["Per affected area", "Concrete & pavers", "Standalone or add-on"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-36 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.07) 0%, transparent 65%)", filter: "blur(40px)" }}
      />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-12 gap-6 mb-14 md:mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">04</span>
              <span className="eyebrow eyebrow-dim">Rates</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              Transparent pricing,{" "}
              <span className="accent-serif text-ember-gradient">always.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 self-end text-bone-dim leading-relaxed">
            Every property is different, so every quote is custom. These ranges give
            you a realistic ballpark. Your actual quote is always free and
            no-obligation.
          </p>
        </motion.div>

        {/* Rate card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="surface rounded-2xl max-w-4xl mx-auto overflow-hidden"
        >
          <div className="border-b border-bone/10 px-6 md:px-12 py-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
              OJ Exterior Care
            </span>
            <span className="accent-serif text-xl text-ember">Rate card</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
              Summer 2026
            </span>
          </div>

          <div className="px-6 md:px-12 py-8 md:py-12 grid md:grid-cols-2 gap-x-14 gap-y-9">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <div className="flex items-baseline">
                  <h3 className="font-display font-semibold text-lg md:text-xl tracking-[-0.01em] text-bone shrink-0">
                    {s.name}
                  </h3>
                  <span className="dot-leader" aria-hidden />
                  <span className="font-mono text-sm md:text-base text-ember font-semibold shrink-0 tabular-nums">
                    {s.range}
                  </span>
                </div>
                <ul className="mt-2.5 space-y-1">
                  {s.factors.map((f) => (
                    <li key={f} className="font-mono text-[11px] text-bone-dim tracking-wide">
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-bone/10 px-6 md:px-12 py-4 bg-carbon/40">
            <p className="font-mono text-[11px] text-bone-dim tracking-wide">
              * Final price depends on surface size, condition, and access.{" "}
              <span className="text-bone font-medium">We never charge more than quoted.</span>
            </p>
          </div>
        </motion.div>

        {/* How pricing works - compact strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-x-10 gap-y-6"
        >
          {[
            { t: "Measured to your property", d: "Priced on actual square footage, not a one-size-fits-all guess." },
            { t: "Matched to condition", d: "Light maintenance or heavy buildup, the scope shapes the price." },
            { t: "Free & no obligation", d: "Honest assessment, straightforward price, decision's all yours." },
          ].map((p, i) => (
            <div key={p.t} className="flex gap-3.5">
              <span className="font-mono text-[10px] text-ember mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-display font-semibold text-[15px] text-bone mb-1">{p.t}</p>
                <p className="text-[13px] text-bone-dim leading-relaxed">{p.d}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-bone/10 pt-9"
        >
          <div>
            <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-[-0.02em] text-bone">
              Get your exact price.{" "}
              <span className="accent-serif text-ember">It&rsquo;s free.</span>
            </h3>
            <p className="text-bone-dim text-sm mt-1.5">
              Submit your info and we&rsquo;ll get back to you with a real number, usually same day.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="#contact"
              className="group bg-ember text-carbon px-6 py-3.5 rounded-full font-display font-semibold text-sm flex items-center gap-2 hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
