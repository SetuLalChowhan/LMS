import React from "react";
import Slide from './Slide'
import CourseCard from './CourseCard'
import Link from 'next/link'

const CourseSlideSection = ({catergory,}) => {
  return (
    <div className=" mx-a  mb-24">
     <div className="  ">
     <Link 
        className="  text-[32px] font-[600] text-blue hover:opacity-75 hover:duration-200 hover:transition-all   mb-7   "
        href={`#`}
      >
        {" "}
        <h1 className=" flex justify-center items-center lg:justify-start lg:items-start  ">{catergory}</h1>
      </Link>
     </div>
      <div className=" mt-7">
      <Slide 
     
        cards={<CourseCard value={catergory} />}
       
      />
      </div>
    </div>
  );
};

export default CourseSlideSection;
