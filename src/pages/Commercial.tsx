import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, AppWindow, Droplets, Repeat, Quote, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommercialContactForm from "@/components/CommercialContactForm";

const services = [
  {
    icon: AppWindow,
    title: "Storefront Window Cleaning",
    description:
      "Interior and exterior glass, streak-free. Our flagship commercial service, available as a one-time clean or a recurring plan.",
    tag: "Recurring available",
  },
  {
    icon: Droplets,
    title: "Storefront & Entryway Washing",
    description:
      "Entryways, awnings, and small paved areas cleaned up front. Requires an accessible outdoor water spigot on site.",
    tag: "Water access required",
  },
  {
    icon: Repeat,
    title: "Sidewalk & Walkway Cleaning",
    description:
      "Keep the approach to your business looking maintained year-round, scheduled around your open hours.",
    tag: "One-time or recurring",
  },
];

const trust = [
  { icon: ShieldCheck, label: "Insured", detail: "$1M general liability. COI available on request." },
  { icon: Clock, label: "Flexible scheduling", detail: "Early morning, evening, or closed hours. Your call." },
  { icon: Repeat, label: "Recurring plans", detail: "Monthly or quarterly service, no long-term contract lock-in." },
];

const steps = [
  { t: "Quick call or site visit", d: "Tell us about the property so we can scope the job accurately." },
  { t: "Custom quote", d: "Priced on actual scope and access, not a generic rate card for commercial work." },
  { t: "Scheduled around you", d: "We work around your business hours so cleaning never disrupts customers." },
];

const Commercial = () => {
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
              <ShieldCheck className="w-3.5 h-3.5 text-ember" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
                Commercial &middot; Kenosha, WI
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.0] tracking-[-0.04em] text-bone mb-6 max-w-4xl">
              Storefronts that look{" "}
              <span className="accent-serif text-ember-gradient">as sharp</span> as your business.
            </h1>
            <p className="text-bone-dim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Recurring window cleaning and storefront exterior care for small businesses,
              retail, and offices, scheduled around your hours, never your customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#commercial-contact"
                className="group btn-shine bg-ember text-carbon px-8 py-4 rounded-full font-display font-semibold text-base flex items-center gap-2.5 hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
              >
                Request a Commercial Quote
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

      {/* Trust bar */}
      <section className="py-14 md:py-20 bg-carbon-2/50">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-6">
            {trust.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="surface rounded-2xl p-6 flex items-start gap-4"
              >
                <span className="w-10 h-10 rounded-full bg-ember/10 border border-ember/25 flex items-center justify-center shrink-0">
                  <t.icon className="w-4.5 h-4.5 text-ember" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-display font-semibold text-base text-bone mb-1">{t.label}</p>
                  <p className="text-sm text-bone-dim leading-relaxed">{t.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16 max-w-2xl"
          >
            <span className="eyebrow eyebrow-dim block mb-4">Commercial Services</span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone">
              Scoped to what we do{" "}
              <span className="accent-serif text-ember-gradient">best.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="surface rounded-2xl p-7 lift"
              >
                <span className="w-11 h-11 rounded-full bg-ember/10 border border-ember/25 flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-ember" strokeWidth={1.5} />
                </span>
                <h3 className="font-display font-semibold text-xl text-bone mb-2.5 tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-sm text-bone-dim leading-relaxed mb-4">{s.description}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                  {s.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface rounded-2xl max-w-3xl mx-auto p-10 md:p-14 text-center"
          >
            <Quote className="w-8 h-8 text-ember mx-auto mb-6" strokeWidth={1.5} />
            <p className="font-serif text-xl md:text-2xl text-bone/90 leading-relaxed mb-6">
              &ldquo;I haven&rsquo;t seen these windows this clean since I bought the place.&rdquo;
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim">
              Recurring Commercial Client &middot; Kenosha, WI
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <span className="eyebrow eyebrow-dim block mb-4">How It Works</span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone">
              No rate card.{" "}
              <span className="accent-serif text-ember-gradient">A real quote.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-8 max-w-4xl">
            {steps.map((s, i) => (
              <div key={s.t} className="flex gap-4">
                <span className="font-mono text-[11px] text-ember mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display font-semibold text-base text-bone mb-1.5">{s.t}</p>
                  <p className="text-sm text-bone-dim leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommercialContactForm />
      <Footer />
    </div>
  );
};

export default Commercial;
