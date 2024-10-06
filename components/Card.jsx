import Link from "next/link";
import React from "react";
import { ButtonIcon } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Card = ({ item, height, category, date, type }) => {
  return (
    // Responsive Card for Blog and Course card, optimized for small to large screens
    <div
      className={` md:w-[260px] lg:w-[312px] ${height} border border-gray-300 shadow-lg px-4 py-6 rounded-lg flex flex-col gap-4 items-start transition-all hover:shadow-2xl bg-white`}
    >
      {/* Responsive Image */}
      <div className="w-full h-[200px] relative">
        <Image
          src={item.image}
          alt="image"
          fill
          className="object-cover rounded-md"
          priority={100}
        />
      </div>

      {/* Category Tag */}
      <p className="inline-block bg-[#EEF5FF] font-[500] text-[12px] md:text-[14px] text-blue p-1 rounded-md">
        {category}
      </p>

      {/* Date */}
      {date && (
        <p className="text-[10px] md:text-[12px] font-[400] text-gray-500">
          {date}
        </p>
      )}

      {/* Title */}
      <h1 className="text-[16px] md:text-[17px] font-bold text-gray-800 leading-tight">
        {item.title}
      </h1>

      {/* Description */}
      <p className="text-[14px] md:text-[15px] font-[400] text-[#6F6F73] mt-1 text-justify">
        {item.details}
      </p>

      {/* Button */}
      <Link href={`/course/${item.id}`} className="mt-auto">
        <ButtonIcon
          name={type}
          icon={<FaLongArrowAltRight className="ml-1" />}
          value={
            "text-white text-[14px] md:text-[15px] bg-blue border-2 border-blue rounded px-3 py-2 hover:bg-opacity-90 transition-all"
          }
        />
      </Link>
    </div>
  );
};

export default Card;
