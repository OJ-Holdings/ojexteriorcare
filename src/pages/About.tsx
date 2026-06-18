import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Heart, Shield, Users, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import foundersImg from "@/assets/founders/founders.jpg";

const values = [
  {
    icon: Heart,
    title: "We actually care",
    description:
      "This isn't a faceless franchise. We're your neighbors. We treat every home like it's our own.",
  },
  {
    icon: Shield,
    title: "Real accountability",
    description:
      "If something isn't right, we make it right. No runaround. No excuses. Just honest work and real results.",
  },
  {
    icon: Users,
    title: "Local from day one",
    description:
      "Born and raised in Kenosha. We know the area, the weather, and the surfaces. That local knowledge matters.",
  },
  {
    icon: MapPin,
    title: "Community rooted",
    description:
      "We hire local, buy local, and give back to the community that raised us. Your support stays right here.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-carbon">
      <div className="fixed top-0 inset-x-0 z-50">
        <Header />
      </div>

      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden grain">
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2.5 w-fit mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone/90">
                About OJ Exterior Care
              </span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.0] tracking-[-0.04em] text-bone mb-6 max-w-4xl">
              Two local guys. One real{" "}
              <span className="accent-serif text-ember-gradient">mission.</span>
            </h1>
            <p className="text-bone-dim text-lg md:text-xl max-w-2xl leading-relaxed">
              We didn&rsquo;t set out to build a corporate empire. We set out to do honest
              work for honest people — and do it better than anyone else in Kenosha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow block mb-5">Our Story</span>
              <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone mb-7">
                Built from the{" "}
                <span className="accent-serif text-ember-gradient">ground up.</span>
              </h2>
              <div className="space-y-5 text-bone-dim leading-relaxed">
                <p>
                  OJ Exterior Care started with two young guys from the Kenosha area — Oscar
                  and Jacob — who saw a gap in the market: homeowners wanted professional
                  exterior cleaning, but they were tired of dealing with big, impersonal
                  companies that overpromised and underdelivered.
                </p>
                <p>
                  So we started small. Just a pressure washer, a truck, and a commitment
                  to doing things the right way. No shortcuts. No slick sales pitches.
                  Just show up on time, work hard, and leave every surface looking better
                  than we found it.
                </p>
                <p>
                  Word spread. Neighbors told neighbors. Today, we&rsquo;re proud to serve
                  Kenosha, Racine, Zion, and the surrounding communities — but we&rsquo;ve
                  never lost that local, neighbor-to-neighbor feel.
                </p>
              </div>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="frame lift">
                <img
                  src={foundersImg}
                  alt="Oscar and Jacob, co-founders of OJ Exterior Care"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
              <figcaption className="caption flex items-center justify-between mt-4">
                <span>Oscar &amp; Jacob — Co-Founders</span>
                <span>Kenosha, WI</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-28 overflow-hidden grain">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.08) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="eyebrow block mb-6">Our Mission</span>
            <p className="font-serif text-2xl md:text-4xl text-bone/90 leading-snug">
              Deliver the kind of exterior cleaning that makes you{" "}
              <em className="text-ember">stop and smile</em> when you pull into your
              driveway — backed by people who actually answer the phone, show up when
              they say they will, and stand behind their work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 md:py-24 bg-carbon-2/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow eyebrow-dim block mb-4">What Sets Us Apart</span>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone">
              Not your typical{" "}
              <span className="accent-serif text-ember-gradient">cleaning crew.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="surface rounded-2xl p-7 lift"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-xl bg-ember/10 border border-ember/20 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-ember" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] text-bone-dim tabular-nums">
                    {String(i + 1).padStart(2, "0")} / 04
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl tracking-[-0.01em] text-bone mb-2.5">{v.title}</h3>
                <p className="text-bone-dim text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 80% at 85% 20%, hsl(var(--ember) / 0.10), transparent)" }}
            />
            <div className="relative">
              <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-[-0.03em] text-bone mb-3">
                Ready to meet your{" "}
                <span className="accent-serif text-ember-gradient">local crew?</span>
              </h2>
              <p className="text-bone-dim">
                Free quotes, fast response, and zero pressure. Let&rsquo;s see what we can do for your home.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-3 shrink-0">
              <a
                href="/#contact"
                className="group bg-ember text-carbon px-6 py-3.5 rounded-full font-display font-semibold text-sm flex items-center gap-2 hover:bg-ember-bright glow-ember-sm transition-colors duration-200"
              >
                Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+12623517796"
                className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5 text-ember" /> Call
              </a>
              <a
                href="sms:+12623517796"
                className="glass text-bone px-6 py-3.5 rounded-full font-display font-medium text-sm flex items-center gap-2 hover:border-bone/25 transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-ember" /> Text
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
