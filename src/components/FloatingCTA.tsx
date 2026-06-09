import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80% of the viewport height (past the hero)
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
          <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3 items-center shadow-[0_-8px_32px_hsl(0_0%_0%/0.4)]">
            <a
              href="#contact"
              className="flex-1 bg-gradient-orange text-primary-foreground py-3.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-glow"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+12623517796"
              className="w-14 h-14 shrink-0 border border-border bg-secondary rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Call OJ Exterior Care"
            >
              <Phone className="w-5 h-5 text-foreground" />
            </a>
          </div>
          {/* Safe area spacer for iOS home indicator */}
          <div className="bg-background/95 h-safe-bottom" style={{ height: "env(safe-area-inset-bottom)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
