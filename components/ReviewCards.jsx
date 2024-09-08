"use client"; // Ensure this line is present for Next.js

import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { reviews } from "@/utilities/file";
import Slide from "./Slide";

const ReviewCards = () => {
  //Review Card 
  const cards = reviews.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="lg:w-[424px] lg:h-[280px] h-[320px] bg-[#FFFFFF] inline-block">
        <div className="flex justify-end mr-3 mt-3">
          <Image
            src={item.image}
            width={60}
            height={60}
            className="rounded-full"
            alt={item.name}
          />
        </div>
        <svg
          className="w-6 ml-8 text-blue dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <div className="lg:h-[96px] text-[16px] font-[400] text-justify px-8">
          {item.review}
        </div>
        <div className="lg:w-[222px] mt-8 px-8">
          <p className="text-[14px] font-[500]">{item.name}</p>
          <p className="text-[11px] font-[400]">{item.department}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={2} />;
};

export default ReviewCards;
