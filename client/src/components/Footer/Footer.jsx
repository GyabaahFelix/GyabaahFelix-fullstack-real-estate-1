import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logofelix.jpg" alt="" width={120} className="logofelix" />
          <span className="secondaryText">
          Our vision is to create the best <br />
          living environment for everyone.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Details</span>
          <span className="secondaryText">LG25, University of Ghana,Legon</span>
          <div className="flexCenter f-menu">
            <span>About Us</span>
            <span>Services</span>
            <span>Product</span>
            <span>Property</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
