import React from "react";
import Footer_Logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer_wrapper">
      <div className="footer_logo">
        <img className="footer_logo" src={Footer_Logo} alt="Footer Logo" />
      </div>
      <div className="footer_text">
        <h1 className="footer_heading">
          Schools provide students with the knowledge and skills needed to
          succeed in various subjects like math, science, language arts, and
          social studies. This academic foundation is essential for further
          education and career opportunities.
        </h1>
      </div>
      <ul className="footer_links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/instructors">Team</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div className="Footer_end">
        <span>(c) 2024 CopyRight by M.Umair </span>
      </div>
    </div>
  );
};

export default Footer;
