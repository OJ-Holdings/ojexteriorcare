import logo from "@/assets/logo.png";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="OJ Exterior Care" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional exterior cleaning services for homeowners who want their property looking its best.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Driveway Cleaning</li>
              <li>Patio Cleaning</li>
              <li>Sidewalk Cleaning</li>
              <li>Deck Cleaning</li>
              <li>Oil Stain Treatment</li>
              <li>Rust Stain Treatment</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Your City</li>
              <li>Nearby Town</li>
              <li>Local County</li>
              <li>Surrounding Areas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+12623517796" className="hover:text-foreground transition-colors">(262) 351-7796</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="sms:+12623517796" className="hover:text-foreground transition-colors">Text Us</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:ojexteriorcare@gmail.com" className="hover:text-foreground transition-colors">ojexteriorcare@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OJ Exterior Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
