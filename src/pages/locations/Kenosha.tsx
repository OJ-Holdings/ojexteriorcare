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
  "Southport", "Uptown", "Lincoln Park", "Allendale",
  "Pleasant Prairie", "Somers", "Bristol", "Silver Lake",
];

const Kenosha = () => (
  <LocationPage
    city="Kenosha"
    state="WI"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care is based right here in Kenosha. We clean driveways, patios, sidewalks, windows, and more, with professional-grade equipment and a local crew you can trust."
    intro="As a Kenosha-based business, we know this city and the homeowners in it. We've cleaned driveways across Southport, patios in Allendale, and gutters all over the north side. Whether you need a seasonal refresh or a deep clean before you list your home, we'll give you a free quote and get the job done right."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="Pressure Washing Kenosha, WI | OJ Exterior Care"
    metaDescription="Professional pressure washing in Kenosha, WI. Driveway, patio, sidewalk, window, and gutter cleaning. Free quotes, call (262) 351-7796."
  />
);

export default Kenosha;
