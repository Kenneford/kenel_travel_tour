import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";
import "./RegionInfo.css";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function NewRegionInfo() {
  const { id } = useParams();
  console.log("params", id);
  return (
    <div>
      {allData.map((data) => (
        <div key={data.id}>
          <div
            className="accraBgImage"
            style={{
              backgroundImage: `url(${data.regions[id].bgImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "450px",
            }}
          >
            <h1> {data.regions[id].name}</h1>
            <p>({data.regions[id].location})</p>
          </div>
          <div className="regContWrap">
            <h2>A bit about Greater Accra Region</h2>
            <p> {data.regions[id].info}</p>
            <div>
              <h2>Hotels in Accra</h2>
              <h2>Places to shop</h2>
            </div>
            <div>
              <h2>Top restaurants</h2>
            </div>
            <div>
              <h2>Entertainments</h2>
            </div>
            {/* <div className="accraAttractions">
              <p className="popLinks">Popular Links 👉🏾</p>
              {data.regions[id].places.map((place) => (
                <p>
                  <Link to={`/tour-place-info/${id}`}>{place.name}</Link>
                </p>
              ))}
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
