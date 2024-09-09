import Link from "next/link";
import React from "react";
import { ButtonIcon } from "./Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";

const Card = ({ item, height, category, date, type }) => {
  return (
    // Card Blog and Course card where blog card has extra date category and blog,course card have diffrent height
    <div
      className={`w-[312px] ${height}  border border-gray-300 shadow-2xl    rounded-md flex flex-col gap-2 items-start `}
    >
      <Image
        src={item.image}
        alt="image"
        priority={100}
        style={{ width: "312px", height: "224px", objectFit: "cover" }}
      />
      <p className=" inline-block  ml-2 bg-[#EEF5FF] font-[500] text-[14px] text-blue p-1">
        {category}
      </p>
      <p className="text-[12px font-[400] ml-3">{date}</p>
      <div className=" h-[100px]">
        <h1 className="text-[17px] font-[700]  ml-3">{item.title}</h1>
        <p className="text-[16px] font-[400] text-[#6F6F73] mt-1 text-justify   px-3 ">
          {item.details}
        </p>
      </div>
      <Link href={`/course/${item.id}`}>
        <ButtonIcon
          name={type}
          icon={<FaLongArrowAltRight />}
          value={
            "text-blue mt-7 ml-3 x-4 flex-center gap-2 font-semibold text-[15px]"
          }
        />
      </Link>
    </div>
  );
};

export default Card;
