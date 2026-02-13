import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import OfferSection from '../components/sections/OfferSection';
import TrustSection from '../components/sections/TrustSection';

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <OfferSection />
      <TrustSection />
    </div>
  );
}
