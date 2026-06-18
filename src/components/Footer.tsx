import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  "Driveway Cleaning",
  "Patio Cleaning",
  "Sidewalk Cleaning",
  "Deck Cleaning",
  "Gutter Cleaning",
  "Window Cleaning",
];

const areas = ["Kenosha, WI", "Racine, WI", "Zion, IL", "Pleasant Prairie", "Somers", "Bristol"];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/ojexteriorcare/" },
  { label: "Facebook", href: "https://www.facebook.com/groups/692584774780615/user/61579825178604/" },
  { label: "TikTok", href: "https://www.tiktok.com/@oj.exterior.care" },
];

const Footer = () => {
  return (
    <footer className="relative bg-carbon-2/60 border-t border-bone/10 overflow-hidden grain">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--ember) / 0.06) 0%, transparent 65%)", filter: "blur(50px)" }}
      />
      <div className="container relative z-10 pt-16 md:pt-24 pb-8">
        {/* Giant wordmark */}
        <div className="border-b border-bone/10 pb-10 md:pb-14 mb-12">
          <div className="flex items-center gap-4 mb-8">
            <img src={logo} alt="" className="h-12 w-auto" aria-hidden />
            <span className="eyebrow">Kenosha, Wisconsin — Est. 2025</span>
          </div>
          <h2 className="font-display font-semibold text-[9.5vw] lg:text-[6.8rem] leading-[0.95] tracking-[-0.04em] text-bone select-none">
            OJ Exterior{" "}
            <span className="accent-serif text-ember-gradient">Care.</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          <div>
            <p className="text-bone-dim text-sm leading-relaxed max-w-xs">
              Professional exterior cleaning services for homeowners who want their
              property looking its best.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-5">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-sm text-bone/70 hover:text-ember transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-5">Service Areas</h4>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a} className="text-sm text-bone/70">{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+12623517796" className="flex items-center gap-2.5 text-sm text-bone/70 hover:text-ember transition-colors duration-200">
                  <Phone className="w-3.5 h-3.5 text-ember" /> (262) 351-7796
                </a>
              </li>
              <li>
                <a href="sms:+12623517796" className="flex items-center gap-2.5 text-sm text-bone/70 hover:text-ember transition-colors duration-200">
                  <MessageCircle className="w-3.5 h-3.5 text-ember" /> Text Us
                </a>
              </li>
              <li>
                <a href="mailto:ojexteriorcare@gmail.com" className="flex items-center gap-2.5 text-sm text-bone/70 hover:text-ember transition-colors duration-200 break-all">
                  <Mail className="w-3.5 h-3.5 text-ember shrink-0" /> ojexteriorcare@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4 mt-7">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim hover:text-ember transition-colors duration-200"
                >
                  {s.label}
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-bone/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim">
            © {new Date().getFullYear()} OJ Exterior Care. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-bone-dim">
            Built &amp; operated in Kenosha, WI <span className="text-ember">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
