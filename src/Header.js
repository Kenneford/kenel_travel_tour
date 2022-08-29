import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "./travel.png";
import "./Header.css";
import "./MediaQuery.css";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import allData from "./data.json";

export default function Header1({ region }) {
  //   if (!region) {
  //     return <div>Loading...</div>;
  //   }
  return (
    <div>
      <header>
        <img src={logo} alt="" width="70px" height="70px" />
        <div className="logoText">
          <h1>Kenel</h1>
          <h3>Travel & Tour</h3>
        </div>
      </header>
      {allData.map((data, id) => {
        return (
          <div>
            {data.regions.map((region, id) => {
              return (
                <nav key={id}>
                  <div className="menuIcon">
                    <Menu />
                  </div>
                  {region.accra.map((accra, id) => {
                    console.log(accra);
                    return (
                      <div className="regions" key={id}>
                        <Link
                          to={`/region-info/${accra.id}`}
                          className="accraLinks"
                        >
                          {accra.name} Region
                          <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                          <ul>
                            {accra.places.map((place, id) => {
                              console.log(place);
                              return (
                                <li key={id}>
                                  <Link to={`/tour-place-info/${place.id}`}>
                                    {place.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </Link>
                      </div>
                    );
                  })}
                  {region.ashanti.map((ashanti, id) => {
                    return (
                      <div className="regions" key={id}>
                        <Link
                          to={`/region-info/${ashanti.id}`}
                          className="ashantiLinks"
                        >
                          {ashanti.name} Region
                          <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                          <ul>
                            {ashanti.places.map((place, id) => {
                              return (
                                <li key={id}>
                                  <Link to={`/tour-place-info/${place.id}`}>
                                    {place.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </Link>
                      </div>
                    );
                  })}
                  {region.volta.map((volta, id) => {
                    return (
                      <div className="regions" key={id}>
                        <Link
                          to={`/region-info/${volta.id}`}
                          className="voltaLinks"
                        >
                          {volta.name} Region
                          <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                          <ul>
                            {volta.places.map((place, id) => {
                              return (
                                <li key={id}>
                                  <Link to={`/tour-place-info/${place.id}`}>
                                    {place.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </Link>
                      </div>
                    );
                  })}
                  {region.central.map((central, id) => {
                    return (
                      <div className="regions" key={id}>
                        <Link
                          to={`/region-info/${central.id}`}
                          className="centralLinks"
                        >
                          {central.name} Region
                          <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                          <ul>
                            {central.places.map((place, id) => {
                              return (
                                <li key={id}>
                                  <Link to={`/tour-place-info/${place.id}`}>
                                    {place.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </Link>
                      </div>
                    );
                  })}
                  <Link to="#" className="otherLinks">
                    Other Regions
                    <ArrowDropDown sx={{ marginBottom: "-7px" }} />
                    {region.others.map((region, id) => {
                      return (
                        <ul key={id}>
                          {region.eastern.map((eastern, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/region-info/${eastern.id}`}>
                                  {eastern.name} Region
                                </Link>
                                <ArrowRight sx={{ marginBottom: "-7px" }} />
                                <ul className="eastern">
                                  {eastern.places.map((place, id) => {
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={`/tour-place-info/${place.id}`}
                                        >
                                          {place.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                          {region.western.map((western, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/region-info/${western.id}`}>
                                  {western.name} Region
                                </Link>
                                <ArrowRight sx={{ marginBottom: "-7px" }} />
                                <ul className="western">
                                  {western.places.map((place, id) => {
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={`/tour-place-info/${place.id}`}
                                        >
                                          {place.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                          {region.northern.map((northern, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/region-info/${northern.id}`}>
                                  {northern.name} Region
                                </Link>
                                <ArrowRight sx={{ marginBottom: "-7px" }} />
                                <ul className="northern">
                                  {northern.places.map((place, id) => {
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={`/tour-place-info/${place.id}`}
                                        >
                                          {place.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                          {region.upperEast.map((upperEast, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/region-info/${upperEast.id}`}>
                                  {upperEast.name} Region
                                </Link>
                                <ArrowRight sx={{ marginBottom: "-7px" }} />
                                <ul className="upper-east">
                                  {upperEast.places.map((place, id) => {
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={`/tour-place-info/${place.id}`}
                                        >
                                          {place.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                          {region.ahafo.map((ahafo, id) => {
                            return (
                              <li key={id}>
                                <Link to={`/region-info/${ahafo.id}`}>
                                  {ahafo.name} Region
                                </Link>
                                <ArrowRight sx={{ marginBottom: "-7px" }} />
                                <ul className="ahafo">
                                  {ahafo.places.map((place, id) => {
                                    return (
                                      <li key={id}>
                                        <Link
                                          to={`/tour-place-info/${place.id}`}
                                        >
                                          {place.name}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </li>
                            );
                          })}
                        </ul>
                      );
                    })}
                  </Link>
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
              );
            })}
          </div>
        );
      })}
      <Outlet />
    </div>
  );
}
