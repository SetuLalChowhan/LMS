import Link from "next/link";
import React from "react";
import { ButtonIcon } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Card = ({ item, height, category, date, type }) => {
  return (
    // Card Blog and Course card where blog card has extra date category and blog,course card have diffrent height
    <div
      className={`w-[312px] ${height}  border border-gray-300 shadow-2xl px-4 py-4     rounded-md flex flex-col gap-2 items-start `}
    >
      <Image
        src={item.image}
        alt="image"
        priority={100}
        style={{ width: "312px", height: "224px", objectFit: "cover" }}
      />
      <p className=" inline-block   bg-[#EEF5FF] font-[500] text-[14px] text-blue p-1">
        {category}
      </p>
      <p className="text-[12px font-[400] ">{date}</p>
      <div className=" h-[120px] ">
        <h1 className="text-[17px] font-[700] ">{item.title}</h1>
        <p className="text-[16px] font-[400] text-[#6F6F73] mt-1 text-justify ">
          {item.details}
        </p>
      </div>
      <Link href={`/course/${item.id}`} className="">
        <ButtonIcon
          name={type}
          icon={<FaLongArrowAltRight />}
          value={
            "text-blue m  text-[15px] border-2 bg-blue text-white rounded-lg px-2 hover:opacity-75 duration-200 transition-all"
          }
        />
      </Link>
    </div>
  );
};

export default Card;
