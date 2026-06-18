import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import FoundersStrip from "@/components/FoundersStrip";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PromoBanner from "@/components/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 inset-x-0 z-50">
        <PromoBanner />
        <Header />
      </div>
      <Hero />
      <TrustBar />
      <BeforeAfter />
      <Services />
      <FoundersStrip />
      <Testimonials />
      <Pricing />
      <Process />
      <ServiceArea />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
