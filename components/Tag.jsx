"use client";
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "@/redux/feature/lms";

const Tag = () => {
  const { nav } = useSelector((state) => state.lms);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setNav(!nav))} className="text-blue text-[23px]">
      {nav ? <FaAlignJustify /> : <IoCloseSharp />}
    </div>
  );
};

export default Tag;
