import React, { useState } from "react";
import "./Gallery.css";
import { IoMdClose } from "react-icons/io";

import Hero from "../Components/Hero";
import GalleryImg from "../assets/Hero_Section/img_3.jpg";
import Img_01 from "../assets/Gallery/ALi_Img_01.jpg";
import Img_02 from "../assets/Gallery/Prize_01.jpg";
import Img_03 from "../assets/Gallery/Techers_01.jpg";


import Img_1 from "../assets/Gallery/Img_1.jpg";
import Img_2 from "../assets/Gallery/Img_2.jpg";
import Img_3 from "../assets/Gallery/Img_20.jpg";
import Img_4 from "../assets/Gallery/Img_4.jpg";
import Img_5 from "../assets/Gallery/Img_5.jpg";
import Img_6 from "../assets/Gallery/Img_6.jpg";
import Img_7 from "../assets/Gallery/Img_7.jpg";
import Img_8 from "../assets/Gallery/Img_8.jpg";
import Img_9 from "../assets/Gallery/Img_9.jpg";
import Img_10 from "../assets/Gallery/Img_10.jpg";
import Img_11 from "../assets/Gallery/Img_11.jpg";
import Img_12 from "../assets/Gallery/Img_12.jpg";
import Img_13 from "../assets/Gallery/Img_19.jpg";
import Img_14 from "../assets/Gallery/Img_14.jpg";
import Img_15 from "../assets/Gallery/Img_15.jpg";

function Gallery() {
  const GalleryData = [
    {
      id: 1,
      imgScr: Img_01,
    },
    {
      id: 1,
      imgScr: Img_02,
    },
    {
      id: 1,
      imgScr: Img_03,
    },
    {
      id: 1,
      imgScr: Img_1,
    },
    {
      id: 2,
      imgScr: Img_2,
    },
    {
      id: 3,
      imgScr: Img_3,
    },
    {
      id: 4,
      imgScr: Img_4,
    },
    {
      id: 5,
      imgScr: Img_5,
    },
    {
      id: 6,
      imgScr: Img_6,
    },
    {
      id: 7,
      imgScr: Img_7,
    },
    {
      id: 8,
      imgScr: Img_8,
    },
    {
      id: 9,
      imgScr: Img_9,
    },
    {
      id: 10,
      imgScr: Img_10,
    },
    {
      id: 11,
      imgScr: Img_11,
    },
    {
      id: 12,
      imgScr: Img_12,
    },
    {
      id: 13,
      imgScr: Img_13,
    },
    {
      id: 14,
      imgScr: Img_14,
    },
    {
      id: 15,
      imgScr: Img_15,
    },

  ];
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const getImg = (imgScr) => {
    setTempImgSrc(imgScr);
    setModal(true)
  };
  return (
    <div className="Gallery_wrapper">
      <Hero
        title="𝙶𝚘𝚟𝚝 𝚉𝚊𝚖𝚒𝚗𝚍𝚊𝚛𝚊 𝙸𝚜𝚕𝚊𝚖𝚒𝚊 𝙷𝚒𝚐𝚑 𝚂𝚌𝚑𝚘𝚘𝚕"
        disc="Gallery Page"
        HeroImg={GalleryImg}
        path="/"
        Name="Home"
      />
      <div className="Gallery_content">
        <div className={modal?"modal open":"modal"}>
          <img src={tempImgSrc}  />
          <IoMdClose onClick={()=> setModal(false)}/>

        </div>
        <center>
          <h1 className="Gallery_Heading">Image Gallery</h1>
        </center>
        <div className="Gallery_Images">
          {GalleryData.map((items, index) => (
            <div
              key={index}
              className="Images"
              onClick={() => getImg(items.imgScr)}
            >
              <img src={items.imgScr} alt="Images" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
