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
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<HomeContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upcoming-tour" element={<UpcomingTour />} />
          <Route path="/region-info/:id" element={<RegionInfo />} />
          <Route path="/tour-place-info/:id" element={<TourInfo />} />
          <Route path="/extra-region-info/:id" element={<OtherRegionsInfo />} />
          <Route path="/extra-tour-info/:id" element={<OtherTourInfo />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
