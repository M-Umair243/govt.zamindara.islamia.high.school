import React from "react";
import "./Contact.css";
import Hero from "../Components/Hero";
import ContactImg from "../assets/Hero_Section/Image_01.jpg";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

function Contact() {
  return (
    <>
      <Hero
        title="𝙶𝚘𝚟𝚝 𝚉𝚊𝚖𝚒𝚗𝚍𝚊𝚛𝚊 𝙸𝚜𝚕𝚊𝚖𝚒𝚊 𝙷𝚒𝚐𝚑 𝚂𝚌𝚑𝚘𝚘𝚕"
        disc="Contact Us Page"
        HeroImg={ContactImg}
        path="/"
        Name="Home"
      />
      <h1 className="contact_heading">Lets Connect with us</h1>
      <div className="Contact_wrapper">
        <div className="Info_sec">
          <h1>Contact us</h1>
          <p>
            We Are Ready for Help You. Our School Have Best Teachers. if You
            Need Any Type Help So Just Fill this Quick Query form and We Can
            Solve Your Queries regarding Our School.
          </p>
          <div className="Form_Links">
            <div className="Form_Links_icon">
              <FaFacebookF />
            </div>
            <div className="Form_Links_icon">
              <MdOutlineEmail />
            </div>
            <div className="Form_Links_icon">
              <FaWhatsapp />
            </div>
            <div className="Form_Links_icon">
              <LuTwitter />
            </div>
          </div>
        </div>
        <div className="Form_sec">
          <form className="form">
            <div className="row">
              <input type="text" placeholder="Enter Name" />
            </div>
            <div className="row">
              <input type="email" placeholder="Email" />
            </div>
            <div className="row">
              <input type="number" placeholder="Number" />
            </div>
            <div className="row">
              <textarea className="inbox" rows={5}></textarea>
            </div>
          </form>
          <button type="submit" className="Submit_btn">
            Send Here!
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
