import "./Header.scss";
import { Link } from 'react-router-dom';
import Mobile from "./mobile";


export const Header = () => {

  return (
    <header className="">
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
        <Mobile />
      </div>
    </div>
    </header>
  )
}
