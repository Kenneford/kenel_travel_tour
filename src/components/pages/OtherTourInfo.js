import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function OtherTourInfo() {
  const { id } = useParams();
  console.log("params", id);
  return (
    <div>
      {allData.map((data) => (
        <div>
          {data.otherRegions.map((region) => (
            <div>
              <p>
                {region.places[id].map((place) => (
                  <p>{place.name}</p>
                ))}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
