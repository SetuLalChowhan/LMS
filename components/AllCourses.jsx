"use client";

import { getCourses } from "@/redux/feature/lms";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Card from "./Card";

const AllCourses = () => {
  const { courses } = useSelector((state) => state.lms);
  const [active, setActive] = useState("All Courses");
  const dispatch = useDispatch();

  const Cat = [
    "All Courses",
    "Programming",
    "Design",
    "Marketing",
    "Editing",
    "Data Skill",
  ];

  useEffect(() => {
    dispatch(getCourses("All Courses"));
  }, [dispatch]);
  return (
    <div className=" w-full mt-6">
      {/* Category Section */}
      <div className="lg:flex-center gap-7 grid grid-cols-3 ">
        {Cat.map((item, index) => {
          return (
            <button
              onClick={() => {
                setActive(item);
                dispatch(getCourses(item));
              }}
              key={index}
              className={
                item == active
                  ? " lg:w-[300px] lg:text-[17px] font-[500] text-blue "
                  : "lg:w-[300px] lg:text-[17px] font-[500]  "
              }
            >
              {item}
            </button>
          );
        })}
      </div>
      {/* All Courses */}
      <div className="grid lg:grid-cols-4 mt-8 gap-3 mt place-items-center  md:grid-cols-2">
        {courses?.map((value, index) => {
          return index <= 7 ? (
            <Card
              key={index}
              item={value}
              height={"h-[430px]"}
              type={"See Details"}
            />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
