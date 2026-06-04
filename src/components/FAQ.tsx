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
    a: "Pricing depends on the size and condition of your driveway. Our Basic Refresh starts at $149. Contact us for a free, personalized quote.",
  },
  {
    q: "Can you remove oil stains?",
    a: "Yes! We specialize in oil stain treatment. Our professional-grade solutions and techniques can remove most oil stains from concrete and asphalt surfaces.",
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
    a: "Yes - every quote is 100% free with no obligation. Just fill out our contact form, call, or text us and we'll get back to you quickly.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-5 bg-gradient-card data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-sm hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
