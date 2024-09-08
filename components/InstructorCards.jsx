"use client";
import React from "react";
import { instructors } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

const InstructorCards = ({num}) => {
  //InstructorCards
  const cards = instructors.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        className="w-[312px] h-[362px] rounded-2xl overflow-hidden relative  "
        
      >
        <Image
          src={item.image}
          alt={item.name}
          width={312}
          height={362}
          className=" w-[312px] h-[362px] object-cover"
        />
        <div className="absolute bottom-4 left-4  bg-gradient-to-t  p-2 flex flex-col gap-2 ">
          <h3 className="text-[#FFFFFF] text-[16px] font-[600]">{item.name}</h3>
          <p className="text-[#FFFFFF] text-[14px] font-[400]">{item.expert}</p>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={num} />;
};

export default InstructorCards;
