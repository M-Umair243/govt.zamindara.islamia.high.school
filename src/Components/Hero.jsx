import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

const Hero = ({ title, disc, HeroImg, path,Name }) => {
  return (
    <div className="Hero_Wrapper">
      <div className="bg_image">
        <img src={HeroImg} alt="" />
      </div>

      <div className="bg_dark"></div>
      <div className="Hero_text">
        <h1 className="Hero_heading">{title}</h1>
        <p className="Hero_about">{disc}</p>
        <NavLink to={path} className="path">
         {Name}
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
