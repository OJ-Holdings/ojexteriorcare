import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Rates", href: "/#pricing" },
  { label: "Our Work", href: "/our-work" },
  { label: "Commercial", href: "/commercial" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-carbon/85 backdrop-blur-xl border-b border-bone/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[76px]">
        <a href="/" className="flex items-center gap-3 select-none" aria-label="OJ Exterior Care home">
          <img src={logo} alt="OJ Exterior Care logo" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display font-semibold text-[15px] tracking-tight text-bone">
              OJ Exterior Care
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-bone-dim mt-1">
              Kenosha · Est. 2025
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone-dim hover:text-bone transition-colors duration-200 link-grow pb-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+12623517796"
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone hover:text-ember transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-ember" />
            (262) 351-7796
          </a>
          <a
            href="/#contact"
            className="group btn-shine bg-ember text-carbon px-5 py-3 rounded-full font-display font-semibold text-sm flex items-center gap-1.5 hover:bg-ember-bright transition-colors duration-200 glow-ember-sm"
          >
            Free Quote
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-bone p-2.5 -mr-2.5"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden bg-carbon/95 backdrop-blur-xl border-b border-bone/10 overflow-hidden"
          >
            <div className="container py-5 flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between py-3.5 border-b border-bone/10 group"
                >
                  <span className="font-display font-medium text-xl text-bone group-hover:text-ember transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-[10px] text-bone-dim">0{i + 1}</span>
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-ember text-carbon px-5 py-4 rounded-full font-display font-semibold text-sm text-center mt-5"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
