import React from "react";
import Slide from './Slide'
import CourseCard from './CourseCard'
import Link from 'next/link'

const CourseSlideSection = ({catergory,}) => {
  return (
    <div className="  mb-24">
      <Link
        className=" text-[32px] font-[600] text-blue hover:opacity-75 hover:duration-200 hover:transition-all lg:text-start text-center mb-7  "
        href={`#`}
      >
        {" "}
        <h1 className="inline-block">{catergory}</h1>
      </Link>
      <div className=" mt-7">
      <Slide 
        cards={<CourseCard value={catergory} />}
        tailwindValue={"md:w-[600px] lg:w-[1300px] w-[300px] rounded-md"}
      />
      </div>
    </div>
  );
};

export default CourseSlideSection;
