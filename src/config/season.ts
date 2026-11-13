// Winter season: one source of truth.
// Every winter change on the site reads getSeasonPhase() (or useSeasonPhase()),
// so the whole thing turns itself off at 12:00 AM Mar 1, 2027, Central time.

export type SeasonPhase = "lastcall" | "winter" | "off";

export const SEASON_TIME_ZONE = "America/Chicago";

// Wall-clock boundaries in America/Chicago, "YYYY-MM-DDTHH:mm".
// Neither date falls near a DST switch (DST ends Nov 1, 2026 and starts Mar 14, 2027).
export const WINTER_STARTS = "2026-11-22T00:00"; // last call ends, winter begins
export const WINTER_ENDS = "2027-03-01T00:00"; // everything winter turns off

// Spring 2027 offer
export const SPRING_DISCOUNT_PCT = 10;
export const SPRING_BOOK_BY = "Feb 28";
export const VISIT_MINIMUM = "$150";

const PHASES: SeasonPhase[] = ["lastcall", "winter", "off"];

/** Current wall-clock time in America/Chicago as "YYYY-MM-DDTHH:mm" (sortable). */
export function chicagoNow(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SEASON_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  return `${get("year")}-${get("month")}-${get("day")}T${get("hour")}:${get("minute")}`;
}

/** ?season=lastcall|winter|off forces a phase for this page load only. Never persisted. */
function previewOverride(): SeasonPhase | null {
  if (typeof window === "undefined") return null;
  try {
    const value = new URLSearchParams(window.location.search).get("season");
    return PHASES.includes(value as SeasonPhase) ? (value as SeasonPhase) : null;
  } catch {
    return null;
  }
}

export function getSeasonPhase(date: Date = new Date()): SeasonPhase {
  const forced = previewOverride();
  if (forced) return forced;
  const now = chicagoNow(date);
  if (now < WINTER_STARTS) return "lastcall";
  if (now < WINTER_ENDS) return "winter";
  return "off";
}

export const isWinterPhase = (phase: SeasonPhase) => phase !== "off";

// ─── Banner ──────────────────────────────────────────────────────
type BannerCopy = {
  pill: string;
  /** 1024px and up */
  text: string;
  /** below 1024px. Off phase uses the same text at every width, as it does today. */
  textShort: string;
  cta: string;
  ctaShort: string;
  /** sessionStorage key, versioned by phase so a closed old banner doesn't hide a new one */
  dismissKey: string;
  icon: "snowflake" | null;
  tone: "ice" | "ember";
};

export const BANNER: Record<SeasonPhase, BannerCopy> = {
  lastcall: {
    pill: "Last call",
    text: "Pressure washing is done for 2026. Last call on window cleaning before Nov 22. Spring spots are 10% off.",
    textShort: "Windows before Nov 22. Spring 10% off.",
    cta: "Book now",
    ctaShort: "Book",
    dismissKey: "oj_banner_dismissed_lastcall26",
    icon: "snowflake",
    tone: "ice",
  },
  winter: {
    pill: "Off-season",
    text: "Lock in your spring 2027 spot by Feb 28 and get 10% off. No deposit.",
    textShort: "Spring 2027: 10% off, book by Feb 28.",
    cta: "Book now",
    ctaShort: "Book",
    dismissKey: "oj_banner_dismissed_winter26",
    icon: "snowflake",
    tone: "ice",
  },
  // Exactly what was live before the winter update (pill, text, ember color, dismiss key).
  off: {
    pill: "Booking",
    text: "Now booking spring 2027. Lock in your spot early.",
    textShort: "Now booking spring 2027. Lock in your spot early.",
    cta: "Book now",
    ctaShort: "Book now",
    dismissKey: "oj_promo_dismissed_spring27",
    icon: null,
    tone: "ember",
  },
};

// ─── Services list tags ──────────────────────────────────────────
export type ServiceKind = "washer" | "windows";

export function serviceTag(phase: SeasonPhase, kind: ServiceKind): string | null {
  if (phase === "off") return null;
  if (kind === "windows" && phase === "lastcall") return "Before Nov 22";
  return "Spring 2027";
}

// ─── Section numbering ───────────────────────────────────────────
// The spring section slots in as 05 after Rates (04), pushing later sections down one.
export function sectionNum(base: number, phase: SeasonPhase): string {
  const n = isWinterPhase(phase) && base >= 5 ? base + 1 : base;
  return String(n).padStart(2, "0");
}

// ─── Quote form ──────────────────────────────────────────────────
export type Timing = "" | "windows" | "spring";

export const LEAD_PREFIX: Record<Exclude<Timing, "">, string> = {
  spring: "[SPRING 2027 LOCK-IN, 10% OFF]",
  windows: "[WINDOWS BEFORE NOV 22]",
};

/** Services in the quote form that use the washer (everything but windows, gutters/roof, multiple). */
export const WASHER_SERVICES = [
  "House Washing",
  "Driveway Cleaning",
  "Patio Cleaning",
  "Sidewalk Cleaning",
  "Deck Cleaning",
  "Oil Stain Treatment",
  "Rust Stain Treatment",
  "Exterior Surface Washing",
];

/** Fired by the spring section's button so the quote form can pick the spring option. */
export const SPRING_LOCKIN_EVENT = "oj:spring-lockin";

// ─── FAQ (added to the top during lastcall and winter) ───────────
export function winterFaqs(phase: SeasonPhase): { q: string; a: string }[] {
  if (phase === "off") return [];
  return [
    {
      q: "Do you work in the winter?",
      a:
        phase === "lastcall"
          ? "Window cleaning runs until Nov 22. Pressure washing is done for 2026 and starts back up in spring. You can lock in your spring date now and get 10% off."
          : "We're in our off-season right now. Pressure washing and window cleaning start back up in spring 2027, and you can lock in your date now for 10% off.",
    },
    {
      q: "How does the spring discount work?",
      a: "Book your spring 2027 service by Feb 28 and you get 10% off your quote. No deposit, we just put you on the calendar with a real date. The $150 visit minimum still applies.",
    },
  ];
}
