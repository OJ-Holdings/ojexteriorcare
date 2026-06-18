import { useState, useEffect } from "react";
import { X } from "lucide-react";

const BANNER_KEY = "oj_promo_dismissed_v1";

const PromoBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(BANNER_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-ember text-carbon">
      <div className="container flex items-center justify-center gap-3 py-2 text-center pr-10">
        <span className="hidden sm:inline font-mono font-semibold text-[10px] uppercase tracking-[0.2em] border border-carbon/30 rounded-full px-2.5 py-0.5">
          Offer
        </span>
        <p className="font-mono font-medium text-[11px] sm:text-xs uppercase tracking-[0.1em]">
          Summer special: 10% off your first service.{" "}
          <a href="#contact" className="font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
            Book now →
          </a>
        </p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:opacity-70 transition-opacity"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default PromoBanner;
