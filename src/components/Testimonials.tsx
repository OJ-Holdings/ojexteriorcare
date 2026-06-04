import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrew Capobianco",
    text: "I highly recommend OJ Exterior Care. They did an extraordinary job on my back patio and my side walkway. Both look cleaner and brighter than they ever have. These are hard working young men and they deliver a quality product at a reasonable price.",
    rating: 5,
    when: "1 week ago",
  },
  {
    name: "Katherine Smith",
    text: "Oscar and Jacob are organized, responsive and a pleasure to work with. They did an excellent job of cleaning all my windows and I would not hesitate to hire them again.",
    rating: 5,
    when: "3 days ago",
  },
  {
    name: "Chris Honey",
    text: "These guys did a spectacular job! My windows look great. I highly recommend them.",
    rating: 5,
    when: "Yesterday",
  },
  {
    name: "Troy Buck",
    text: "Did a great job, very professional, and would hire them again.",
    rating: 5,
    when: "1 week ago",
  },
  {
    name: "Kathy Jurgens",
    text: "Great experience and great results!",
    rating: 5,
    when: "1 week ago",
  },
  {
    name: "Dave",
    text: "Nice job. On time. Good communication.",
    rating: 5,
    when: "2 days ago",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Google Reviews</span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
            What Homeowners Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">5.0 average on Google</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="bg-gradient-card border border-border rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="font-heading font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.when}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
