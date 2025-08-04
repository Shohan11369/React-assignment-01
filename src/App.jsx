import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";
import TrainingSection from "./components/TrainingSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ImpactSection from "./components/ImpactSection";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <LogoSection />
      <FeatureSection />
      <TrainingSection />
      <TestimonialCarousel />
      <ImpactSection />
    </>
  );
}

export default App;
