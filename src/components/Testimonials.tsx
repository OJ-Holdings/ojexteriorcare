import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amy Adamson",
    text: "OJ Exterior Care is recommended 100%! We had the exterior windows of our home washed, as well as the siding on our addition. The staff was completely professional and did amazing work! What more can you ask? :)",
    rating: 5,
    when: "July 2026",
  },
  {
    name: "Richard Green",
    text: "These two gentlemen were professional from the start. Not pushy like some of the other people coming to our door. Explained what they saw as the problem, and what they could do to fix it. They gave me a fair price, and I scheduled for them to come the next morning. They texted us before arriving, and when they arrived, they were efficient, and did a great job. I would definitely use them for other jobs around the house and recommend them to anyone who asked me.",
    rating: 5,
    when: "July 2026",
  },
  {
    name: "Greg Heffley",
    text: "OJ Exterior Care did an amazing job on our house! They were on time, professional, and took the time to explain the whole soft washing process. Our siding looks brand new, and they were careful around all of our landscaping. The price was fair, and the results exceeded our expectations. We'll definitely be using them again and recommending them to our neighbors!",
    rating: 5,
    when: "July 2026",
  },
  {
    name: "Daisy Genz",
    text: "We had a great experience using OJ Exterior Care to clean our exterior windows, walkways, and front porch steps. Their communication was excellent from start to finish, and the quality of their work was outstanding. Everything looks so much cleaner and refreshed. I would definitely recommend them!",
    rating: 5,
    when: "July 2026",
  },
  {
    name: "Karla Piehl",
    text: "We had our house power washed and our windows cleaned. They were fast and efficient and did a great job in a small amount of time. They were also very friendly and courteous.",
    rating: 5,
    when: "July 2026",
  },
  {
    name: "Michele Young",
    text: "Thank you to Oscar and Jacob for job well done on power washing our house. Looks great!",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Chris Statema",
    text: "This is the first time I had my house and driveway power washed. Extremely happy with the results. They even washed my garbage bins!",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Andrew Capobianco",
    text: "I highly recommend OJ Exterior Care. They did an extraordinary job on my back patio and my side walkway. Both look cleaner and brighter than they ever have. These are hard working young men and they deliver a quality product at a reasonable price.",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Katherine Smith",
    text: "Oscar and Jacob are organized, responsive and a pleasure to work with. They did an excellent job of cleaning all my windows and I would not hesitate to hire them again.",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Chris Honey",
    text: "These guys did a spectacular job! My windows look great. I highly recommend them.",
    rating: 5,
    when: "June 2026",
  },
  {
    name: "Troy Buck",
    text: "Did a great job, very professional, and would hire them again.",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Kathy Jurgens",
    text: "Great experience and great results!",
    rating: 5,
    when: "May 2026",
  },
  {
    name: "Dave",
    text: "Nice job. On time. Good communication.",
    rating: 5,
    when: "June 2026",
  },
];

// Duplicate for seamless loop
const half = Math.ceil(testimonials.length / 2);
const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
const row2 = [...testimonials.slice(half), ...testimonials.slice(half)];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="relative flex-shrink-0 w-[340px] surface rounded-2xl p-7 mx-2.5">
    <span className="absolute top-2 right-5 accent-serif text-6xl text-ember/15 leading-none select-none" aria-hidden>
      &rdquo;
    </span>
    <div className="flex gap-1 mb-5" aria-label={`${t.rating} star rating`}>
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="w-3.5 h-3.5 fill-ember text-ember" />
      ))}
    </div>
    <p className="font-serif text-[16px] text-bone/85 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
    <div className="flex items-center justify-between pt-4 border-t border-bone/10">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] font-medium text-bone">{t.name}</p>
      <p className="font-mono text-[10px] text-bone-dim uppercase tracking-[0.14em]">{t.when}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 md:py-36 overflow-hidden bg-carbon-2/50 grain">
      <div className="container mb-14 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">03</span>
              <span className="eyebrow eyebrow-dim">Reviews</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-bone">
              What the neighbors{" "}
              <span className="accent-serif text-ember-gradient">are saying.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=OJ+Exterior+Care+Kenosha"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 glass rounded-full flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/85 hover:border-ember/40 px-5 py-3 transition-colors duration-200"
          >
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-ember text-ember" />
              ))}
            </span>
            5.0 on Google
          </a>
        </motion.div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-6">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {row1.map((t, i) => <TestimonialCard key={`r1-${i}`} t={t} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-carbon to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-carbon to-transparent pointer-events-none z-10" />
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div className="flex animate-marquee-reverse hover:[animation-play-state:paused]">
          {row2.map((t, i) => <TestimonialCard key={`r2-${i}`} t={t} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-carbon to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-carbon to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Testimonials;
