import React, { useState } from "react";
import "./navbartop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavbarTop = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbartop-fixed">
      <div className="navbartop">
        <div className="navbartop-logo">
          <h1><span>A</span>NIEL</h1>
        </div>
        <div className="navbar-toggle">
          <div className="navbar-menu">
            {toggleMenu ? (
              <FontAwesomeIcon
                icon={faXmark}
                color="white"
                size="2x"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                color="white"
                size="2x"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="navbartop-menu-fixed">
                <div className="navbartop-menu">
                  <div className="navbartop-menu-logo">
                    <h1>ANIEL</h1>
                  </div>
                  <div className="navbartop-menu-links">
                    <Link to={"/"}>
                      <a>
                        <FontAwesomeIcon icon={faHome} />
                        &nbsp;&nbsp; Home
                      </a>
                    </Link>
                    <Link to={"/about"}>
                      <a>
                        <FontAwesomeIcon icon={faUser} />
                        &nbsp;&nbsp; About
                      </a>
                    </Link>
                    <Link to={"/projects"}>
                      <a>
                        <FontAwesomeIcon icon={faBriefcase} />
                        &nbsp;&nbsp; Projects
                      </a>
                    </Link>
                    <Link to={"/contact"}>
                      <a>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp;&nbsp; Contact
                      </a>
                    </Link>
                  </div>
                  <button>Download CV</button>
                  <div className="navbartop-menu-footer">
                    <p>&copy; 2023 ANIEL</p>
                    <p>Created by: RM.Aniel</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
