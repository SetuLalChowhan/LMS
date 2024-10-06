"use client";

import { getCourses } from "@/redux/feature/lms";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const AllCourses = () => {
  const { courses } = useSelector((state) => state.lms);
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const dispatch = useDispatch();

  const categories = [
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
    <div className="w-full mt-6 px-4 lg:px-0">
      {/* Category Section */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-7 mb-6">
        {categories.map((category, index) => (
          <button
            onClick={() => {
              setActiveCategory(category);
              dispatch(getCourses(category));
            }}
            key={index}
            className={`${
              category === activeCategory
                ? "text-blue font-semibold border-b-2 border-blue"
                : "text-gray-700"
            } text-sm lg:text-[17px] px-4 py-2 hover:text-blue transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* All Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 custom-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {courses?.map((course, index) => {
          return index <= 7 ? (
            <Card
              key={index}
              item={course}
              height={"h-[430px]"}
              type={"See Details"}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default AllCourses;
