import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";


const Mobile = () => {

    const [mobile, setMobile] = useState('mobile hide');

    const openMobile = () => {
      if (mobile === 'mobile') {
        setMobile('mobile hide')
      } else {
        setMobile('mobile')
      }
    }
    return(
        <div className="mobile-menu">
          <GiHamburgerMenu className="burger-icon" onClick={openMobile} />
          <ul className={mobile}>
            <li><Link to={"/"}>Նկարահանում</Link></li>
            <li><Link to={"/"}>Ապրանք</Link></li>
            <li><Link to={"/"}>Գործ&nbsp;կա</Link></li>
            <li><Link to={"/"}>Ֆորում</Link></li>
          </ul>
        </div>
    )
}

export default Mobile
