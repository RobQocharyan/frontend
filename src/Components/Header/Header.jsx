
import "./Header.scss"
import React from 'react'
import { Link,useNavigate } from 'react-router-dom';


export const Header = () => {

  const login = ()=>{
    navigate("/frontend/login")
}

const navigate = useNavigate()

const registration =()=>{
  navigate("/frontend/registration")

}


  return (
    <div className="header">
      <div className="headerFirst">
          <img src={require("../../img/logo.png")} alt="" />
      </div>
      <div className="headerSecond">
        <nav>
          <ul>
            <li><Link to={"/"}>Նկարահանում</Link></li>
            <li><Link to={"/"}>Ապրանք</Link></li>
            <li><Link to={"/"}>Գործ&nbsp;կա</Link></li>
            <li><Link to={"/"}>Ֆորում</Link></li>
            <li><Link to={"/"}>Օգտատեր</Link></li>
          </ul>
        </nav>
      </div>
      <div className="headerThree">
        <i className="fa fa-search icon"></i>
        <input type="text" name="search" placeholder="Որոնում" />
        <span onClick={login}>Մուտք</span>
        <button onClick={registration}>Գրանցում</button>
      </div>
    </div>
  )
}

