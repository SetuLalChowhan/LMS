import React from "react";
import { Button, ButtonIcon } from "./Button";
import { IoBookOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { IoCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";
import img1 from "../public/images/img-1.jpg";
import img2 from "../public/images/img-2.jpg";
import img3 from "../public/images/img-3.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container flex lg:flex-row flex-col gap-28 lg:mt-36 mt-20">
      {/* Left side */}
      <div className="lg:w-[536px] lg:h-[590px]  flex flex-col  ">
        <div className="lg:text-[18px] font-[600] text-left text-blue">
          Learn with EduHub
        </div>
        <div className=" lg:w-[501px] lg:h-[373px]">
          <div className="lg:text-[57px] text-[40px] font-[700]">
            Transform <span className="text-blue">Your Future,</span>
            <span className="border-b-2 border-[#FFCC33]  "> Master </span>
            <span className="text-blue">New Skills</span> Today
          </div>
          <p className=" lg:w-[501px]  lg:text-[17px] font-[-200] leading-8 text-[#6F6F73] mt-3">
            Welcome to EduHub, your gateway to expert-led courses. Learn at your
            own pace and unlock your potential with EduHub today.
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:items-start mt-10 gap-8">
            <Link href={"/courses"}>
              <ButtonIcon
                name={"Browse Courses"}
                icon={<IoBookOutline size={30} />}
                value={"button-custom2"}
                linkValue={"/courses"}
              />
            </Link>
            <div className="text-blue">
              <ButtonIcon
                value={"button-custom3"}
                name={"Enroll Now"}
                icon={<MdArrowForward size={30} />}
              />
            </div>
          </div>
          <div className="gap-3 mt-10 flex lg:flex-row   lg:items-start">
            <div className=" flex-center gap-2 ">
              <div className="border-2 lg:w-6 lg:h-6  bg-[#3687FC] rounded-full flex-center">
                <IoCheckmarkOutline color="white" />
              </div>
              <p>Expert instructor</p>
            </div>
            <div className="flex-center gap-2 ">
              <div className="border-2 lg:w-6 lg:h-6   bg-[#3687FC] rounded-full flex-center">
                <IoCheckmarkOutline color="white" />
              </div>
              <p>quality videos</p>
            </div>
            <div className=" flex-center gap-2 ">
              <div className="border-2 lg:w-6 lg:h-6  bg-[#3687FC] rounded-full flex-center">
                <IoCheckmarkOutline color="white" />
              </div>
              <p>24/7 support</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right side-Image Section */}
      <div className=" hidden lg:inline-block lg:w-[648px] h-[502px] mt-8  ">
        <div className=" lg:w-[648px] h-[437px] lg:flex-center lg:flex-row flex-col  gap-3  rounded-bl-[4px] ">
          <div className=" md:flex-center">
            <Image
              className="lg:w-auto lg:h-auto lg:rounded-tl-[156px] lg:ml-0"
              src={img1}
              alt="image"
              width={312}
              height={437}
              priority 
            />
          </div>
          <div className="flex-col gap-3 hidden lg:flex">
            <Image
              className="ml-7 lg:ml-0 lg:w-auto lg:h-auto"
              src={img3}
              width={312}
              height={500}
              alt="image"
            />
            <Image
              className="rounded-br-[96.5px] ml-7 lg:ml-0 lg:w-auto lg:h-auto"
              src={img2}
              width={312}
              height={500}
              alt="image"
            />
          </div>
        </div>
        <div className="hidden lg:flex border-2 lg:-mt-[470px] lg:ml-28 w-[424px] h-[502px] top-[44px] left-[784px] gap-0 rounded-tl-[80px] rounded-tr-[80px]  rounded-br-[80px] rounded-bl-[80px] bg-[#B0CAF1] bg-opacity-50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
