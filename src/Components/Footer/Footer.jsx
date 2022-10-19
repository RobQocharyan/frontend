import "./Footer.scss";

import React from 'react'
import { icons as footIcons } from "./icons";
import { icons } from './../../Pages/Registartion/icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="container ">
        <div className="row">
        <div className="footerFirst col-md-4 col-sm-4">
          <div className="footerImg">
            <img src={require("../../img/logo.png")} alt="" />
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <h2>Հետևեք մեզ</h2>
          <div className="icons">
            <div>{footIcons.footerInstagram}</div>
            <div>{footIcons.footerFacebook}</div>
            <div>{footIcons.footerMail}</div>            
          </div>
        </div>
        <div className="footerSecond col- col-md-4 col-sm-4">
            <h3>Հետադարձ կապ</h3>
            <ul>
              <li><Link to={"/"}>Հետադարձ կապ</Link></li>
              <li><Link to={"/"}> Մեր մասին</Link></li>
              <li><Link to={"/"}>Գովազդ </Link></li>
              <li><Link to={"/"}>Դիմում</Link> | <Link to={"/"}>Բողոք</Link> | <Link to={"/"}>Առաջարկ</Link></li>
              <li><Link to={"/"}>Օգնություն </Link></li>
            </ul>
        </div>
        <div className="footerThree col-md-4 col-sm-4">
          <h3>Հետադարձ կապ</h3>
          <div>
            {icons.phone}
            <span>+374(98)99 99 99</span>
          </div>
          <div>
            {icons.mailFooter}
            <span>Kadr.photo@gmail.com</span>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
