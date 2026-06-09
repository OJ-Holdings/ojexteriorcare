import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const DrivewayPressureWashing = () => (
  <ServicePage
    title="Driveway Pressure Washing"
    tagline="Remove years of dirt, oil, tire marks, and discoloration from your driveway in a single visit."
    description="Your driveway is one of the first things people see when they pull up to your home. Over time it collects grime, oil drips, algae, and weather staining that makes even a well-maintained property look neglected. Our commercial-grade pressure washers cut through buildup that a garden hose never could — restoring the original color and texture of concrete, asphalt, or paver surfaces in hours."
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
      "Instantly improves curb appeal — the single fastest way to make your home look better from the street.",
      "Prevents surface damage — dirt and algae trapped in concrete accelerates cracking and deterioration.",
      "Safer surfaces — algae and mold buildup creates slippery spots on your driveway and approach.",
      "Protects property value — clean exteriors directly impact perceived home value.",
      "Fast results — most driveways are done in under 2 hours with no disruption to your day.",
      "Seasonal maintenance — one clean per year keeps buildup from becoming a restoration project.",
    ]}
    faqs={[
      {
        q: "How much does driveway cleaning cost?",
        a: "Single-car driveways start at $149. Two-car driveways typically run $200–$300. Larger or heavily stained driveways may be higher. Every quote is free.",
      },
      {
        q: "Can you remove oil stains?",
        a: "Yes — we offer oil stain treatment as part of the job or as a standalone service. Most stains lift significantly; severe or very old stains may require a second treatment.",
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
