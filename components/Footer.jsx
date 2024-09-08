import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

import Link from "next/link";

const Footer = () => {
  return (
    <section className="  w-full lg:h-[458px] bg-[#0055D2] inline-block text-white mt-24">
      <div className=" container mt-20 lg:flex lg:flex-row flex-col lg:gap-0 gap-4 lg:w-[1233px] lg:h-[284px] md:grid md:grid-cols-2 lg:justify-between">
        {/* stage1 */}
        <div className="w-[329px] h-[284px]">
          <div className=" w-[329px] h-[105px] ">
            <Link href={"/"}>
              <div className="w-[166px] h-[64px]">
                <h1 className=" font-[700] text-[27px] hover:opacity-75 transition-all duration-200">
                  EduHub
                </h1>
              </div>
            </Link>
            <div className=" w-[329px] h-[27px]">
              <p className="text-[18px] font-[500]">
                Empowering Minds, Shaping Futures
              </p>
            </div>
          </div>
          <div className=" mt-4">
            <h1 className=" text-[22px] font-[600]">Subscribe Now</h1>

            <form className="flex flex-col gap-2 mt-3 ">
              <div>
                <div className="flex gap-3 items-center">
                  <div>
                    <MdOutlineEmail size={20} />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your Eamil"
                      className=" outline-none bg-blue font-[400] text-[14px] w-full"
                    />
                  </div>
                </div>
                <div className=" border-b-2 bg-white"></div>
                <button
                  type="submit"
                  className="bg-[#3687FC] px-4 py-3 rounded-sm mt-4 hover:opacity-75 transition-all duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Stage-2 */}
        <div>
          <h1 className="font-[700] text-[27px]">Informations</h1>
          <div className=" flex flex-col gap-6 mt-4">
            <Link
              className="text-[16px] font-[400]  text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              About us{" "}
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Blogs
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Testimonials
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Seminers
            </Link>
          </div>
        </div>
        {/* Stage-3 */}
        <div>
          <h1 className="font-[700] text-[27px]">Helpful Links</h1>
          <div className=" flex flex-col gap-6 mt-4">
            <Link
              className="text-[16px] font-[400]  text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Courses
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Services
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Support
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Terms and Conditions
            </Link>
            <Link
              className="text-[16px] font-[400] text-[#FFFFFF] hover:opacity-75 transition-all duration-200"
              href={"#"}
            >
              Privacy and Policy
            </Link>
          </div>
        </div>
        {/* Stage-4 */}
        <div>
          <h1 className="font-[700] text-[27px]">Contact Us</h1>
          <div className=" flex flex-col gap-6 mt-4">
            <div className="flex  items-center gap-2">
              <LuPhoneCall />
              <p className="text-[16px] font-[400] text-[#FFFFFF]">
                01677679984
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEmail />
              <p className="text-[16px] font-[400] text-[#FFFFFF]">
                eduhub.edu@gmail.com
              </p>
            </div>
            <div className="flex items-center  space-x-4">
              <Link href={"#"}>
                <div className="flex items-center justify-center bg-white rounded-full p-2 hover:opacity-75 transition-all duration-200">
                  <RiFacebookFill color="blue" size={36} />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="flex items-center justify-center bg-white rounded-full p-2 hover:opacity-75 transition-all duration-200">
                  <RiLinkedinFill color="blue" size={36} />
                </div>
              </Link>
              <Link href={"#"}>
                <div className="flex items-center justify-center bg-white rounded-full p-2 hover:opacity-75 transition-all duration-200">
                  <RiInstagramLine color="blue" size={36} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
