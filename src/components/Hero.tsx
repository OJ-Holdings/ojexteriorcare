import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Zap, Award, Smile } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Clean home exterior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, hsl(0 0% 7% / 0.9) 0%, hsl(0 0% 7% / 0.7) 50%, hsl(0 0% 7% / 0.95) 100%)" }} />
      </div>

      <div className="container relative z-10 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Professional Exterior Cleaning
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 font-heading">
            Exterior Cleaning That{" "}
            <span className="text-gradient-orange">Instantly Transforms</span>{" "}
            Your Home
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
            OJ Exterior Care helps homeowners restore driveways, patios, and outdoor surfaces
            to like-new condition. Fast quotes. Professional results. Local service you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="bg-gradient-orange text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+15551234567"
              className="border border-border bg-secondary text-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="sms:+15551234567"
              className="border border-border bg-secondary text-foreground px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Text Us
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10">
            {[
              { icon: Zap, text: "Fast Quotes" },
              { icon: Award, text: "Professional Results" },
              { icon: Smile, text: "Friendly Local Service" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
