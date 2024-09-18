import React from "react";
import { ButtonIcon } from "./Button";

import { MdArrowForward } from "react-icons/md";

import Image from "next/image";
import img1 from "../public/images/CoursesImage/img1.jpg";
import img2 from "../public/images/CoursesImage/img2.jpg";
import img3 from "../public/images/CoursesImage/img3.jpg";

const CourseHeroSection = () => {
  return (
    <section className="container   h-[440px] flex sm:flex-row flex-col lg:gap-28 md:gap-16    md:mt-36 mt-20">
      {/* Left side */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col">
          <div className="lg:text-[57px] text-[40px] font-[700]">
            Explore <span className="text-blue">Our Courses And Start</span>
            <span className="border-b-2 border-[#FFCC33]"> Learning</span>
          </div>
          <p className=" text-justify lg:text-[17px] font-[-200] leading-8 text-[#6F6F73] mt-3">
            Explore our comprehensive catalog of courses designed to help you
            achieve your personal and professional goals. We have the perfect
            course for you. Dive in and start learning today!
          </p>
          <div className="flex lg:flex-row sm:flex-col flex-col items-center md:items-start mt-10 gap-8">
            <div>
              <ButtonIcon
                name={"Explore now"}
                icon={<MdArrowForward size={30} />}
                value={"button-custom2"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Right side-Image Section */}
      <div className=" hidden md:inline-block lg:w-[648px] flex-1 ">
        <div className=" lg:w-[648px] h-[437px] lg:flex-center lg:flex-row flex-col  gap-3  rounded-bl-[4px]">
          <div className="flex-col gap-3  hidden  lg:flex">
            <Image
              className=" rounded-tl-[96.5px] ml-7 lg:ml-0"
              src={img1}
              width={312}
              height={148}
              alt="image"
            />
            <Image
              className="ml-7 lg:ml-0"
              src={img2}
              width={312}
              height={40}
              alt="image"
            />
          </div>
          <div className=" flex-center ">
            <Image
              className="  lg:rounded-br-[156px] lg:ml-0 "
              src={img3}
              alt="image"
              width={200}
              height={314}
            />
          </div>
        </div>
        <div className="hidden lg:flex border-2 lg:-mt-[420px] lg:ml-40 w-[312px] h-[400px] top-[44px] left-[784px] gap-0 rounded-tl-[80px] rounded-tr-[80px]  rounded-br-[80px] rounded-bl-[80px] bg-[#B0CAF1] bg-opacity-50"></div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
