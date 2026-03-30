import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
            <MapPin className="w-7 h-7 text-primary" />
          </div>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Area</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Proudly Serving Local Homeowners
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            OJ Exterior Care is proud to serve homeowners in our local community and surrounding neighborhoods.
            We're expanding our reach — contact us to see if we cover your area.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Your City", "Nearby Town", "Local County", "Surrounding Areas"].map((area) => (
              <span
                key={area}
                className="px-5 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceArea;
