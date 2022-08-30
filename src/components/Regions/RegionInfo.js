import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function NewRegionInfo() {
  const { id } = useParams();
  console.log("params", id);
  return (
    <div>
      {allData.map((data) => (
        <div>
          <p> {data.regions[id].name}</p>
          <p> {data.regions[id].info}</p>
          <p>
            {data.regions[id].places.map((place) => (
              <p>{place.name}</p>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
