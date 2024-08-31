import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";

import { NavLink } from "react-router-dom";
import SmNavbar from "./SmNavbar";
function Navbar({isShow,showHandler,hideHandler}) {
  // const [isShow, setIsShow] = useState(true);
  // const showHandler = () => {
  //   setIsShow(!isShow);
  // };
  return (
    <>
      <div className="Navbar">
        <div className="navbar_content">
          <NavLink className="logo_content" to="/">
            <img className="navBar_logo_image" src={Logo} alt="logo" />
            <span className="logo_text">𝔾ℤ𝕀ℍ𝕊</span>
          </NavLink>
          <div className="links">
            <ul className="links_content">
              <li className="item">
                <NavLink
                  className={(e) => {
                    return e.isActive ? "red" : "";
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={(e) => {
                    return e.isActive ? "red" : "";
                  }}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={(e) => {
                    return e.isActive ? "red" : "";
                  }}
                  to="/instructors"
                >
                  Team
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={(e) => {
                    return e.isActive ? "red" : "";
                  }}
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  className={(e) => {
                    return e.isActive ? "red" : "";
                  }}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="Burger_menu">
          <span onClick={showHandler}>
            <FaBars />
          </span>
        </div>
        </div>
        
      </div>
      {!isShow && <SmNavbar hideHandler={hideHandler}/>}
    </>
  );
}

export default Navbar;
