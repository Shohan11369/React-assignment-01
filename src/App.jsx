import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";
import TrainingSection from "./components/TrainingSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ImpactSection from "./components/ImpactSection";
import CallToActionSection from "./components/CalltoActionSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <FeatureSection />
      <TrainingSection />
      <TestimonialCarousel />
      <ImpactSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}

export default App;
