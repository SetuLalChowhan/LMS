"use client"; // Ensure this line is present for Next.js

import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slide = ({ cards,tailwindValue ,num}) => {

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
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: num,
          spaceBetween: 50,
        },
      }}
      navigation={true}
      modules={[Autoplay,  Navigation]}
      className={tailwindValue}
    >
      {cards}
    </Swiper>
  );
};

export default Slide;
