import React from "react";
import Hero from "../Components/Hero";
import AboutImg from "../assets/About/about.jpg";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { SiInstructure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlinePlusSm } from "react-icons/hi";

const BannerItems = [
  {
    Text: "Safety",
    Icon: <MdOutlineHealthAndSafety />,
    Number: 100,
    Plus: <HiOutlinePlusSm />,
  },
  {
    Text: "Student",
    Icon: <PiStudent />,
    Number: 1400,
    Plus: <HiOutlinePlusSm />,
  },
  {
    Text: "Teachers",
    Icon: <SiInstructure />,
    Number: 80,
    Plus: <HiOutlinePlusSm />,
  },
  {
    Text: "Awards",
    Icon: <LiaAwardSolid />,
    Number: 120,
    Plus: <HiOutlinePlusSm />,
  },
];

import "./About.css";
function About() {
  return (
    <div className="About_wrapper">
      <Hero
        title="𝙶𝚘𝚟𝚝 𝚉𝚊𝚖𝚒𝚗𝚍𝚊𝚛𝚊 𝙸𝚜𝚕𝚊𝚖𝚒𝚊 𝙷𝚒𝚐𝚑 𝚂𝚌𝚑𝚘𝚘𝚕"
        disc="About Us"
        HeroImg={AboutImg}
        path="/"
        Name="Home"
      />
      <div className="about_section">
        <div className="card">
          <div className="card_bg">
            <div className="bg"></div>
          </div>
          <div className="card_text">
            <p>
              Schools also have various facilities such as classrooms,
              libraries, laboratories, sports fields, and auditoriums to support
              learning and extracurricular activities. Teachers, who are trained
              educators, guide students in their learning process, while school
              administrators manage the institution's operations. Schools play a
              crucial role in personal and social development, helping students
              acquire the skills and knowledge needed for future careers and
              civic life.
            </p>
            <br />
            <p>
              A school is an institution where students receive education and
              gain knowledge across various subjects, typically including
              language, mathematics, science, history, and the arts. Schools are
              usually divided into different levels based on age and educational
              stages
            </p>
            <span className="about_btn">About Me</span>
          </div>
        </div>
      </div>
      <div className="about_section_2">
        <div className="bg_overlay"></div>
        <div className="overlay_text">
          {BannerItems.map((items, index) => (
            <div key={index} className="banner_text_2">
              <span className="icon">{items.Icon}</span>
              <p className="name">{items.Text}</p>
              <div className="number">
                <p>{items.Number} +</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
