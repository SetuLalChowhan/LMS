import React from "react";
import Head from "./Head";
import Slide from "./Slide";
import InstructorCards from "./InstructorCards";

const Instructor = ({ title, para, number }) => {
  return (
    <section className="container lg:max-w-7xl lg:mx-auto mt-24 px-4">
      {/* Head Section */}
      <div>
        <Head header={title} details={para} />
      </div>
      {/* Instructor Slide */}
      <div className="w-full mt-8 mx-auto">
        <Slide cards={<InstructorCards num={number} />} tailwindValue="sm:w-[320px] md:w-full" />
      </div>
    </section>
  );
};

export default Instructor;
