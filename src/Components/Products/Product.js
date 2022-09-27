import React, { useState } from "react";
import "./Product.css";

function Product() {
  const [Products, setproducts] = useState([
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/phone.png",
      productsInfo: "IPHONE X",
      productsPrice: "$399",
      priceStrike: "$599",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/laptop__1_.png",
      productsInfo: "LAPTOP LINOVO",
      productsPrice: "$799",
      priceStrike: "$1099",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/camera.png",
      productsInfo: "CAMERA CANON",
      productsPrice: "$1000",
      priceStrike: "$2000",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/headphones.png",
      productsInfo: "HEADPHONES BOAT",
      productsPrice: "$300",
      priceStrike: "$350",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/iron__1_.png",
      productsInfo: "IRON",
      productsPrice: "$120",
      priceStrike: "$160",
    },
    {
      productsImg:
        "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/washing-machines.png",
      productsInfo: "WASHING MACHINE",
      productsPrice: "$200",
      priceStrike: "$250",
    },
  ]);

  return (
    <div className="prdct_container">
      <h2 className="prdct_h2">MORE PRODUCTS</h2>
      <div className="prdct_main">
        {Products.map((prdcts) => {
          return (
            <div className="prdct_box">
              <img src={prdcts.productsImg} alt="" className="prdct_img" />
              <div className="prdct_sub_box">
                <p className="prdct_p1">{prdcts.productsInfo}</p>
                <p className="prdct_p2">
                  {prdcts.productsPrice}{" "}
                  <strike className="prdct_strike">{prdcts.priceStrike}</strike>
                </p>
                <button className="prdct_btn">BUY NOW</button>
              </div>
            </div>
          );
        })}
        <div id="prdct_main_btn">
          <button className="prdct_main_btn">SEE ALL PRODUCTS</button>
        </div>
      </div>

      <div className="blog_container">
        <h2 className="prdct_h2">BLOG</h2>

        <div className="blog_main_flex">
          <div className="blog_main_div1">
            <img
              className="blog_m_img"
              src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/ba79d385-3af8-43c1-907f-53b3b7aef0a3.jpeg"
              alt=""
            />
            <p className="blog_p1">
              LAPTOP BUYING GUIDE: HOW TO CHOOSE THE BEST LAPTOP
            </p>
            <p className="blog_p2">28/09/2022</p>
            <p className="blog_p3">
              Shopping for a notebook can be an infuriating experience. Here’s
              how to sift through the acronyms, storage options, and extra
              features to find the best one for you
            </p>
            <button className="blog_btn">READ MORE</button>
          </div>
          <div className="blog_m_info">
            <div>
              <p className="blog_p1">20 BEST SMARTPHONES FOR LESS THAN $800</p>
              <p className="blog_p2">28/09/2022</p>
              <button className="blog_btn">READ MORE</button>
            </div>
            <div>
              <p className="blog_p1">BEST CAMERAS FOR BLOGGING IN 2021</p>
              <p className="blog_p2">28/09/2022</p>
              <button className="blog_btn">READ MORE</button>
            </div>
            <div>
              <p className="blog_p1">5 BEST SMART SPEAKERS</p>
              <p className="blog_p2">28/09/2022</p>
              <button className="blog_btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="exp">
        <div className="exp_div">
          <img
            src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/736a5d0f-2902-4a47-990d-b3b725da22e6.png"
            alt=""
            className="exp_img"
          />
          <div>
            <p className="exp_p1">NEW EXPERIENCE</p>
            <p className="exp_p2">
              LAPTOP BUYING GUIDE: HOW TO CHOOSE THE BEST LAPTOP BEST CAMERAS
              FOR BLOGGING IN 2021 20 BEST SMARTPHONES FOR LESS THAN{" "}
            </p>
            <button className="blog_btn exp_btn">LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
