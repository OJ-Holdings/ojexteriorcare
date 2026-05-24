# Remove Packages Section, Replace with "How We Price"

## Summary
Remove the fixed pricing cards and replace with an educational section explaining custom, free quotes based on actual surface size and condition.

## Changes

### 1. Navigation — `src/components/Header.tsx`
- Remove `{ label: "Packages", href: "#packages" }` from `navLinks` array

### 2. New Section — `src/components/HowWePrice.tsx` (new file)
- Replace `Packages.tsx` entirely
- Section ID: `how-we-price`
- Content:
  - Headline: "How We Price"
  - Subhead: "Every home is different — so every quote is custom"
  - Explain that pricing is based on actual surface size, stain severity, and scope of work
  - Emphasize: free, no-obligation quotes
  - Include CTA buttons pointing to `#contact` ("Get a Free Quote", "Call Now", "Text Us")
  - Style matches existing site design (dark theme, orange accent, motion animations)

### 3. Page Assembly — `src/pages/Index.tsx`
- Replace `import Packages from "@/components/Packages"` with `import HowWePrice from "@/components/HowWePrice"`
- Replace `<Packages />` with `<HowWePrice />`

### 4. Cleanup
- Delete or leave `src/components/Packages.tsx` (will be unused)

## Result
No more fixed $149/$249/$399 cards. Visitors learn that quotes are free and custom, driving them to the contact form instead of self-selecting a tier.