const items = [
  "5.0 Google Rating",
  "Fully Insured",
  "Same-Day Quotes",
  "Local & Accountable",
  "Driveways",
  "Patios",
  "Windows",
  "Decks",
  "Gutters",
  "Free Quotes",
];

const TrustBar = () => {
  const row = [...items, ...items];

  return (
    <div className="bg-carbon-2 border-y border-bone/10 overflow-hidden select-none" aria-label="Highlights">
      <div className="flex animate-marquee-slow hover:[animation-play-state:paused] whitespace-nowrap py-4">
        {row.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/70 px-7">
              {item}
            </span>
            <span className="text-ember text-[10px]" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
