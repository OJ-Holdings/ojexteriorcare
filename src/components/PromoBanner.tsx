import { useState, useEffect } from "react";
import { X } from "lucide-react";

// The fall promo runs through Oct 31, 2026 (visitor's local time), then the banner
// switches to spring booking. Each message has its own dismiss key.
const PROMO_ENDS = new Date(2026, 10, 1); // Nov 1, 2026, 00:00 local

const PromoBanner = () => {
  const [visible, setVisible] = useState(false);
  const promoActive = new Date() < PROMO_ENDS;
  const bannerKey = promoActive ? "oj_promo_dismissed_fall26" : "oj_promo_dismissed_spring27";

  useEffect(() => {
    const dismissed = sessionStorage.getItem(bannerKey);
    if (!dismissed) setVisible(true);
  }, [bannerKey]);

  const dismiss = () => {
    sessionStorage.setItem(bannerKey, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-ember text-carbon">
      <div className="container flex items-center justify-center gap-3 py-2 text-center pr-10">
        <span className="hidden sm:inline font-mono font-semibold text-[10px] uppercase tracking-[0.2em] border border-carbon/30 rounded-full px-2.5 py-0.5">
          {promoActive ? "Offer" : "Booking"}
        </span>
        <p className="font-mono font-medium text-[11px] sm:text-xs uppercase tracking-[0.1em]">
          {promoActive
            ? "Last chance this season: 10% off any job booked by Oct 31, including spring 2027 dates."
            : "Now booking spring 2027. Lock in your spot early."}{" "}
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
