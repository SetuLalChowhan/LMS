"use client";
import React from "react";
import { instructors } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const InstructorCards = ({ num }) => {
  //InstructorCards
  const cards = instructors.map((item, index) => (
    <SwiperSlide key={index}>
    <div className="w-[312px] h-[362px] rounded-2xl overflow-hidden relative">
      <Image
        src={item.image}
        alt={item.name}
        width={312}
        height={362}
        className="w-[312px] h-[362px] object-cover"
      />
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className=" p-4 rounded-lg w-full">
          <h3 className="text-white text-[18px] font-semibold leading-tight">
            {item.name}
          </h3>
          <p className="text-white text-[14px] font-normal mt-1">
            {item.expert}
          </p>
        </div>
      </div>
    </div>
  </SwiperSlide>
  
  ));

  return <Slide cards={cards} num={num} />;
};

export default InstructorCards;
