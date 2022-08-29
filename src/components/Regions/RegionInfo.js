import React from "react";
import allData from "../../data.json";
import { useParams } from "react-router-dom";

export default function RegionInfo() {
  const params = useParams();
  console.log(params);
  return <div></div>;
}
