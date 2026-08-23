import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

// Core pages
import Index from "./pages/Index.tsx";
import Admin from "./pages/Admin.tsx";
import OurWork from "./pages/OurWork.tsx";
import About from "./pages/About.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import NotFound from "./pages/NotFound.tsx";

// Location pages
import Kenosha from "./pages/locations/Kenosha.tsx";
import Racine from "./pages/locations/Racine.tsx";
import Zion from "./pages/locations/Zion.tsx";

// Service pages
import DrivewayPressureWashing from "./pages/services/DrivewayPressureWashing.tsx";
import WindowCleaning from "./pages/services/WindowCleaning.tsx";
import PatioCleaning from "./pages/services/PatioCleaning.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <ScrollProgress />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Core */}
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Location landing pages */}
          <Route path="/pressure-washing-kenosha" element={<Kenosha />} />
          <Route path="/pressure-washing-racine" element={<Racine />} />
          <Route path="/pressure-washing-zion-il" element={<Zion />} />

          {/* Service detail pages */}
          <Route path="/services/driveway-pressure-washing" element={<DrivewayPressureWashing />} />
          <Route path="/services/window-cleaning" element={<WindowCleaning />} />
          <Route path="/services/patio-cleaning" element={<PatioCleaning />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
