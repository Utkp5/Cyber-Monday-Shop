import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">

      <div className='navbar'>

        <div className="logo">Ulook Shop</div>
        
          <ul className='navbar_ul'>
              <li><a class="active" href="home">Home</a></li>
              <li><a href="About">About</a></li>
              <li><a href="Shop">Shop</a></li>
              <li><a href="Blog">Blog</a></li>
          </ul>

       </div>

    </div>
  );
}

export default Navbar;