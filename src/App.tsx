
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Certificate086 from "./pages/Certificate086";
import Certificate095 from "./pages/Certificate095";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Licenses from "./pages/Licenses";
import Services from "./pages/Services";
import Delivery from "./pages/Delivery";
import Reviews from "./pages/Reviews";
import Doctors from "./pages/Doctors";
import DoctorSmirnova from "./pages/doctors/DoctorSmirnova";
import DoctorPetrov from "./pages/doctors/DoctorPetrov";
import DoctorKozlova from "./pages/doctors/DoctorKozlova";
import DoctorSokolov from "./pages/doctors/DoctorSokolov";
import DoctorVolkova from "./pages/doctors/DoctorVolkova";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/certificate-086" element={<Certificate086 />} />
          <Route path="/certificate-095" element={<Certificate095 />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/smirnova" element={<DoctorSmirnova />} />
          <Route path="/doctor/petrov" element={<DoctorPetrov />} />
          <Route path="/doctor/kozlova" element={<DoctorKozlova />} />
          <Route path="/doctor/sokolov" element={<DoctorSokolov />} />
          <Route path="/doctor/volkova" element={<DoctorVolkova />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;