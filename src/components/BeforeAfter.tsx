import { motion } from "framer-motion";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const images = [
  { src: beforeAfter1, label: "Driveway Transformation" },
  { src: beforeAfter2, label: "Patio Restoration" },
  { src: beforeAfter3, label: "Sidewalk & Oil Stain Removal" },
];

const BeforeAfter = () => {
  return (
    <section id="results" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Results</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            See the Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real transformations from real homes. Our professional cleaning delivers results you can see immediately.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border"
            >
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                width={1280}
                height={768}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary px-3 py-1 rounded-full">Before</span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent px-3 py-1 rounded-full">After</span>
                </div>
                <h3 className="font-heading font-bold text-lg">{img.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
