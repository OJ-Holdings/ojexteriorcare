import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import HowWePrice from "@/components/HowWePrice";
import BookingSection from "@/components/BookingSection";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
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
      <Services />
      <BeforeAfter />
      <Pricing />
      <HowWePrice />
      <BookingSection />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <InstagramFeed />
      <ServiceArea />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
