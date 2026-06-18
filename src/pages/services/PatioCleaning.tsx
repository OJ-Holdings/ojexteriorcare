import { Umbrella } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const PatioCleaning = () => (
  <ServicePage
    title="Patio Cleaning"
    tagline="Bring your patio back to life. Remove algae, discoloration, and years of buildup from concrete, pavers, or stone."
    description="Patios take a beating. Wet leaves, algae, bird droppings, food stains, and Wisconsin winters all leave their mark. A good clean doesn't just make it look better, it removes the algae and mold that makes surfaces slippery and eats away at grout and sealant over time. We adjust pressure for your specific surface so you get clean results without damage."
    priceRange="$99"
    icon={Umbrella}
    includes={[
      "Pre-inspection to identify surface type and condition",
      "Full surface pressure wash calibrated to your patio material",
      "Algae and mold treatment where needed",
      "Edge and border detail cleaning",
      "Rinse and walkthrough",
    ]}
    benefits={[
      "Safer to walk on. Algae and mildew make surfaces slippery, especially when wet.",
      "Extends paver and concrete life. Organic buildup breaks down grout and sealant if left unchecked.",
      "Instantly usable. A clean patio is one you actually want to spend time on.",
      "Better for entertaining. Guests notice a clean outdoor space.",
      "Protects your investment. Patios and hardscaping are expensive to replace. Maintenance is a fraction of the cost.",
    ]}
    faqs={[
      {
        q: "Is pressure washing safe for pavers?",
        a: "Yes, when done correctly. We adjust pressure based on your surface type. Pavers and natural stone get lower pressure than poured concrete.",
      },
      {
        q: "Can you remove black algae spots?",
        a: "Most algae and mold responds well to our treatment. Black algae that has deeply penetrated porous stone may require multiple treatments.",
      },
      {
        q: "Should I seal my patio after cleaning?",
        a: "Sealing is a great follow-up to a deep clean and we recommend it, though it's not something we currently offer. A freshly cleaned surface is the right time to apply sealer.",
      },
    ]}
  />
);

export default PatioCleaning;
