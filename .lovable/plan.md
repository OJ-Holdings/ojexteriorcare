# Add "Our Work" Gallery Page

## Summary
New `/our-work` route with a rich before/after gallery. Each card splits before (left) and after (right) with a center divider, labeled by service type.

## Changes

### 1. New page — `src/pages/OurWork.tsx`
- Reuses existing `Header` and `Footer` for consistent navigation
- Hero band: "Our Work" title + short intro sentence
- Gallery grid (2 columns desktop, 1 column mobile) of before/after cards
- Each card:
  - Two images side-by-side (before | after) with a vertical orange divider line
  - Small "BEFORE" / "AFTER" badges in the corners
  - Service-type label below (e.g. "Driveway Cleaning", "Patio Restoration")
  - Hover zoom + subtle orange glow on hover
- Bottom CTA section reusing the same quote/call/text button pattern, linking to `/#contact`
- 6 placeholder cards covering: Driveway Cleaning, Patio Restoration, Oil Stain Removal, Sidewalk Cleaning, Gutter Cleaning, Deck Cleaning
- Placeholder images generated as labeled JPGs in `src/assets/work/` so they're easy to swap by overwriting

### 2. Placeholder images — `src/assets/work/`
- Generate 12 placeholder images (6 before, 6 after), each clearly labeled with the service + "BEFORE" or "AFTER" so it's obvious what to replace
- File naming: `driveway-before.jpg`, `driveway-after.jpg`, `patio-before.jpg`, `patio-after.jpg`, `oil-before.jpg`, `oil-after.jpg`, `sidewalk-before.jpg`, `sidewalk-after.jpg`, `gutter-before.jpg`, `gutter-after.jpg`, `deck-before.jpg`, `deck-after.jpg`

### 3. Navigation — `src/components/Header.tsx`
- Update `navLinks` to include `{ label: "Our Work", href: "/our-work" }`
- Logo and home anchor links (`#services`, `#contact`, etc.) need to work from any page — prefix in-page anchors with `/` so they resolve to home from `/our-work` (e.g. `/#services`)
- Logo `<a href="#">` becomes `<a href="/">`

### 4. Routing — `src/App.tsx`
- Add `<Route path="/our-work" element={<OurWork />} />` above the catch-all

## Design notes
- Dark theme, orange accent
- Cards: rounded-xl, border, `bg-gradient-card`, hover lifts shadow + `shadow-glow`
- Vertical divider between before/after: 2px wide, `bg-gradient-orange`, full-height
- BEFORE badge: muted/dark; AFTER badge: gradient-orange
- Section background: subtle `bg-secondary/30` band behind the grid
- Motion: stagger fade-in on cards

## Result
A dedicated portfolio page the user can keep adding to. Swap placeholder JPGs in `src/assets/work/` to replace any image without touching code.