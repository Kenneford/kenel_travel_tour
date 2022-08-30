import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function TourInfo() {
  const params = useParams();
  console.log("params", params);
  return <div>TourInfo</div>;
}
