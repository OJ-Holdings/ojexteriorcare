import { AppWindow } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const WindowCleaning = () => (
  <ServicePage
    title="Window Cleaning"
    tagline="Crystal-clear windows, inside and out. Professional streak-free results that make every room feel brighter."
    description="Dirty windows are something you stop noticing until they're clean — then you can't believe you waited. We clean windows on homes of all sizes using professional squeegee technique and streak-free solutions, reaching upper floors safely and leaving no residue. Available for exterior-only or interior + exterior cleans."
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
      "More natural light — clean windows let in measurably more light, improving how every room feels.",
      "Better curb appeal — grimy windows are one of the most visible signs of deferred maintenance.",
      "Extends window life — mineral deposits and oxidation etch into glass over time; regular cleaning prevents permanent damage.",
      "Spot window damage early — we'll flag any cracked seals, broken frames, or failing weather stripping we notice.",
      "Safe access — we handle upper-floor windows safely so you don't have to.",
    ]}
    faqs={[
      {
        q: "Do you clean interior windows too?",
        a: "Yes — interior cleaning is available as an add-on. Just let us know when you request a quote.",
      },
      {
        q: "How often should I have my windows cleaned?",
        a: "Most homeowners do it once or twice a year. Spring and fall are popular — after pollen season and before winter.",
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
