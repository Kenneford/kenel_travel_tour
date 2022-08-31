import "./App.css";
import "./index.css";
import HomeContent from "./HomeContent";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import UpcomingTour from "./components/pages/UpcomingTour";
import RegionInfo from "./components/Regions/RegionInfo";
import OtherRegionsInfo from "./components/Regions/OtherRegionsInfo";
import TourInfo from "./components/pages/TourInfo";
import OtherTourInfo from "./components/pages/TourInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
