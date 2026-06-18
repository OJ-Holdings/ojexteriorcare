import { AppWindow } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const WindowCleaning = () => (
  <ServicePage
    title="Window Cleaning"
    tagline="Clean windows, inside and out. Streak-free results that make every room feel brighter."
    description="Dirty windows are something you stop noticing until they're clean. Then you can't believe you waited. We clean windows on homes of all sizes using a squeegee and cleaning solution, reaching upper floors safely and leaving no residue. Available for exterior-only or interior and exterior cleans."
    priceRange="$75"
    icon={AppWindow}
    includes={[
      "Exterior window cleaning on all accessible panes",
      "Streak-free squeegee finish",
      "Sill and frame wipe-down",
      "Screen cleaning available on request",
      "Interior cleaning available as add-on",
    ]}
    benefits={[
      "More natural light. Clean windows let in noticeably more light and make rooms feel bigger.",
      "Better curb appeal. Grimy windows are one of the first things people notice.",
      "Extends window life. Mineral deposits etch into glass over time. Regular cleaning prevents permanent damage.",
      "Spot window damage early. We'll flag any cracked seals, broken frames, or failing weather stripping we notice.",
      "Safe access. We handle upper-floor windows so you don't have to.",
    ]}
    faqs={[
      {
        q: "Do you clean interior windows too?",
        a: "Yes, interior cleaning is available as an add-on. Just let us know when you request a quote.",
      },
      {
        q: "How often should I have my windows cleaned?",
        a: "Most homeowners do it once or twice a year. Spring and fall are popular, after pollen season and before winter.",
      },
      {
        q: "What about hard water stains?",
        a: "We can treat most hard water mineral deposits. Severe buildup may require a specialty treatment at an additional cost.",
      },
      {
        q: "Do you clean screens?",
        a: "Yes, screen cleaning is available. Just mention it when booking.",
      },
    ]}
  />
);

export default WindowCleaning;
