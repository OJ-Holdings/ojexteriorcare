import LocationPage from "@/components/LocationPage";

const services = [
  "Driveway Pressure Washing",
  "Patio & Deck Cleaning",
  "Sidewalk & Walkway Cleaning",
  "Window Cleaning",
  "Gutter Cleaning",
  "Oil & Rust Stain Removal",
  "Exterior Surface Washing",
];

const neighborhoods = [
  "Downtown Racine", "Mount Pleasant", "Caledonia",
  "Sturtevant", "Wind Point", "North Racine",
];

const Racine = () => (
  <LocationPage
    city="Racine"
    state="WI"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care serves Racine and the surrounding area with professional exterior cleaning. Fast quotes, reliable scheduling, and results that speak for themselves."
    intro="From downtown Racine driveways to lakefront patios in Wind Point, we've seen what Wisconsin winters and summer storms do to exterior surfaces. Our team brings commercial-grade equipment and genuine attention to detail — you'll notice the difference before we even pack up."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="Pressure Washing Racine, WI | OJ Exterior Care"
    metaDescription="Professional pressure washing in Racine, WI. Driveway, patio, window, and gutter cleaning by OJ Exterior Care. Free quotes — call (262) 351-7796."
  />
);

export default Racine;
