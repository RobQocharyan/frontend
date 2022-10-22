import "./mobileFooter.scss";
import Accordion from "react-bootstrap/Accordion";
import logo from "../../../img/logo.png";
import instagram from '../../../img/icons/instagram_color.png';
import facebook from '../../../img/icons/facebook_color.png';
import {icons} from '../icons';
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div className="mobile-footer">
      <div className="accordions">
        <Accordion >
          <Accordion.Item eventKey="0">
            <Accordion.Header><p className="accordion-title">Ինֆորմացիա</p></Accordion.Header>
            <Accordion.Body>
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
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><p className="accordion-title">Հետադարձ կապ</p></Accordion.Header>
            <Accordion.Body>
                <div>
                  {icons.footerGmail}
                  <span>Kadr.photo@gmail.com</span>
                </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="follow_US">
        <h2>Հետևեք մեզ՝</h2>
        <div className="icons">
            <div><a href="#"><img src={instagram} alt="intagram" /></a></div>
            <div><a href="#"><img src={facebook} alt="facebook" /></a></div>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <p className="underLogo">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's{" "}
        </p>
      </div>
    </div>
  );
};

export default MobileFooter;
