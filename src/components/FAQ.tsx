import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does driveway cleaning cost?",
    a: "Driveway cleaning is $50 per car width, with a $150 minimum per visit. Final price can change based on size, condition, and access. Contact us for a free, exact quote.",
  },
  {
    q: "Can you remove oil stains?",
    a: "Yes. We can remove most oil stains from concrete and asphalt surfaces.",
  },
  {
    q: "Can you remove rust stains?",
    a: "Absolutely. Rust stain removal is one of our specialty services. We use targeted treatments designed specifically for rust on concrete, pavers, and stone.",
  },
  {
    q: "Do I need to provide water?",
    a: "We typically use your outdoor water spigot. If access is limited, we can discuss alternatives during the quoting process.",
  },
  {
    q: "How long does a typical job take?",
    a: "Most residential jobs are completed in 2-4 hours depending on size and scope. Larger or more detailed projects may take longer. We'll provide a time estimate with your quote.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes - every quote is 100% free with no obligation. Just fill out our contact form, call, or text us and we'll get back to you, usually within the hour.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">07</span>
              <span className="eyebrow eyebrow-dim">FAQ</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.06] tracking-[-0.03em] text-bone mb-5">
              Asked &amp;{" "}
              <span className="accent-serif text-ember-gradient">answered.</span>
            </h2>
            <p className="text-bone-dim text-sm leading-relaxed max-w-xs">
              Something we didn&rsquo;t cover?{" "}
              <a href="sms:+12625153083" className="text-ember font-medium hover:underline underline-offset-4">
                Text us
              </a>{" "}
              and we&rsquo;ll answer, usually within the hour.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-8"
          >
            <Accordion type="single" collapsible className="border-t border-bone/10">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-bone/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 gap-6 group">
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[10px] text-bone-dim tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display font-medium text-lg md:text-xl tracking-[-0.01em] text-bone group-hover:text-ember transition-colors duration-200">
                        {faq.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-bone-dim text-[15px] leading-relaxed pb-7 pl-[3.1rem] max-w-2xl">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
