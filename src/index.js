import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import UpcomingTour from "./components/pages/UpcomingTour";
import RegionInfo from "./components/Regions/RegionInfo";
import OtherRegionsInfo from "./components/Regions/OtherRegionsInfo";
import TourInfo from "./components/pages/TourInfo";
import OtherTourInfo from "./components/pages/TourInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<App />} />
      {/* <Route index element={<HomeContent />} /> */}
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Footer />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upcoming-tour" element={<UpcomingTour />} />
          <Route path="/region-info/:id" element={<RegionInfo />} />
          <Route path="/tour-place-info/:id" element={<TourInfo />} />
          <Route path="/extra-region-info/:id" element={<OtherRegionsInfo />} />
          <Route path="/extra-tour-info/:id" element={<OtherTourInfo />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
