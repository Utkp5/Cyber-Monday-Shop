import React from "react";
import "./Banner1.css";

function Banner1() {
  return (
    <div className="banner1">
        <div className="bner_1">
        <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/cyber-monday2.gif" alt="" id="bner1_img"/>
        <p className="bner1_p1">Get up to</p>
        <p className="bner1_p2">30% off*</p>
        <button className="bner1_btn">Shop Now</button>
        <p className="bner1_p1">*For one week only</p>
        </div>
        <div className="bner_2">
        <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/cm-1__1___1_.png" alt="" id="bner2_img"/>
        </div>
    </div>
  );
}

export default Banner1;
