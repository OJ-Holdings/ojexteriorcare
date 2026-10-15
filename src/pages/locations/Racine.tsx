import LocationPage from "@/components/LocationPage";

const services = [
  "House Washing",
  "Driveway Pressure Washing",
  "Patio & Deck Cleaning",
  "Sidewalk & Walkway Cleaning",
  "Window Cleaning",
  "Oil & Rust Stain Removal",
  "Exterior Surface Washing",
];

const neighborhoods = [
  "Downtown Racine", "North Racine", "Mount Pleasant", "Caledonia",
  "Sturtevant", "Union Grove", "Burlington",
];

const Racine = () => (
  <LocationPage
    city="Racine"
    state="WI"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care serves Racine and the surrounding area with professional exterior cleaning. Fast quotes, reliable scheduling, and results that speak for themselves."
    intro="From downtown Racine driveways to lakefront patios in Wind Point, we've seen what Wisconsin winters and summer storms do to exterior surfaces. Our team brings commercial-grade equipment and genuine attention to detail. You'll notice the difference before we even pack up."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="House Washing & Pressure Washing in Racine, WI | OJ Exterior Care"
    metaDescription="House washing, pressure washing and window cleaning in Racine, WI and across Racine County. Free quotes: (262) 515-3083."
  />
);

export default Racine;
