import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function TourInfo() {
  const params = useParams();
  console.log("params", params);
  return (
    <div>
      {allData.map((data) => (
        <div>
          {data.regions.map((region) => (
            <div>
              <p>{region.places[params.id].name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
