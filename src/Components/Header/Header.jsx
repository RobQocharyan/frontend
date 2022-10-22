
import "./Header.scss";
import { Link } from 'react-router-dom';

import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';


export const Header = () => {
  const [mobile, setMobile] = useState('mobile hide');
  const openMobile = () => {
    if (mobile === 'mobile') {
      setMobile('mobile hide')
    } else {
      setMobile('mobile')
    }
  }
  

  return (
    <header>
    <div className="header navbar container-fluid ">
      <div className="logo">
        <Link to='/frontend'>
          <img src={require("../../img/logo.png")} alt="" className="navbar-brand" />          
        </Link>
      </div>
      <div className="menu-btns d-flex">
        <div className="menu">
          <ul>
            <li><Link to={"/"}>Նկարահանում</Link></li>
            <li><Link to={"/"}>Ապրանք</Link></li>
            <li><Link to={"/"}>Գործ&nbsp;կա</Link></li>
            <li><Link to={"/"}>Ֆորում</Link></li>
          </ul>
        </div>
        <div className="btn-section">
          <div className="search-section">
            <i className="fa fa-search icon"></i>
            <input type="text" name="search" placeholder="Որոնում" />
          </div>
          <div className="round"></div>
          <div className="header-buttons">
            <Link to="/frontend/login" className="log-btn">Մուտք</Link>
            <Link to="/frontend/registration" className="registr-btn">Գրանցում</Link>
          </div>          
        </div>
        <div className="mobile-menu">
          <GiHamburgerMenu className="burger-icon" onClick={openMobile} />
          <ul className={mobile}>
            <li><Link to={"/"}>Նկարահանում</Link></li>
            <li><Link to={"/"}>Ապրանք</Link></li>
            <li><Link to={"/"}>Գործ&nbsp;կա</Link></li>
            <li><Link to={"/"}>Ֆորում</Link></li>
          </ul>
        </div>
        
      </div>
    </div>
    </header>
  )
}
