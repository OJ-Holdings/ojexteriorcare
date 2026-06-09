import LocationPage from "@/components/LocationPage";

const services = [
  "Driveway Pressure Washing",
  "Patio & Deck Cleaning",
  "Sidewalk & Walkway Cleaning",
  "Window Cleaning",
  "Gutter Cleaning",
  "Oil & Rust Stain Removal",
];

const neighborhoods = [
  "Winthrop Harbor", "Beach Park", "Wadsworth",
  "North Chicago", "Great Lakes",
];

const Zion = () => (
  <LocationPage
    city="Zion"
    state="IL"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care crosses the border to serve Zion, IL and surrounding communities. Same professional service, same free quotes, same results."
    intro="Just south of Kenosha, Zion and the surrounding north shore Illinois communities are a natural part of our service area. We make the drive so you get the same quality and reliability as our Wisconsin clients — no upcharge, no hassle. Tell us what needs cleaning and we'll get you a number, fast."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="Pressure Washing Zion, IL | OJ Exterior Care"
    metaDescription="Professional pressure washing in Zion, IL and north shore communities. Driveway, patio & window cleaning by OJ Exterior Care. Free quotes — (262) 351-7796."
  />
);

export default Zion;
