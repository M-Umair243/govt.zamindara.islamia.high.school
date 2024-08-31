import React from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import "./SmNavbar.css";
const SmNavbar = ({hideHandler}) => {
  return (
    <div className="Sm_Navbar">
      <ul className="sm_list">
        <li className="Sm_li">
          <NavLink className={(e) => (e.isActive ? "red" : "")} to="/">
            Home
          </NavLink>
        </li>
        <li className="Sm_li">
          <NavLink className={(e) => (e.isActive ? "red" : "")} to="/about">
            About Us
          </NavLink>
        </li>
        <li className="Sm_li">
          <NavLink
            className={(e) => (e.isActive ? "red" : "")}
            to="/instructors"
          >
            Team
          </NavLink>
        </li>
        <li className="Sm_li">
          <NavLink className={(e) => (e.isActive ? "red" : "")} to="/gallery">
            Gallery
          </NavLink>
        </li>
        <li className="Sm_li">
          <NavLink className={(e) => (e.isActive ? "red" : "")} to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
     <span onClick={hideHandler} className="closeIcon"><RxCross2/></span>
    </div>
  );
};

export default SmNavbar;
