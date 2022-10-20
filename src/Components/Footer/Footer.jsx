import "./Footer.scss";
import React from "react";
import { icons } from "./../../Pages/Registartion/icons";
import { Link } from "react-router-dom";
import MobileFooter from "./mobile/mobileFooter";
import instagram from '../../img/icons/instagram_color.png'
import facebook from '../../img/icons/facebook_color.png';
import vector from './image-removebg-preview (1).png'

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container ">
        <div className="row footer">
          <div className="footerFirst col-md-4 col-sm-4">
            <div className="footerImg">
              <img src={require("../../img/logo.png")} alt="" />
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <h2>Հետևեք մեզ</h2>
            <div className="icons">
              <div>
                <a href="#"><img src={instagram} alt="intagram" /></a>                
              </div>
              <div>
                <a href="#"><img src={facebook} alt="facebook" /></a>                
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="footerSecond col-md-6 col-sm-4">
                <h3>Ինֆորմացիա</h3>
                <ul>
                  <li>
                    <Link to={"/"}>Մեր մասին</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Գովազդ</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Դիմում</Link> | <Link to={"/"}>Բողոք</Link> |{" "}
                    <Link to={"/"}>Առաջարկ</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Օգնություն </Link>
                  </li>
                </ul>
              </div>
              <div className="footerThree col-md-6 col-sm-4">
                <h3>Հետադարձ կապ</h3>
                <div>
                  {icons.mailFooter}
                  <span>Kadr.photo@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter/>
      <img src={vector} alt="vector" className='vector' />      
    </footer>
  );
};
