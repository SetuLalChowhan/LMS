import React from "react";
import Head from "./Head";
import Slide from "./Slide";
import InstructorCards from "./InstructorCards";

const Instructor = ({title,para,value,value1 ,number}) => {
  console.log(number)
  return (
    <section className=" lg:w-full lg:h-[514px] mt-24 inline-block ">
      {/* //Head Section */}
      <div>
        <Head
          header={title}
          details={
            para
          }
        />
      </div>
      {/* Instructor Slide */}
      <div className={`${value} mt-8 mx-auto`} >
       
    <Slide cards={<InstructorCards num={number}/> } tailwindValue={`md:w-[600px] ${value1} w-[300px] rounded-md`}  />
      </div>
    </section>
  );
};

export default Instructor;
