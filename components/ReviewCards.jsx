"use client"; // Ensure this line is present for Next.js

import React from "react";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { reviews } from "@/utilities/file";
import Slide from "./Slide";
import SwiperNavButton from "./SwiperNavButton";

const ReviewCards = () => {
  //Review Card
  const cards = reviews.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="w-full lg:w-[424px] h-auto lg:h-[280px] bg-white shadow-lg rounded-lg px-6 py-8 flex flex-col gap-4 justify-between relative">
        {/* Profile Image */}
        <div className="absolute top-0 right-0 transform translate-x-[-50%]">
          <Image
            src={item.image}
            width={60}
            height={60}
            className="rounded-full border-2 border-gray-300"
            alt={item.name}
          />
        </div>

        {/* Quote Icon */}
        <svg
          className="w-6 text-blue"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18V10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983V18H0Z"
            fill="currentColor"
          />
        </svg>

        {/* Review Content */}
        <p className="lg:h-[96px] text-[14px] lg:text-[16px] font-[400] text-justify text-gray-700 leading-relaxed">
          {item.review}
        </p>

        {/* Reviewer Info */}
        <div className="mt-4">
          <p className="text-[14px] font-[500] text-gray-900">{item.name}</p>
          <p className="text-[12px] font-[400] text-gray-500">{item.department}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={2} custom_arrow={<SwiperNavButton />} />;
};

export default ReviewCards;
