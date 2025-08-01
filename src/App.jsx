import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import LogoSection from "./components/LogoSection";
import FeatureSection from "./components/FeatureSection";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <LogoSection />
      <FeatureSection />
    </>
  );
}

export default App;
