import LocationPage from "@/components/LocationPage";

const services = [
  "House Washing",
  "Driveway Pressure Washing",
  "Patio & Deck Cleaning",
  "Sidewalk & Walkway Cleaning",
  "Window Cleaning",
  "Oil & Rust Stain Removal",
];

const neighborhoods = [
  "Winthrop Harbor", "Waukegan", "Gurnee", "Antioch", "Libertyville",
  "Lake Forest", "Lake Bluff", "Highland Park", "Glencoe",
];

const Zion = () => (
  <LocationPage
    city="Zion"
    state="IL"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care crosses the border to serve Zion, IL and surrounding communities. Same professional service, same free quotes, same results."
    intro="Just south of Kenosha, Zion and the surrounding north shore Illinois communities are a natural part of our service area. We make the drive so you get the same quality and reliability as our Wisconsin clients, no upcharge, no hassle. Tell us what needs cleaning and we'll get you a number, fast."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="House Washing & Pressure Washing in Zion, IL | OJ Exterior Care"
    metaDescription="House washing, pressure washing and window cleaning in Zion, IL and across Lake County. Free quotes: (262) 515-3083."
  />
);

export default Zion;
