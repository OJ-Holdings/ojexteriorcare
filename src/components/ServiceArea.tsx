import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const areas = [
  {
    name: "Kenosha County",
    note: "Primary service area",
    primary: true,
    towns: ["Kenosha", "Pleasant Prairie", "Somers", "Bristol", "Paddock Lake", "Salem Lakes", "Twin Lakes"],
  },
  {
    name: "Racine County",
    towns: ["Racine", "Mount Pleasant", "Caledonia", "Sturtevant", "Union Grove", "Burlington"],
  },
  {
    name: "Milwaukee County",
    towns: ["Milwaukee", "Whitefish Bay", "Shorewood", "Fox Point", "Wauwatosa", "Greenfield", "Franklin", "Oak Creek"],
  },
  {
    name: "Waukesha County",
    towns: ["Waukesha", "Brookfield", "Elm Grove", "New Berlin", "Muskego", "Pewaukee", "Menomonee Falls"],
  },
  {
    name: "Walworth County",
    towns: ["Lake Geneva", "Delavan", "Elkhorn", "Williams Bay", "Fontana", "East Troy"],
  },
  {
    name: "Lake County, IL",
    towns: ["Waukegan", "Gurnee", "Zion", "Winthrop Harbor", "Antioch", "Libertyville", "Lake Forest", "Lake Bluff", "Highland Park"],
  },
  {
    name: "Cook County, IL",
    towns: ["Glencoe"],
  },
];

const ServiceArea = () => {
  return (
    <section className="py-24 md:py-32 bg-carbon-2/50">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] text-ember">06</span>
              <span className="eyebrow eyebrow-dim">Coverage</span>
            </div>
            <h2 className="font-display font-semibold text-4xl md:text-5xl leading-[1.06] tracking-[-0.03em] text-bone mb-5">
              Proudly serving southeast Wisconsin and northern{" "}
              <span className="accent-serif text-ember-gradient">Illinois.</span>
            </h2>
            <p className="text-bone-dim leading-relaxed mb-8 max-w-md">
              From our home base in Kenosha, we serve homeowners across seven counties,
              from Milwaukee and Waukesha down through Lake County and the North Shore.
              Don&rsquo;t see your town? Just ask. We may still cover you.
            </p>

            <div className="surface rounded-2xl p-7">
              <p className="font-display font-semibold text-xl text-bone mb-1.5">
                Not sure if we cover your area?
              </p>
              <p className="text-bone-dim text-sm mb-6">
                Reach out and we&rsquo;ll let you know. Usually within the hour.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="group bg-ember text-carbon px-5 py-3 rounded-full font-display font-semibold text-sm flex items-center gap-2 hover:bg-ember-bright transition-colors duration-200"
                >
                  Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="tel:+12625153083"
                  className="glass text-bone px-5 py-3 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
                >
                  <Phone className="w-3.5 h-3.5 text-ember" /> Call
                </a>
                <a
                  href="sms:+12625153083"
                  className="glass text-bone px-5 py-3 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-ember" /> Text
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: county ledger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="border-t border-bone/10">
              {areas.map((area, i) => (
                <div
                  key={area.name}
                  className={`flex items-baseline gap-4 py-4 border-b border-bone/10 px-3 -mx-3 rounded-lg transition-colors duration-200 hover:bg-carbon-3 ${
                    area.primary ? "bg-ember/5" : ""
                  }`}
                >
                  <span className="font-mono text-[10px] text-bone-dim tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className={`font-display font-medium text-lg md:text-xl tracking-[-0.01em] truncate ${area.primary ? "text-ember" : "text-bone"}`}>
                        {area.name}
                      </span>
                      {area.note && (
                        <>
                          <span className="dot-leader hidden sm:block" aria-hidden />
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim shrink-0">
                            {area.note}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-bone-dim leading-relaxed">
                      {area.towns.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
