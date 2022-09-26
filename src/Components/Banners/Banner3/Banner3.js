import React from "react";
import "./Banner3.css";

function Banner3() {
  return (
    <div className="banner3_div">
      <div className="banner3_flex">
        <div className="circle"></div>
        <div className="circle_content">
          <img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/airpods.png" alt="" className="crc_cnt_img" />
          <div>
            <p>ONLY TODAY</p>
            <p>AIRPODS 2</p>
            <p>$119<strike>$199</strike>
            </p>
            <button className="bner1_bt">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner3;
