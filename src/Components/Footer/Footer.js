import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footr">
      <div className="footr_div1">
        <p className="footr_title">Ulook Shop</p>
        <p>Lorem ipsum dolor sit amet eiusmod tempor incididunt.</p>
        <p>2021 © All rights reserved Pandit Utkarsh</p>
      </div>
      <div className="footr_div1">
        <p className="footr_title">Contact</p>
        <p>+91 987654323</p>
        <p>panditutkp@22gmail.com</p>
      </div>
      <div className="footr_div1">
        <p className="footr_title">Links</p>
        <p>Service</p>
        <p>Blog</p>
        <p>About</p>
      </div>
      <div className="footr_div1">
        <p className="footr_title">Newsletter</p>
        <input type="text" placeholder="pandit utkarsh"/>
        <button className="footr_btn">Sign up</button>
      </div>
    </div>
  );
}

export default Footer;
