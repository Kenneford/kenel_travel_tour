import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import UpcomingTour from "./components/pages/UpcomingTour";
import RegionInfo from "./components/Regions/RegionInfo";
import TourInfo from "./components/pages/TourInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Footer />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/upcoming-tour" element={<UpcomingTour />} />
            <Route path="/region-info/:id" element={<RegionInfo />} />
            <Route path="/tour-place-info/:id" element={<TourInfo />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
