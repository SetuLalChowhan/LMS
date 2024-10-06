import { chooseUs } from "@/utilities/file";
import React from "react";
import Image from "next/image";
import Head from "./Head";

const Choose = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0 mt-16 lg:mt-24">
      {/* Head Section */}
      <div className="text-center mb-8 lg:mb-12">
        <Head
          header={"Why Choose Us?"}
          details={
            "At EduHub, we are committed to providing you with the best learning experience."
          }
        />
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chooseUs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-[#D9E8FF] rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <Image src={item.image} width={60} height={60} alt="logo" />
            <h3 className="text-xl font-bold mt-4 mb-2 text-center">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-[#353537] text-center">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
