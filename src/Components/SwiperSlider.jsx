import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Swiper.css";
import Img_1 from "../assets/Hero_Section/img_1.jpg";
import Img_2 from "../assets/Hero_Section/img_2.jpg";
import Img_3 from "../assets/Hero_Section/img_3.jpg";
import Img_4 from "../assets/Hero_Section/img_4.jpg";
import Img_5 from "../assets/Hero_Section/img_5.jpg";
import Img_6 from "../assets/Hero_Section/img_6.jpg";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const SwiperSlider = () => {
  const ImgList = [Img_1, Img_2, Img_3, Img_4, Img_5, Img_6];

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      autoplay={{delay: 1000}}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination,Autoplay]}
      className="mySwiper"
    >
      {ImgList.map((items, index) => (
        <SwiperSlide>
          <img key={index} src={items} alt="images" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
