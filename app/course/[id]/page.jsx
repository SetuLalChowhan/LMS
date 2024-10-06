import { ButtonIcon } from "@/components/Button";
import Instructor from "@/components/Instructor";
import Module from "@/components/Module";
import Testimonials from "@/components/Testimonials";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";
import { CiPlay1 } from "react-icons/ci";

const page = ({ params }) => {
  const { id } = params;

  console.log(id);
  return (
    <section className=" mt-24 ">
      <div className=" container lg:w-[1320px] flex gap-28 lg:flex-row flex-col ">
        <div className=" lg:w-[648px] lg:h-[871px] flex flex-col gap-4">
          <p className=" text-[20px] font-[700] text-blue">
            {" "}
            Become a UX/UI Design Pro
          </p>
          <h1 className=" lg:text-[56px] text-[40px] font-[700]">
            UX/UI Design
          </h1>
          <p className=" lg:text-[18px] font-[400] text-[#6F6F73] text-justify">
            Our UX/UI Design course equips you with the skills to create
            user-friendly and visually appealing interfaces. Through hands-on
            projects and expert instruction, you'll master user experience
            principles, interface design, and prototyping. Perfect for beginners
            and those looking to enhance their design skills.
          </p>
          <div className=" w-[341px] h-[51px] flex justify-start items-center gap-4 mt-2">
            <ButtonIcon value={"button-custom2"} name={"Enroll Now"} />
            <ButtonIcon value={"button-custom3"} name={"Join Seminer"} />
          </div>

          <div className=" lg:w-[648px] lg:h-[279px] mt-8 lg:mt-16">
            <h1 className="lg:text-[56px] text-[40px] font-[700] text-blue">
              Course Overview
            </h1>
            <p className=" lg:text-[18px] font-[400] text-[#6F6F73] text-justify">
              Our UX/UI Design course provides comprehensive training in
              creating user-friendly and visually compelling digital interfaces.
              You'll learn key principles of user experience (UX) and user
              interface (UI) design, including user research, wireframing,
              prototyping, and usability testing.
            </p>
          </div>
        </div>

        <div className="lg:w-[536px] lg:h-[860px] flex flex-col gap-7 lg:justify-start lg:items-start justify-center items-center">
          <div className=" mt-5 lg:ml-8  ">
            <VideoPlayer value={"/videos/sample.mp4"} />
          </div>
          <div className=" lg:w-[464px] h-[397px] lg:ml-8">
            <div className="lg:w-full lg:h-[314px] flex flex-col gap-6 ">
              <div className="lg:text-[14px] text-sm font-[400] flex lg:justify-between gap-2 lg:gap-0 md:items-center md:justify-center">
                <p className="bg-[#E6EEFB] p-[4px] lg:p-[10px] rounded-sm">
                  Duration- 6 Months
                </p>
                <p className="bg-[#E6EEFB] p-[4px] lg:p-[10px] rounded-sm">
                  Lectures- 40
                </p>
                <p className="bg-[#E6EEFB] p-[4px] lg:p-[10px] rounded-sm">
                  Projects- 12
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-[32px] font-[600]">150$</p>
                <p className=" h-[35px] lg:h-[42px] bg-[#E6EEFB] p-[4px] lg:p-[10px] rounded-sm">
                  Projects- 12
                </p>
              </div>
              <div>
                <h1 className="text-[28px] font-[600]">
                  Admissions Open Enroll Now
                </h1>
                <p className="lg:text-[18px] font-[400] text-[#6F6F73] text-justify mt-2">
                  Join our UX/UI Design course to master user-centered design
                  and advanced UI techniques. Gain hands-on experience and build
                  a professional portfolio.
                </p>
              </div>
            </div>
            <div className=" flex-center mt-4  md:mt-5  ">
              <ButtonIcon
                name={"Get Admission"}
                value={
                  " w-full h-[62px] px-6 py-4 gap-2.5 rounded-[4px] bg-[#3687FC] text-secondary hover:opacity-75 transition-all duration-300"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" container lg:w-[1320px] lg:h-[361px] flex lg:flex-row flex-col gap-28 justify-center items-center lg:justify-start lg:items-start lg:mt-0 mt-16">
        <div className="lg:w-[648px] lg:h-[371px] flex flex-col gap-4">
          <h1 className="text-[46px] font-[700] text-blue">
            {" "}
            Don't Miss Our Free Demo Class
          </h1>
          <p className="text-[18px] font-[400] text-[#6F6F73] text-justify">
            In our UX/UI Design course you'll build a professional portfolio and
            gain the skills needed to excel in UX/UI design. Watch our demo
            class for free.
          </p>

          <div className="w-[199px] h-[59px]">
            <ButtonIcon
              value={"button-custom2"}
              name={"Watch Video"}
              icon={<CiPlay1 size={30} />}
            />
          </div>
        </div>
        <div className="lg:w-[536px] lg:h-[285px] lg:ml-7 ">
          <VideoPlayer value={"/videos/sample1.mp4"} />
        </div>
      </div>
      <div className=" container lg:w-[1320px] lg:h-[169px] flex flex-col gap-4 lg:mt-0 mt-24 ">
        <h1 className="text-[46px] font-[700] text-blue"> Course Curriculum</h1>
        <p className="text-[18px] font-[400] text-[#6F6F73]">
          Our UX/UI Design course covers user-centered design, wireframing,
          prototyping, and advanced UI techniques. Through hands-on projects and
          a capstone project, you'll build a professional portfolio and gain the
          skills needed to excel in UX/UI design
        </p>
      </div>
      <div className=" container lg:w-[1320px]  lg:mt-0 mt-24">
        <div className="lg:w-full lg:h-[169px] flex flex-col gap-4  ">
          <h1 className="text-[46px] font-[700] text-blue"> Basic Module</h1>
          <p className="text-[18px] font-[400] text-[#6F6F73]">
            Each module covers essential skills from user research to advanced
            UI design, helping you build a professional portfolio and excel in
            your UX/UI career.
          </p>
        </div>
        <div>
          <Module/>

        </div>
      </div>
      <div className=" ">
      <Instructor title={"Our Expert Instructors For This Course"} para={"Each module covers essential skills from user research to advanced UI design, helping you build a professional portfolio and excel in your UX/UI career."} value={""} value1={"lg:w-[640px]"} number={3} />
      </div>
      <div>
      <Testimonials title={" Reviews from Students"} para={"Each module covers essential skills from user research to advanced UI design, helping you build a professional portfolio and excel in your UX/UI career."} />
      </div>
      
    </section>
  );
};

export default page;
