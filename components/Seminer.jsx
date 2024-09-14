import Link from "next/link";
import React from "react";
import { ButtonIcon } from "./Button";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import img10 from "../public/images/img-10.jpg";
import img11 from "../public/images/img-11.jpg";
import img12 from "../public/images/img-12.jpg";

const Seminer = () => {
  return (
    <section className="container lg:w-[1320px] lg:h-[400px] flex lg:flex-row flex-col gap-20 mt-24">
      {/* Left side */}
      <div className=" lg:w-[535px] lg:h-[352px] flex flex-col  gap-8">
        <h1 className="lg:w-[535px] lg:h-[138px] font-[700] text-[46px] mx-auto text-blue">
          {" "}
          Join Our Free live Seminar
        </h1>
        <p className="lg:w-[535px] lg:h-[120px] text-[17px] font-[400] text-[#6F6F73] text-justify">
          Don't miss our free seminar! Discover the benefits of lifelong
          learning, explore popular courses, and connect with industry experts
          and fellow learners.
        </p>
        <div className="mx-auto lg:mx-0">
          <Link href={"/"}>
            {" "}
            <ButtonIcon
              name={"Reserve Now"}
              value={"button-custom2 w-[200px]"}
              icon={<MdArrowForward size={30} />}
            />{" "}
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className=" hidden w-[647px] h-[359px] lg:mt-6 lg:flex md:flex gap-5 mx-auto ">
        <div className=" h=[400px]">
          <Image
            src={img10}
            alt="image"
            className=" rounded-lg w-[361px] h-[358px] object-cover"
          />
        </div>
        <div className="w-[266px] h-[359px] flex flex-col gap-6">
          <Image src={img11} alt="image" className="rounded-lg h-[167px]" />
          <Image src={img12} alt="image" className="rounded-lg h-[167px]" />
        </div>
      </div>
    </section>
  );
};

export default Seminer;
