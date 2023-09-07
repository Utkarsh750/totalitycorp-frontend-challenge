import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <fotter className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Home</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quas officiis, laudantium magni culpa sed natus exercitationem
            maxime corporis maiores.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              B-18, Nirmala Palace Hostel, Patel Nagar, Bhopal, MP, 462022
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0421 032 9871 </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: sharmautkarsh750.snp@gmail.com </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">Headphones</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Smart Watches</span>
          <span className="text">Home Theatre</span>
          <span className="text">TWS</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">UTstore. is created by Utkarsh750 , a world class E-commerce </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </fotter>
  );
};

export default Footer;
