import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone } from "lucide-react";

// TODO: Replace CALENDLY_URL with your actual Calendly link.
// 1. Create a free account at https://calendly.com
// 2. Set up a "Free Quote Consultation" event (15–30 min)
// 3. Copy your event link and paste it below
const CALENDLY_URL = "https://calendly.com/ojexteriorcare/free-quote";

const BookingSection = () => {
  return (
    <section id="book" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Book Online</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Pick a time that works for you and we'll call to confirm your free quote. No pressure, no commitment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border overflow-hidden bg-gradient-card shadow-card"
          >
            {/* Calendly embed */}
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=111111&text_color=fafafa&primary_color=f07f28`}
              width="100%"
              height="650"
              frameBorder="0"
              title="Schedule a free quote consultation"
              className="block"
              loading="lazy"
            />
          </motion.div>

          {/* Fallback for users who prefer phone */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-sm text-muted-foreground mt-6"
          >
            Prefer to call?{" "}
            <a href="tel:+12623517796" className="text-primary font-semibold hover:underline">
              (262) 351-7796
            </a>{" "}
            — or{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              fill out the form below
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
