import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <Packages />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
