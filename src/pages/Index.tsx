import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import OsPanelsSection from "@/components/OsPanelsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <LocationsSection />
    <OsPanelsSection />
    <FaqSection />
    <Footer />
  </div>
);

export default Index;
