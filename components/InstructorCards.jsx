"use client";
import React from "react";
import { instructors } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import SwiperNavButton from "./SwiperNavButton";

const InstructorCards = ({ num }) => {
  const cards = instructors.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="w-full  h-[362px]  lg:max-w-[312px] rounded-2xl overflow-hidden relative">
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
            <h3 className="text-base sm:text-lg font-semibold">{item.name}</h3>
            <p className="text-sm sm:text-base mt-1">{item.expert}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={num} custom_arrow={<SwiperNavButton />} />;
};

export default InstructorCards;
