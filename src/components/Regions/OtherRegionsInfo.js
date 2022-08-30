import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function OtherRegionsInfo() {
  const { id } = useParams();
  console.log("params", id);
  return (
    <div>
      {allData.map((data) => (
        <div>
          <p>{data.otherRegions[id].name}</p>
        </div>
      ))}
    </div>
  );
}
