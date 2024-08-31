import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

import { MdOutlineMailOutline } from "react-icons/md";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiArrowDownDoubleFill } from "react-icons/ri";
const iconList = [
  <FaFacebookF />,
  <IoLogoWhatsapp />,
  <FaInstagram />,
  <MdOutlineMailOutline />,
];
import "./SocialIcons.css";
const SocialIcons = () => {
  const [isIcon, setIsIcon] = useState(true);
  const toggleHandler = () => {
    setIsIcon(!isIcon);
  };
  return (
    <React.Fragment>
      <div className="Social_Icons">
        <div className="toggleBtn">
          <span className="toggle_icon" onClick={toggleHandler}>
            {isIcon ? <RiArrowDownDoubleFill /> : <RiArrowUpDoubleLine />}
          </span>
        </div>
        {!isIcon && (
          <>
            {iconList.map((icons, index) => (
              <a className="icon" key={index} href="/">
                {icons}
              </a>
            ))}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default SocialIcons;
