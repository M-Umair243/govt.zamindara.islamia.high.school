import React from "react";
import Img_1 from "../assets/Hero_Section/img_1.jpg";
import Certificate from "../assets/Hero_Section/certificate.jpg";
import Founder from "../assets/logo.jpg";
import { GiNotebook } from "react-icons/gi";
import { FcServices } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import "./Home.css";
import Hero from "../Components/Hero";

function Home() {
  return (
    <React.Fragment>
      <Hero
        title="𝙶𝚘𝚟𝚝 𝚉𝚊𝚖𝚒𝚗𝚍𝚊𝚛𝚊 𝙸𝚜𝚕𝚊𝚖𝚒𝚊 𝙷𝚒𝚐𝚑 𝚂𝚌𝚑𝚘𝚘𝚕"
        disc="𝑻𝒉𝒆 𝒎𝒂𝒊𝒏 𝒓𝒐𝒍𝒆 𝒐𝒇 𝒐𝒖𝒓 𝒊𝒏𝒔𝒕𝒊𝒕𝒖𝒕𝒆 𝒇𝒐𝒓 𝒔𝒕𝒖𝒅𝒆𝒏𝒕𝒔 𝒊𝒔 𝒕𝒐 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒕𝒉𝒆𝒎 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆, 𝒔𝒌𝒊𝒍𝒍𝒔, 𝒂𝒏𝒅 𝒗𝒂𝒍𝒖𝒆𝒔 𝒏𝒆𝒄𝒆𝒔𝒔𝒂𝒓𝒚 𝒇𝒐𝒓 𝒕𝒉𝒆𝒊𝒓 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍 𝒂𝒏𝒅 𝑷𝒓𝒐𝒇𝒆𝒔𝒔𝒊𝒐𝒏𝒂𝒍 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕."
        HeroImg={Img_1}
      />
      <div className="Hero_section_2">
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">Latest News</span>
            </div>
            <ul className="box_body ">
              <li className="box_news">
                Students who prove their Academic Activities
              </li>
            </ul>
          </div>
        </div>
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">Upcoming Events</span>
            </div>
            <ul className="box_body">
              <li className="list">
                <div className="date">
                  <span>29</span>
                  <span>Aug</span>
                </div>
                Preparation of Monthly Test
              </li>
              <li className="list">
                <div className="date">
                  <span>1</span>
                  <span>Sep</span>
                </div>
                Result of Monthly Test
              </li>
              <li className="list">
                <div className="date">
                  <span>2</span>
                  <span>Oct</span>
                </div>
                Preparation of First Term Exam
              </li>
              <li className="list">
                <div className="date">
                  <span>29</span>
                  <span>Oct</span>
                </div>
                Preparation of Mid Term Exam
              </li>
              <li className="list">
                <div className="date">
                  <span>1</span>
                  <span>Nov</span>
                </div>
                Final Test Series 2024
              </li>
            </ul>
          </div>
        </div>
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">Notice Board</span>
            </div>
            <ul className="box_body">
              <li className="Notice_li">
                <span className="notice_icon">
                  <GiNotebook />
                </span>
                <span>Annual Speech Competition </span>
              </li>
              <li className="Notice_li">
                <span className="notice_icon">
                  <GiNotebook />
                </span>
                <span>Students who Participate in Sports </span>
              </li>
              <li className="Notice_li">
                <span className="notice_icon">
                  <GiNotebook />
                </span>
                <span>Quiz Competition </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">Usefull Information</span>
            </div>
            <ul className="box_body info">
              <li className="Notice_li info_li">
                <span className="notice_icon">
                  <FcServices />
                </span>
                <span>Online Services </span>
              </li>
              <li className="Notice_li info_li">
                <span className="notice_icon">
                  <FcBusinessman />
                </span>
                <span>Online Results </span>
              </li>
              <li className="Notice_li info_li">
                <span className="notice_icon">
                  <FcOvertime />
                </span>
                <span>Exam Time Table </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">Founder of Institute</span>
            </div>
            <ul className="box_body">
              <li className="Founder_li">
                <img src={Founder} alt="mehar baba abadan" />
                <div className="Founder_text">
                  <span className="Name">Mehar Baba Abadan</span>
                  <span className="school_name">Founder of School</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_wrapper">
          <div className="box">
            <div className="header">
              <span className="header_text">My School Certificate</span>
            </div>
            <ul className="box_body">
              <li className="Certificate_li">
                <div className="bg"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
