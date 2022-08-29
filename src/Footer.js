import React from "react";
import "./Footer.css";
import { Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <Outlet />
      <div className="footer">
        <p>Copyright &copy;2022 Kenel Travel & Tour</p>
      </div>
    </div>
  );
}
