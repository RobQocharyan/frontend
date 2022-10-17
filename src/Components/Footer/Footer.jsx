import "./Footer.scss"


import React from 'react'
import { icons } from './../../Pages/Registartion/icons';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footerFirst">
          <div className="footerImg">
            <img src={require("../../img/logo.png")} alt="" />
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          <h2>Հետևեք մեզ</h2>
          <div className="icons">
            <img src={require("../../img/icons/instagram.png")} alt="" className="instagram" />
            {icons.facebookFooter}
            <img src={require("../../img/icons/mail.png")} alt="" className="mail" />
          </div>
        </div>
        <div className="footerSecond">
            <h3>Հետադարձ կապ</h3>
            <ul>
              <li><Link to={"/"}>Հետադարձ կապ</Link></li>
              <li><Link to={"/"}> Մեր մասին</Link></li>
              <li><Link to={"/"}>Գովազդ </Link></li>
              <li><Link to={"/"}>Դիմում</Link> | <Link to={"/"}>Բողոք</Link> | <Link to={"/"}>Առաջարկ</Link></li>
              <li><Link to={"/"}>Օգնություն </Link></li>
            </ul>
        </div>
        <div className="footerThre">
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
  )
}
