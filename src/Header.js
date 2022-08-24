import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import logo from "./travel.png";
import "./Header.css";
import "./MediaQuery.css";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";

export default function Header({ switchTheme }) {
  return (
    <div>
      <header>
        <img src={logo} alt="" width="70px" height="70px" />
        <div className="logoText">
          <h1>Kenel</h1>
          <h3>Travel & Tour</h3>
        </div>
      </header>
      <nav>
        <div>
          <div className="menuIcon">
            <Menu />
          </div>
          <div className="regions">
            <Link to="#" className="accraLinks">
              Greater Accra
              <ArrowDropDown sx={{ marginBottom: "-7px" }} />
              <ul>
                <li>
                  <Link to="#">Osu Castle</Link>
                </li>
                <li>
                  <Link to="#">Independence Square</Link>
                </li>
                <li>
                  <Link to="#">Kwame Nkrumah Memorial Park</Link>
                </li>
              </ul>
            </Link>
            <Link to="#" className="ashantiLinks">
              Ashanti Region
              <ArrowDropDown sx={{ marginBottom: "-7px" }} />
              <ul>
                <li>
                  <Link to="#">Lake Bosontwe</Link>
                </li>
                <li>
                  <Link to="#">Manhyia Palace</Link>
                </li>
                <li>
                  <Link to="#">Prempeh II Museum</Link>
                </li>
                <li>
                  <Link to="#">Okomfo Anokye Sword Site</Link>
                </li>
                <li>
                  <Link to="#">Bonwire Kente Weaving Village</Link>
                </li>
              </ul>
            </Link>
            <Link to="#" className="voltaLinks">
              Volta Region
              <ArrowDropDown sx={{ marginBottom: "-7px" }} />
              <ul>
                <li>
                  <Link to="#">Mount Afadja</Link>
                </li>
                <li>
                  <Link to="#">Fort Prinzenstein</Link>
                </li>
                <li>
                  <Link to="#">Ote Falls</Link>
                </li>
                <li>
                  <Link to="#">Tafi Monkey Sanctuary</Link>
                </li>
                <li>
                  <Link to="#">Ave Crocodile Resort</Link>
                </li>
              </ul>
            </Link>
            <Link to="#" className="centralLinks">
              Central Region
              <ArrowDropDown sx={{ marginBottom: "-7px" }} />
              <ul>
                <li>
                  <Link to="#">Assin Manso Slave River</Link>
                </li>
                <li>
                  <Link to="#">Posuban Shrines</Link>
                </li>
                <li>
                  <Link to="#">Kakum National Park</Link>
                </li>
                <li>
                  <Link to="#">Elmina Castle</Link>
                </li>
                <li>
                  <Link to="#">Monkey Forest Resort</Link>
                </li>
                <li>
                  <Link to="#">International Stingless Bee Centre</Link>
                </li>
              </ul>
            </Link>
            <Link to="#" className="otherLinks">
              Other Regions
              <ArrowDropDown sx={{ marginBottom: "-7px" }} />
              <ul>
                <li>
                  <Link to="#">
                    Eastern Region
                    <ArrowRight sx={{ marginBottom: "-7px" }} />
                    <ul className="eastern">
                      <li>
                        <Link to="#">Boti Falls</Link>
                      </li>
                      <li>
                        <Link to="#">Lake Volta</Link>
                      </li>
                      <li>
                        <Link to="#">Umbrella Rock</Link>
                      </li>
                      <li>
                        <Link to="#">Aburi Botanical Gardens</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Western Region
                    <ArrowRight sx={{ marginBottom: "-7px" }} />
                    <ul className="western">
                      <li>
                        <Link to="#">Nzulezu Stilt Village</Link>
                      </li>
                      <li>
                        <Link to="#">Akatekyi Crocodile Pond</Link>
                      </li>
                      <li>
                        <Link to="#">Ahanta Surf School</Link>
                      </li>
                      <li>
                        <Link to="#">Ankasa Conservation Area</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Northern Region
                    <ArrowRight sx={{ marginBottom: "-7px" }} />
                    <ul className="northern">
                      <li>
                        <Link to="#">Mole National Park</Link>
                      </li>
                      <li>
                        <Link to="#">Laribanga Mosque</Link>
                      </li>
                      <li>
                        <Link to="#">Mognori Eco-Village</Link>
                      </li>
                      <li>
                        <Link to="#">The Mystic Stone</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Upper East Region
                    <ArrowRight sx={{ marginBottom: "-7px" }} />
                    <ul className="upper-east">
                      <li>
                        <Link to="#">Paga Crocodile Pond</Link>
                      </li>
                      <li>
                        <Link to="#">Tongo Hills And Tenzug Shrines</Link>
                      </li>
                      <li>
                        <Link to="#">Ahanta Surf School</Link>
                      </li>
                      <li>
                        <Link to="#">Ankasa Conservation Area</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Brong Ahafo Region
                    <ArrowRight sx={{ marginBottom: "-7px" }} />
                    <ul className="ahafo">
                      <li>
                        <Link to="#">Kintampo Waterfalls</Link>
                      </li>
                      <li>
                        <Link to="#">Tano Boase</Link>
                      </li>
                      <li>
                        <Link to="#">Bui National Park</Link>
                      </li>
                      <li>
                        <Link to="#">Fuller Falls</Link>
                      </li>
                      <li>
                        <Link to="#">Buoyem Sacred Grove</Link>
                      </li>
                      <li>
                        <Link to="#">Digya National Park</Link>
                      </li>
                      <li>
                        <Link to="#">Buabeng Fiema Monkey Sanctuary</Link>
                      </li>
                    </ul>
                  </Link>
                </li>
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
      <Outlet />
    </div>
  );
}
