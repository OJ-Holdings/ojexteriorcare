import { useState } from "react";
import { Snowflake, X } from "lucide-react";
import { BANNER } from "@/config/season";
import { useSeasonPhase } from "@/hooks/use-season-phase";

// Copy, colors, and dismiss keys all come from src/config/season.ts.
// The close button keeps its 26px look; an invisible ::before widens its tap area to 44x44.
// The banner sits at the top of the screen, so the extra height goes mostly below the button.
// The dismissed flag is read synchronously on first render so the banner
// never pops in after paint and pushes the header down.
const readDismissed = (key: string) => {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
};

const PromoBanner = () => {
  const phase = useSeasonPhase();
  const copy = BANNER[phase];
  const [visible, setVisible] = useState(() => !readDismissed(copy.dismissKey));

  const dismiss = () => {
    try {
      sessionStorage.setItem(copy.dismissKey, "1");
    } catch {
      /* storage blocked: still close for this view */
    }
    setVisible(false);
  };

  if (!visible) return null;

  // Off phase: the exact banner that was live before the winter update.
  if (copy.tone === "ember") {
    return (
      <div className="relative z-[60] bg-ember text-carbon">
        <div className="container flex items-center justify-center gap-3 py-2 text-center pr-10">
          <span className="hidden sm:inline font-mono font-semibold text-[10px] uppercase tracking-[0.2em] border border-carbon/30 rounded-full px-2.5 py-0.5">
            {copy.pill}
          </span>
          <p className="font-mono font-medium text-[11px] sm:text-xs uppercase tracking-[0.1em]">
            {copy.text}{" "}
            <a href="#contact" className="font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
              {copy.cta} →
            </a>
          </p>
        </div>
        <button
          onClick={dismiss}
          aria-label="Dismiss banner"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:opacity-70 transition-opacity before:absolute before:-top-[9px] before:-bottom-[15.5px] before:-left-[6px] before:-right-3 before:content-['']"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  // Winter phases: same layout, ice background, dark text, one line at every width.
  return (
    <div className="relative z-[60] bg-ice text-carbon">
      <div className="container flex items-center justify-center gap-1.5 sm:gap-3 py-2 text-center pr-10">
        <Snowflake aria-hidden className="sm:hidden w-3 h-3 shrink-0" strokeWidth={2.25} />
        <span className="hidden sm:inline-flex items-center gap-1.5 shrink-0 font-mono font-semibold text-[10px] uppercase tracking-[0.2em] border border-carbon/30 rounded-full px-2.5 py-0.5">
          <Snowflake aria-hidden className="w-3 h-3" strokeWidth={2.25} />
          {copy.pill}
        </span>
        <p className="min-w-0 whitespace-nowrap max-[359px]:whitespace-normal font-mono font-medium text-[10px] sm:text-[11px] xl:text-xs uppercase tracking-[0.02em] sm:tracking-[0.1em] lg:tracking-[0.05em] xl:tracking-[0.1em]">
          <span className="lg:hidden">{copy.textShort}</span>
          <span className="hidden lg:inline">{copy.text}</span>{" "}
          <a href="#contact" className="font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity">
            <span className="lg:hidden">{copy.ctaShort}</span>
            <span className="hidden lg:inline">{copy.cta}</span> →
          </a>
        </p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:opacity-70 transition-opacity before:absolute before:-top-[9px] before:-bottom-[15.5px] before:-left-[6px] before:-right-3 before:content-['']"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default PromoBanner;
