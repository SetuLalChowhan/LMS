import React from "react";
import AllCourse from "./AllCourses";
import { ButtonIcon } from "./Button";
import Head from "./Head";
import Link from "next/link";

const HomeCourses = () => {
  return (
    <section className=" lg:container lg:w-[1320px]  mt-24  ">
      {/* Head Seaction */}
      <div className=" w-full lg:h-[112px] lg:mx-auto ">
        <Head
          header={"Our Featured Popular Courses"}
          details={
            "Explore our top courses, from web development to digital marketing, designed to elevate your skills and career."
          }
        />
      </div>
      {/* Course Section */}
      <div className=" w-full">
        <AllCourse />
      </div>
      {/* Button */}

      <div className="text-blue mt-14">
        <Link href={'/courses'}>
        
        <ButtonIcon
          value={"button-custom3  mx-auto font-semibold text-[16px]"}
          name={"See More Courses"}
          icon={""}
          linkValue={'/courses'}
        />
        </Link>
      </div>
    </section>
  );
};

export default HomeCourses;
