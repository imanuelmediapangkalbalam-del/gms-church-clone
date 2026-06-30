import HeroSection from './components/HeroSection';
import VisionMission from './components/VisionMission';
import EventsCarousel from './components/EventsCarousel';
import LocationsSection from './components/LocationsSection';
import ConnectGroup from './components/ConnectGroup';
import SeniorPastor from './components/SeniorPastor';
import HighlightsCarousel from './components/HighlightsCarousel';
import Affiliations from './components/Affiliations';

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionMission />
      <EventsCarousel />
      <LocationsSection />
      <ConnectGroup />
      <SeniorPastor />
      <HighlightsCarousel />
      <Affiliations />
    </>
  );
}
