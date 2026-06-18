import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Star, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

interface LocationPageProps {
  city: string;
  state: string;
  headline: string;
  subheadline: string;
  intro: string;
  services: string[];
  neighborhoods?: string[];
  metaTitle: string;
  metaDescription: string;
}

const trustItems = (city: string) => [
  "5.0 Google Rating",
  "Fully Insured",
  `Local to ${city}`,
  "Free Quotes",
];

const LocationPage = ({
  city,
  state,
  headline,
  subheadline,
  intro,
  services,
  neighborhoods = [],
}: LocationPageProps) => {
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2.5 w-fit mb-8">
              <MapPin className="w-3.5 h-3.5 text-ember" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
                {city}, {state}
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.0] tracking-[-0.04em] text-bone mb-6 max-w-4xl">
              {headline}{" "}
              <span className="accent-serif text-ember-gradient">{city}.</span>
            </h1>
            <p className="text-bone-dim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">{subheadline}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group btn-shine bg-ember text-carbon px-8 py-4 rounded-full font-display font-semibold text-base flex items-center gap-2.5 hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+12623517796"
                className="glass text-bone px-8 py-4 rounded-full font-display font-medium text-base flex items-center gap-2.5 hover:border-bone/25 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 text-ember" /> (262) 351-7796
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-carbon-2 border-y border-bone/10">
        <div className="container py-4 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {trustItems(city).map((t) => (
            <span key={t} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/70">
              <span className="text-ember" aria-hidden>✦</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* About + services */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="eyebrow block mb-5">
                Professional Exterior Cleaning in {city}
              </span>
              <p className="font-serif text-xl md:text-2xl text-bone/85 leading-relaxed mb-8">{intro}</p>
              {neighborhoods.length > 0 && (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-4">
                    Areas we serve in {city}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((n) => (
                      <span key={n} className="glass rounded-full px-3.5 py-1.5 font-mono text-[11px] text-bone/80">
                        {n}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              <span className="eyebrow block mb-5">Services Available in {city}</span>
              <ul className="border-t border-bone/10">
                {services.map((s, i) => (
                  <li key={s} className="flex items-center gap-4 py-3.5 border-b border-bone/10">
                    <span className="font-mono text-[10px] text-bone-dim tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-medium text-lg text-bone flex-1">{s}</span>
                    <Check className="w-4 h-4 text-leaf shrink-0" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-6" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-ember text-ember" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl text-bone/90 leading-relaxed mb-6">
              &ldquo;I highly recommend OJ Exterior Care. They did an extraordinary job
              on my back patio and my side walkway. These are hard working young men
              and they deliver a quality product at a reasonable price.&rdquo;
            </blockquote>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-dim">
              — Andrew Capobianco, {city}
            </p>
          </motion.div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default LocationPage;
