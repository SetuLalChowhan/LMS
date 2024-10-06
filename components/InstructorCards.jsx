"use client";
import React from "react";
import { instructors } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperNavButton from "./SwiperNavButton";

const InstructorCards = ({ num }) => {
  //InstructorCards
  const cards = instructors.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="w-[312px] h-[362px] rounded-2xl overflow-hidden relative">
        {/* Instructor Image */}
        <Image
          src={item.image}
          alt={`Instructor ${item.name}`}
          width={312}
          height={362}
          className="w-full h-full object-cover"
        />

        {/* Overlay and Text */}
        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white">
            <h3 className="text-[18px] font-semibold">{item.name}</h3>
            <p className="text-[14px] mt-1">{item.expert}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={num} custom_arrow={<SwiperNavButton />} />;
};

export default InstructorCards;
