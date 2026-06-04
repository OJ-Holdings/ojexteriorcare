import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import patioBefore from "@/assets/work/patio-before.jpg";
import patioAfter from "@/assets/work/patio-after.jpg";
import oilBefore from "@/assets/work/oil-before.jpg";
import oilAfter from "@/assets/work/oil-after.jpg";
import gutterBefore from "@/assets/work/gutter-before.jpg";
import gutterAfter from "@/assets/work/gutter-after.jpg";
import deckBefore from "@/assets/work/deck-before.jpg";
import deckAfter from "@/assets/work/deck-after.jpg";
import drivewayWalkwayAsset from "@/assets/uploads/driveway-walkway-before-after.png.asset.json";
import exposedAggregateAsset from "@/assets/uploads/exposed-aggregate-before-after.png.asset.json";
import drivewaySpotsAsset from "@/assets/uploads/driveway-spots-before-after.png.asset.json";
import windowCleaningAsset from "@/assets/uploads/window-cleaning.jpg.asset.json";

type AssetPointer = { url: string };
type Project = {
  label: string;
  before?: string;
  after?: string;
  full?: string;
  location: string;
};

const drivewayWalkwayUrl = (drivewayWalkwayAsset as AssetPointer).url;
const exposedAggregateUrl = (exposedAggregateAsset as AssetPointer).url;
const drivewaySpotsUrl = (drivewaySpotsAsset as AssetPointer).url;
const windowCleaningUrl = (windowCleaningAsset as AssetPointer).url;

const projects: Project[] = [
  {
    label: "Driveway and Walkway Cleaning",
    full: drivewayWalkwayUrl,
    location: "Kenosha, WI",
  },
  {
    label: "Exposed Aggregate Patio Cleaning",
    full: exposedAggregateUrl,
    location: "Kenosha Area",
  },
  {
    label: "Driveway Spot Removal",
    full: drivewaySpotsUrl,
    location: "Southeast Wisconsin",
  },
  { label: "Patio Restoration", before: patioBefore, after: patioAfter, location: "Kenosha, WI" },
  { label: "Oil Stain Removal", before: oilBefore, after: oilAfter, location: "Kenosha, WI" },
  { label: "Window Cleaning", full: windowCleaningAsset.url, location: "Kenosha Area" },
  { label: "Gutter Cleaning", before: gutterBefore, after: gutterAfter, location: "Kenosha, WI" },
  { label: "Deck Cleaning", before: deckBefore, after: deckAfter, location: "Kenosha, WI" },
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mt-3 mb-5">
              Real Homes. <span className="text-gradient-orange">Real Transformations.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Browse before-and-after results from driveways, patios, windows, and more across Kenosha and the surrounding area.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
                className="group rounded-2xl border border-border bg-gradient-card overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all duration-300"
              >
                {p.full ? (
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={p.full}
                      alt={p.label}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.label !== "Window Cleaning" && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border text-foreground text-[10px] font-bold tracking-widest px-2.5 py-1 rounded">
                        BEFORE / AFTER
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative grid grid-cols-2">
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={p.before}
                        alt={`${p.label} before`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm border border-border text-muted-foreground text-[10px] font-bold tracking-widest px-2.5 py-1 rounded">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={p.after}
                        alt={`${p.label} after`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-gradient-orange text-primary-foreground text-[10px] font-bold tracking-widest px-2.5 py-1 rounded shadow-glow">
                        AFTER
                      </div>
                    </div>
                    <div
                      aria-hidden
                      className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-gradient-orange shadow-glow z-10"
                    />
                  </div>
                )}
                <div className="px-5 py-4 border-t border-border flex items-center justify-between gap-4">
                  <h3 className="font-heading font-bold text-base md:text-lg">{p.label}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider shrink-0">{p.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-gradient-card p-8 md:p-12 shadow-card"
          >
            <h2 className="text-2xl md:text-4xl font-bold font-heading mb-3">
              Want Results Like These at <span className="text-gradient-orange">Your Home</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Free, no-pressure quotes - usually same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-orange text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+12623517796"
                className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="sms:+12623517796"
                className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Text Us
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
