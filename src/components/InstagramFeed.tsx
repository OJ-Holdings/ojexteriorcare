import { motion } from "framer-motion";
import { useState } from "react";

// Real job photos — before & after pairs
import drivewayBefore from "@/assets/work/driveway-before.jpg";
import drivewayAfter from "@/assets/work/driveway-after.jpg";
import patioBefore from "@/assets/work/patio-before.jpg";
import patioAfter from "@/assets/work/patio-after.jpg";
import sidewalkBefore from "@/assets/work/sidewalk-before.jpg";
import sidewalkAfter from "@/assets/work/sidewalk-after.jpg";
import deckBefore from "@/assets/work/deck-before.jpg";
import deckAfter from "@/assets/work/deck-after.jpg";
import gutterBefore from "@/assets/work/gutter-before.jpg";
import gutterAfter from "@/assets/work/gutter-after.jpg";
import oilBefore from "@/assets/work/oil-before.jpg";
import oilAfter from "@/assets/work/oil-after.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/ojexteriorcare/";
const TIKTOK_URL = "https://www.tiktok.com/@oj.exterior.care";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.78a4.85 4.85 0 0 1-1.01-.09z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const jobs = [
  { label: "Driveway",  before: drivewayBefore, after: drivewayAfter },
  { label: "Patio",     before: patioBefore,    after: patioAfter },
  { label: "Sidewalk",  before: sidewalkBefore, after: sidewalkAfter },
  { label: "Deck",      before: deckBefore,     after: deckAfter },
  { label: "Gutters",   before: gutterBefore,   after: gutterAfter },
  { label: "Oil Stain", before: oilBefore,      after: oilAfter },
];

// Hover-to-reveal before → after card
const JobCard = ({ job, index }: { job: typeof jobs[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      <div className="group relative aspect-[4/3] frame lift">
        <img
          src={job.before}
          alt={`${job.label} before cleaning`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <img
          src={job.after}
          alt={`${job.label} after cleaning`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        />
        <span
          className="absolute top-3 right-3 font-mono font-medium text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full transition-colors duration-300"
          style={{
            background: hovered ? "hsl(var(--leaf))" : "hsl(var(--carbon) / 0.8)",
            color: hovered ? "hsl(var(--carbon))" : "hsl(var(--bone))",
            backdropFilter: "blur(6px)",
          }}
        >
          {hovered ? "After ✓" : "Before"}
        </span>
      </div>
      <figcaption className="caption flex items-center justify-between mt-2.5">
        <span>{job.label}</span>
        <span className="hidden sm:block">Hover to reveal</span>
      </figcaption>
    </motion.figure>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">09</span>
              <span className="eyebrow eyebrow-dim">Recent Work</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              Real jobs, real{" "}
              <span className="accent-serif text-ember-gradient">results.</span>
            </h2>
            <p className="text-bone-dim mt-4 max-w-md text-sm leading-relaxed">
              Hover each photo to see the before → after transformation. Follow us
              on social for more.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone px-5 py-3 hover:border-ember/40 transition-colors duration-200"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-ember" />
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-bone px-5 py-3 hover:border-ember/40 transition-colors duration-200"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-ember" />
              TikTok
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-6">
          {jobs.map((job, i) => (
            <JobCard key={job.label} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
