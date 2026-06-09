import { useState, useEffect } from "react";
import { X, Zap } from "lucide-react";

const BANNER_KEY = "oj_promo_dismissed_v1";

const PromoBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if not already dismissed this session
    const dismissed = sessionStorage.getItem(BANNER_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-orange text-primary-foreground">
      <div className="container flex items-center justify-center gap-3 py-2.5 text-center pr-10">
        <Zap className="w-4 h-4 shrink-0" />
        <p className="text-sm font-semibold">
          Summer Special — mention this offer when booking and get{" "}
          <span className="underline underline-offset-2">10% off your first service</span>.{" "}
          <a href="#contact" className="font-bold hover:opacity-80 transition-opacity">
            Book now →
          </a>
        </p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:opacity-70 transition-opacity"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PromoBanner;
