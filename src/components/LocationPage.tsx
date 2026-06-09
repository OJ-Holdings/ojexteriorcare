import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, MapPin, Star, CheckCircle2 } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {city}, {state}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-5 leading-tight">
              {headline}{" "}
              <span className="text-gradient-orange">{city}</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-orange text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+12623517796"
                className="border border-border bg-secondary text-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <Phone className="w-5 h-5" /> (262) 351-7796
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="border-y border-border bg-secondary/40">
        <div className="container py-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {["5.0 Google Rating", "Fully Insured", "Local to " + city, "Free Quotes"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About + services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-5">
                Professional Exterior Cleaning in {city}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{intro}</p>
              {neighborhoods.length > 0 && (
                <>
                  <p className="text-sm font-semibold mb-3 text-foreground">Areas we serve in {city}:</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((n) => (
                      <span key={n} className="px-3 py-1 rounded-full border border-border bg-secondary text-xs text-muted-foreground">
                        {n}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold font-heading mb-5">Services Available in {city}</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 p-3 rounded-xl border border-border bg-gradient-card">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "I highly recommend OJ Exterior Care. They did an extraordinary job on my back patio and my side walkway. These are hard working young men and they deliver a quality product at a reasonable price."
            </blockquote>
            <p className="text-sm font-semibold">— Andrew Capobianco, {city}</p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default LocationPage;
