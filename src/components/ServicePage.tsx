import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, Star } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-5 leading-tight">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-4 leading-relaxed">
              {tagline}
            </p>
            <p className="text-primary font-bold text-lg mb-10">Starting from {priceRange}</p>
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

      {/* Description + benefits */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-5">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold font-heading mb-5">What's Included</h3>
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-secondary/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold font-heading">Why It's Worth It</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-gradient-card border border-border rounded-xl p-5 flex items-start gap-3"
              >
                <Star className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-center">Common Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-border rounded-xl p-5 bg-gradient-card">
                    <h4 className="font-heading font-bold mb-2">{faq.q}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
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
