import { motion } from "framer-motion";
import { ArrowRight, Phone, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { LucideIcon } from "lucide-react";

interface ServicePageProps {
  title: string;
  tagline: string;
  description: string;
  priceRange: string;
  icon: LucideIcon;
  benefits: string[];
  includes: string[];
  faqs: { q: string; a: string }[];
}

const ServicePage = ({
  title,
  tagline,
  description,
  priceRange,
  icon: Icon,
  benefits,
  includes,
  faqs,
}: ServicePageProps) => {
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
              <Icon className="w-3.5 h-3.5 text-ember" strokeWidth={1.5} />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
                Service &middot; Kenosha, WI
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.0] tracking-[-0.04em] text-bone mb-6 max-w-4xl">
              {title}
              <span className="accent-serif text-ember-gradient">.</span>
            </h1>
            <p className="text-bone-dim text-lg md:text-xl max-w-2xl mb-5 leading-relaxed">{tagline}</p>
            <p className="font-mono text-sm text-ember font-semibold mb-10">
              Starting from {priceRange}
            </p>
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

      {/* Description + includes */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="eyebrow block mb-5">About This Service</span>
              <p className="font-serif text-xl md:text-2xl text-bone/85 leading-relaxed">{description}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              <span className="eyebrow block mb-5">What&rsquo;s Included</span>
              <ul className="border-t border-bone/10">
                {includes.map((item, i) => (
                  <li key={item} className="flex items-center gap-4 py-3.5 border-b border-bone/10">
                    <span className="font-mono text-[10px] text-bone-dim tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-bone leading-relaxed flex-1">{item}</span>
                    <Check className="w-4 h-4 text-leaf shrink-0" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow eyebrow-dim block mb-4">Why It&rsquo;s Worth It</span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone">
              The case for{" "}
              <span className="accent-serif text-ember-gradient">doing it right.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="surface rounded-2xl p-6 lift"
              >
                <span className="font-mono text-[10px] text-ember block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-bone/85 leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-24 bg-carbon-2/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <span className="eyebrow eyebrow-dim block mb-4">Common Questions</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-[-0.03em] text-bone mb-10">
                Asked &amp;{" "}
                <span className="accent-serif text-ember-gradient">answered.</span>
              </h2>
              <div className="border-t border-bone/10">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className="py-6 border-b border-bone/10">
                    <h4 className="flex items-baseline gap-5 font-display font-medium text-lg md:text-xl tracking-[-0.01em] text-bone mb-2.5">
                      <span className="font-mono text-[10px] text-bone-dim tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </h4>
                    <p className="text-bone-dim text-sm leading-relaxed pl-[3.1rem]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
