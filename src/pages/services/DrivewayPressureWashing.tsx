import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const DrivewayPressureWashing = () => (
  <ServicePage
    title="Driveway Pressure Washing"
    tagline="Remove years of dirt, oil, tire marks, and discoloration from your driveway in a single visit."
    description="Your driveway is one of the first things people see when they pull up to your home. Over time it collects grime, oil drips, algae, and weather staining that makes even a well-kept property look rough. Our pressure washers cut through buildup that a garden hose never could, restoring the color and texture of concrete, asphalt, or paver surfaces in a few hours."
    priceRange="$149"
    icon={Car}
    includes={[
      "Pre-treatment of heavy staining or oil spots",
      "Full surface pressure wash with commercial equipment",
      "Edge and crack detail cleaning",
      "Rinse and final inspection",
      "Oil stain treatment available as add-on ($50–$100)",
    ]}
    benefits={[
      "Instantly improves curb appeal. It's the single fastest way to make your home look better from the street.",
      "Prevents surface damage. Dirt and algae trapped in concrete speeds up cracking over time.",
      "Safer to walk on. Algae and mold make surfaces slippery, especially when wet.",
      "Protects your home's value. A clean driveway is one of the easiest wins for your property.",
      "Fast turnaround. Most driveways are done in under 2 hours.",
      "Easier to maintain. One clean a year keeps buildup from turning into a bigger job.",
    ]}
    faqs={[
      {
        q: "How much does driveway cleaning cost?",
        a: "Single-car driveways start at $149. Two-car driveways typically run $200–$300. Larger or heavily stained driveways may be higher. Every quote is free.",
      },
      {
        q: "Can you remove oil stains?",
        a: "Yes, we offer oil stain treatment as part of the job or as a standalone service. Most stains lift significantly; severe or very old stains may need a second pass.",
      },
      {
        q: "How long does it take?",
        a: "Most residential driveways take 1–2 hours. Larger driveways or those with heavy staining can take 2–3 hours.",
      },
      {
        q: "Do I need to do anything before you arrive?",
        a: "Just move vehicles out of the driveway and make sure we have access to an outdoor water spigot. That's it.",
      },
    ]}
  />
);

export default DrivewayPressureWashing;
