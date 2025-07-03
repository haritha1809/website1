import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-scroll";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768;
  const [menuOpened, setMenuOpened] = useState(false);
  
  return (
    <div className="header" id="header">
      <img src={Logo} alt="" className="logo" />
      
      {(!menuOpened && mobile) ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px"
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              spy={true}
              smooth={true}
            >
              Home page
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              spy={true}
              smooth={true}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="events"
              spy={true}
              smooth={true}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="membership"
              spy={true}
              smooth={true}
            >
              Membership
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="contact"
              spy={true}
              smooth={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
