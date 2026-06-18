import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-carbon/90 backdrop-blur-xl border-t border-bone/10 px-4 py-3 flex gap-3 items-center">
            <a
              href="#contact"
              className="flex-1 bg-ember text-carbon py-4 rounded-full font-display font-semibold text-sm flex items-center justify-center gap-2 glow-ember-sm"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+12623517796"
              className="w-[52px] h-[52px] shrink-0 glass rounded-full flex items-center justify-center"
              aria-label="Call OJ Exterior Care"
            >
              <Phone className="w-5 h-5 text-ember" />
            </a>
          </div>
          <div className="bg-carbon/90" style={{ height: "env(safe-area-inset-bottom)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
