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
  "Southport", "Uptown", "Lincoln Park", "Allendale",
  "Pleasant Prairie", "Somers", "Bristol", "Paddock Lake", "Salem Lakes", "Twin Lakes",
];

const Kenosha = () => (
  <LocationPage
    city="Kenosha"
    state="WI"
    headline="Pressure Washing &amp; Exterior Cleaning in"
    subheadline="OJ Exterior Care is based right here in Kenosha. We clean driveways, patios, sidewalks, windows, and more, with professional-grade equipment and a local crew you can trust."
    intro="As a Kenosha-based business, we know this city and the homeowners in it. We've cleaned driveways across Southport, patios in Allendale, and homes all over the north side. Whether you need a seasonal refresh or a deep clean before you list your home, we'll give you a free quote and get the job done right."
    services={services}
    neighborhoods={neighborhoods}
    metaTitle="House Washing & Pressure Washing in Kenosha, WI | OJ Exterior Care"
    metaDescription="House washing, pressure washing and window cleaning in Kenosha, WI. Driveways, patios, sidewalks and more. Free quotes: (262) 515-3083."
  />
);

export default Kenosha;
