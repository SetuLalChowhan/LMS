import { chooseUs } from "@/utilities/file";
import React from "react";
import Image from "next/image";
import Head from "./Head";

const Choose = () => {
  return (
    <section className=" lg:container lg:w-[1320px] lg:h-[402px] mt-24">
      {/* //Head Section */}
      <div className=" lg:w-[700px] lg:h-[112px] lg:mx-auto ">
        <Head
          header={"Why Choose Us?"}
          details={
            "At EduHub, we are committed to providing you with the best learning experience."
          }
        />
      </div>
      {/* //Card Section */}
      <div className=" lg:w-[1320px] lg:-ml-4 lg:h-[250px] lg:grid lg:grid-cols-4 gap-6 flex flex-col justify-center items-center mt-4 md:grid md:grid-cols-2 md:place-items-center ">
        {chooseUs.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[312px] h-[250px] bg-[#D9E8FF] px-2 rounded-2xl "
            >
              <Image src={item.image} width={60} height={60} alt="logo" />
              <p className="text-[20px] font-[700]">{item.title}</p>
              <p className="text-[16px] font-[400] text-[#353537] text-center">
                {item.details}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Choose;
