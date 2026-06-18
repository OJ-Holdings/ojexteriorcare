import { motion } from "framer-motion";

// TODO: Replace CALENDLY_URL with your actual Calendly link.
// 1. Create a free account at https://calendly.com
// 2. Set up a "Free Quote Consultation" event (15–30 min)
// 3. Copy your event link and paste it below
const CALENDLY_URL = "https://calendly.com/ojexteriorcare/free-quote";

const BookingSection = () => {
  return (
    <section id="book" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 md:mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">05</span>
              <span className="eyebrow eyebrow-dim">Book Online</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.06] tracking-[-0.03em] text-bone mb-4">
              Schedule a{" "}
              <span className="accent-serif text-ember-gradient">consultation.</span>
            </h2>
            <p className="text-bone-dim max-w-xl mx-auto leading-relaxed">
              Pick a time that works for you and we&rsquo;ll call to confirm your free
              quote. No pressure, no commitment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="surface rounded-2xl overflow-hidden"
          >
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=121113&text_color=f2ede6&primary_color=ea6c1e`}
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a free quote consultation"
              className="block"
              loading="lazy"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center caption mt-6"
          >
            Prefer to call?{" "}
            <a href="tel:+12623517796" className="text-ember font-semibold hover:underline underline-offset-4">
              (262) 351-7796
            </a>{" "}
            or{" "}
            <a href="#contact" className="text-ember font-semibold hover:underline underline-offset-4">
              fill out the form below
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
