import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Heart, Shield, Users, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import foundersImg from "@/assets/founders/founders.jpg";

const values = [
  {
    icon: Heart,
    title: "We Actually Care",
    description:
      "This isn't a faceless franchise. We're your neighbors. We treat every home like it's our own.",
  },
  {
    icon: Shield,
    title: "Real Accountability",
    description:
      "If something isn't right, we make it right. No runaround. No excuses. Just honest work and real results.",
  },
  {
    icon: Users,
    title: "Local From Day One",
    description:
      "Born and raised in Kenosha. We know the area, the weather, and the surfaces. That local knowledge matters.",
  },
  {
    icon: MapPin,
    title: "Community Rooted",
    description:
      "We hire local, buy local, and give back to the community that raised us. Your support stays right here.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="container relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mt-3 mb-5">
              Two Local Guys. <span className="text-gradient-orange">One Real Mission.</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We didn't set out to build a corporate empire. We set out to do honest work for honest people — and do it better than anyone else in Kenosha.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-6">
                Built From the Ground Up
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  OJ Exterior Care started with two young guys from the Kenosha area — Oscar and Jacob — who saw a gap in the market: homeowners wanted professional exterior cleaning, but they were tired of dealing with big, impersonal companies that overpromised and underdelivered.
                </p>
                <p>
                  So we started small. Just a pressure washer, a truck, and a commitment to doing things the right way. No shortcuts. No slick sales pitches. Just show up on time, work hard, and leave every surface looking better than we found it.
                </p>
                <p>
                  Word spread. Neighbors told neighbors. Today, we're proud to serve Kenosha, Racine, Zion, and the surrounding communities — but we've never lost that local, neighbor-to-neighbor feel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl overflow-hidden border border-border bg-gradient-card"
            >
              <img
                src={foundersImg}
                alt="Oscar and Jacob, co-founders of OJ Exterior Care"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="px-4 py-3 border-t border-border text-center">
                <p className="font-heading font-bold text-sm">Oscar & Jacob</p>
                <p className="text-xs text-muted-foreground">Co-Founders</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-6">
              Bring Professional Results and Real Accountability to Local Homeowners
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We believe every homeowner deserves to feel proud of their property. Our mission is simple: deliver the kind of exterior cleaning that makes you stop and smile when you pull into your driveway — backed by people who actually answer the phone, show up when they say they will, and stand behind their work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 md:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">
              Not Your Typical Cleaning Crew
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-gradient-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center rounded-2xl border border-border bg-gradient-card p-8 md:p-12 shadow-card"
          >
            <h2 className="text-2xl md:text-4xl font-bold font-heading mb-3">
              Ready to Meet Your <span className="text-gradient-orange">Local Crew</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Free quotes, fast response, and zero pressure. Let's see what we can do for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="bg-gradient-orange text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+12623517796"
                className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="sms:+12623517796"
                className="border border-border bg-secondary text-foreground px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Text Us
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
