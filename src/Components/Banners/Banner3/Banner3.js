import React from "react";
import "./Banner3.css";

function Banner3() {
  return (
    <div className="banner3_div">
      <div className="banner3_flex">
        <div className="circle"></div>
        <div className="circle_content">
          <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/airpods.png" alt="" className="crc_cnt_img" />
          <div className="crc_cnt_flex">
            <p className="circle_p1 crc_p1">ONLY TODAY</p>
            <p className="circle_p2">AIRPODS 2</p>
            <p className="circle_p1">$119<strike className="crc_strike">$199</strike>
            </p>
            <button className="circle_btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
