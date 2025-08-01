import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";
import TrainingSection from "./components/TrainingSection";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <LogoSection />
      <FeatureSection />
      <TrainingSection />
    </>
  );
}

export default App;
