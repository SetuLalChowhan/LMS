"use client";
import React from "react";
import { courses, instructors, reviews } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonIcon } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import SwiperNavButton from "./SwiperNavButton";

const CourseCard = ({ value }) => {
  const courseCategory = courses.filter(
    (course) => course.category == value.toLowerCase()
  );

  const cards = courseCategory.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        className={`w-[312px] h-[430px]  border border-gray-300 shadow-2xl  rounded-md flex flex-col gap-2 items-start px-4 py-4 `}
      >
        <Image
          className="w-[312px] h-[224px] object-cover"
          src={item.image}
          width={312}
          height={224}
          priority
          alt="image"
        />

        <div className=" h-[100px]">
          <h1 className="text-[17px] font-[700]  ">{item.title}</h1>
          <p className="text-[16px] font-[400] text-[#6F6F73] mt-1 text-justify   ">
            {item.details}
          </p>
        </div>
        <Link href={`/course/${item.id}`}>
          <ButtonIcon
            name="See Details"
            icon={<FaLongArrowAltRight />}
            value={
              "  mt-3  text-[15px] text-[15px] border-2 bg-blue text-white rounded-md px-2 py-2 hover:opacity-75 duration-200 transition-all"
            }
          />
        </Link>
      </div>
    </SwiperSlide>
  ));

  return (
    <Slide
      cards={cards}
      num={4}
      custom_arrow={courseCategory.length < 5 ? "" : <SwiperNavButton />}
    />
  );
};

export default CourseCard;
