import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "./travel.png";
import "./Header.css";
import "./MediaQuery.css";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import allData from "./data.json";
import newData from "./newData.json";
import { MenuItem } from "@mui/material";

export default function NewHeader() {
  return (
    <div>
      {allData.map((data, id) => {
        console.log(data);
        return (
          <div>
            <header>
              <img src={logo} alt="" width="70px" height="70px" />
              <div className="logoText">
                <h1>Kenel</h1>
                <h3>Travel & Tour</h3>
              </div>
            </header>
            <nav key={id}>
              <div className="menuIcon">
                <Menu />
              </div>
              <div>
                <div className="regions">
                  {data.regions.map((region, id) => {
                    return (
                      <Link
                        to={`/region-info/${id}`}
                        key={id}
                        className="accraLinks"
                      >
                        {region.name} Region
                        <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                        <ul>
                          {region.places.map((place, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/tour-place-info/${id}`}>
                                  {place.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Link>
                    );
                  })}
                  <Link to="#" className="otherLinks">
                    Other Regions
                    <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                    <ul>
                      {data.otherRegions.map((otherRegion, id) => {
                        return (
                          <li key={id}>
                            <Link to={`/extra-region-info/${id}`}>
                              {otherRegion.name} Region
                              <ArrowRight sx={{ marginBottom: "-7px" }} />
                              <ul className="other-places">
                                {otherRegion.places.map((place, id) => {
                                  return (
                                    <li key={id}>
                                      <Link to={`/extra-tour-info/${place.id}`}>
                                        {place.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Link>
                </div>
              </div>
              <div className="line">{"|"}</div>
              <div className="pageLinks">
                <div className="pages">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="upcoming">
                  <NavLink to="/upcoming-tour">Upcoming Tour</NavLink>
                </div>
              </div>
            </nav>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}
