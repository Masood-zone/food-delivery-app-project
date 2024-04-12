import React from "react";
import "./about.css";
import AboutUsTable from "./aboutUsTable";

function AboutUs() {
  return (
    <div className="about-container">
      <h1 className="about-header">About Us</h1>
      <AboutUsTable />
    </div>
  );
}

export default AboutUs;
