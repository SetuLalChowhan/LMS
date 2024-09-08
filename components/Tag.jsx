"use client";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { setNav } from "@/redux/feature/lms";
import { useDispatch, useSelector } from "react-redux";
const Tag = () => {
  const { nav } = useSelector((state) => state.lms);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setNav(!nav));
      }}
      className=" text-blue text-[23px] "
    >
      {nav ? <FaAlignJustify /> : <IoCloseSharp />}
    </div>
  );
};

export default Tag;
