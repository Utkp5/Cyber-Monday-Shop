import React, { useState } from 'react'
import "./Product.css";

function Product() {

    const[Products,setproducts] = useState([
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/phone.png",
            productsInfo : "IPHONE X",
            productsPrice : "$399",
            priceStrike : "$599",
        },
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/laptop__1_.png",
            productsInfo : "LAPTOP LINOVO",
            productsPrice : "$799",
            priceStrike : "$1099",
        },
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/camera.png",
            productsInfo : "CAMERA CANON",
            productsPrice : "$1000",
            priceStrike : "$2000",
        },
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/headphones.png",
            productsInfo : "HEADPHONES BOAT",
            productsPrice : "$300",
            priceStrike : "$350",
        },
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/iron__1_.png",
            productsInfo : "IRON",
            productsPrice : "$120",
            priceStrike : "$160",
        },
        {
            productsImg : "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4886/washing-machines.png",
            productsInfo : "WASHING MACHINE",
            productsPrice : "$200",
            priceStrike : "$250",
        }
    ])

  return (
    <div className='prdct_container'>
      <h2 id='prdct_h2'>MORE PRODUCTS</h2>
      <div className='prdct_main'>
      {
        Products.map((prdcts) => {
            return (
                <div className='prdct_box'>
                    <img src={prdcts.productsImg} alt="" className='prdct_img'/>
                        <div className='prdct_sub_box'>
                            <p className='prdct_p1'>{prdcts.productsInfo}</p>
                            <p className='prdct_p2'>{prdcts.productsPrice} <strike className='prdct_strike'>{prdcts.priceStrike}</strike></p>
                            <button className='prdct_btn'>BUY NOW</button>
                         </div>
                </div>
            )
        })
      }
      <div id='prdct_main_btn'>
      <button className='prdct_main_btn'>SEE ALL PRODUCTS</button>
      </div>
      </div>
    </div>
  )
}

export default Product
