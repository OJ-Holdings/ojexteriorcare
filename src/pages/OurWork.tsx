import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import patioBefore from "@/assets/work/patio-before.webp";
import patioAfter from "@/assets/work/patio-after.webp";
import oilBefore from "@/assets/work/oil-before.webp";
import oilAfter from "@/assets/work/oil-after.webp";
import deckBefore from "@/assets/work/deck-before.webp";
import deckAfter from "@/assets/work/deck-after.webp";
import drivewayWalkway from "@/assets/work/driveway-walkway-before-after.webp";
import exposedAggregate from "@/assets/work/exposed-aggregate-before-after.webp";
import drivewaySpots from "@/assets/work/driveway-spots-before-after.webp";
import windowCleaning from "@/assets/work/window-cleaning.webp";

type Project = {
  label: string;
  before?: string;
  after?: string;
  full?: string;
  location: string;
};

const projects: Project[] = [
  {
    label: "Driveway and Walkway Cleaning",
    full: drivewayWalkway,
    location: "Kenosha, WI",
  },
  {
    label: "Exposed Aggregate Patio Cleaning",
    full: exposedAggregate,
    location: "Kenosha Area",
  },
  {
    label: "Driveway Spot Removal",
    full: drivewaySpots,
    location: "Southeast Wisconsin",
  },
  { label: "Patio Restoration", before: patioBefore, after: patioAfter, location: "Kenosha, WI" },
  { label: "Oil Stain Removal", before: oilBefore, after: oilAfter, location: "Kenosha, WI" },
  { label: "Window Cleaning", full: windowCleaning, location: "Kenosha Area" },
  { label: "Deck Cleaning", before: deckBefore, after: deckAfter, location: "Kenosha, WI" },
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-carbon">
      <div className="fixed top-0 inset-x-0 z-50">
        <Header />
      </div>

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden grain">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2.5 w-fit mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
                The Portfolio, 2025/26
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.0] tracking-[-0.04em] text-bone mb-6 max-w-4xl">
              Real homes. Real{" "}
              <span className="accent-serif text-ember-gradient">transformations.</span>
            </h1>
            <p className="text-bone-dim text-lg md:text-xl max-w-2xl leading-relaxed">
              Browse before-and-after results from driveways, patios, windows, and
              more across southeast Wisconsin and northern Illinois.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-x-10 md:gap-y-14">
            {projects.map((p, i) => (
              <motion.figure
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="frame bg-carbon-2 lift">
                  {p.full ? (
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={p.full}
                        alt={p.label}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      {p.label !== "Window Cleaning" && (
                        <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-carbon/80 backdrop-blur-sm text-bone font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                          Before / After
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="relative grid grid-cols-2">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={p.before}
                          alt={`${p.label} before`}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <span className="absolute top-3 left-3 bg-carbon/80 backdrop-blur-sm text-bone font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                          Before
                        </span>
                      </div>
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={p.after}
                          alt={`${p.label} after`}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                        <span className="absolute top-3 right-3 bg-leaf text-carbon font-mono font-semibold text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                          After
                        </span>
                      </div>
                      <div
                        aria-hidden
                        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-ember z-10"
                      />
                    </div>
                  )}
                </div>
                <figcaption className="caption flex items-center justify-between mt-4">
                  <span>{p.label}</span>
                  <span>{p.location}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 80% at 85% 20%, hsl(var(--ember) / 0.10), transparent)" }}
            />
            <div className="relative">
              <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone mb-3">
                Want results like these at{" "}
                <span className="accent-serif text-ember-gradient">your home?</span>
              </h2>
              <p className="text-bone-dim">Free, no-pressure quotes. Usually same day.</p>
            </div>
            <div className="relative flex flex-wrap gap-3 shrink-0">
              <a
                href="/#contact"
                className="group bg-ember text-carbon px-6 py-3.5 rounded-full font-display font-semibold text-sm flex items-center gap-2 hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
              >
                Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+12625153083"
                className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-ember" /> Call
              </a>
              <a
                href="sms:+12625153083"
                className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-ember" /> Text
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
