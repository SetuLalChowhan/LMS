"use client"; // Ensure this line is present for Next.js

import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperNavButton from "./SwiperNavButton";

const Slide = ({ cards,tailwindValue ,num,custom_arrow}) => {

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "000",
        "--swiper-navigation-size": "20px",
      }}
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1400: {
          slidesPerView: num,
          spaceBetween: 0,
        },
      }}
      navigation={false}
      modules={[Autoplay,  Navigation]}
      className={tailwindValue}
    >
      {cards}
      {custom_arrow}
     
    </Swiper>
  );
};

export default Slide;
