"use client";
import React from "react";
import { courses, instructors, reviews } from "@/utilities/file";
import Slide from "./Slide";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonIcon } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";

const CourseCard = ({ value }) => {
  const courseCategory = courses.filter(
    (course) => course.category == value.toLowerCase()
  );

  const cards = courseCategory.map((item, index) => (
    <SwiperSlide key={index}>
      <div
        className={`w-[312px] h-[430px]  border border-gray-300   rounded-md flex flex-col gap-2 items-start `}
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
          <h1 className="text-[17px] font-[700]  ml-3">{item.title}</h1>
          <p className="text-[16px] font-[400] text-[#6F6F73] mt-1 text-justify   px-3 ">
            {item.details}
          </p>
        </div>
        <Link href={`/course/${item.id}`}>
          <ButtonIcon
            name="See Details"
            icon={<FaLongArrowAltRight />}
            value={
              "text-blue mt-7 ml-3 x-4 flex-center gap-2 font-semibold text-[15px]"
            }
          />
        </Link>
      </div>
    </SwiperSlide>
  ));

  return <Slide cards={cards} num={4} />;
};

export default CourseCard;
