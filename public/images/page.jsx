"use client";

import React from "react";
import Image from "next/image";
import about1 from "./about-1.png";
import about2 from "./about-2.png";
import CountUp from "react-countup";

const achievements = [
  { value: "20000", label: "Learner", suffix: "+" },
  { value: "12000", label: "Job Placement", suffix: "+" },
  { value: "96", label: "Course Competition", suffix: "%" },
  { value: "30", label: "Live Course", suffix: "+" },
];
const experts = [
  {
    name: "Robert Fox",
    title: "Graphic Design Expert",
    image: "/images/fox.png", 
  },
  {
    name: "Guy Hawkins",
    title: "Digital Market Expert",
    image: "",
  },
  {
    name: "Ronald Richards",
    title: "Python Expert",
    image: "",
  },
  {
    name: "Bessie Cooper",
    title: "Animation Expert",
    image: "",
  },
  {
    name: "Albert Flores",
    title: "Language Design Expert",
    image: "",
  },
  {
    name: "Darlene Robertson",
    title: "Data Science Expert",
    image: "",
  },
  {
    name: "Eleanor Pena",
    title: "Java Expert",
    image: "",
  },
  {
    name: "Wade Warren",
    title: "Ux/Ui Expert",
    image: "",
  },
];


const About = () => {
  return (
    <div className="container">
      {/* about Us */}
      <div className="text-[58px] font-bold text-[#0055D2]">About Us</div>
      <div className="text-[17px] pb-10">
        At EduHub, we believe that education has the power to transform lives.
        Our mission is to make high-quality learning accessible to everyone, no
        matter where you are in the world. With cutting-edge technology and a
        passionate team of educators, we strive to create an engaging and
        effective learning experience for all. Join us on this journey to unlock
        your full potential and achieve your dreams.
      </div>
      {/* About Us End  */}

      <div className="pb-10">
        <div className="text-[58px] font-bold text-[#0055D2] ">Our Mission</div>
        <div className="text-[17px]">
          At EduHub, our mission is to provide accessible, high-quality
          education to learners around the world, enabling them to achieve their
          personal and professional goals.
        </div>
        <div className=" flex flex-row mx-5 my-5 gap-12">
          <Image
            className="px-5 py-5"
            src={about1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-col  gap-4 justify-center">
            <span className="text-wrap text-4xl">
              Empowering Every Learner to Succeed
            </span>

            <div className="text-[17px]">
              our mission is to provide accessible, high-quality education that
              empowers learners to achieve their personal and professional
              goals.
            </div>
          </div>
        </div>
      </div>

      <div className=" pb-10">
        <span className="text-[58px] font-bold text-[#0055D2] ">
          Our Journey
        </span>
        <div className="text-[17px]">
          Learn about the founding of EduHub, our growth, and our commitment to
          transforming education through innovation and technology.
        </div>
        <div className=" flex flex-row mx-5 my-5 gap-12">
          <div className="flex flex-col  gap-4 justify-center">
            <div className="text-[17px]">
              Our mission is to provide accessible, high-quality education that
              empowers learners to achieve their personal and professional
              goals.
            </div>
          </div>
          <Image
            className="px-5 py-5"
            src={about2}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="pb-10">
        <span className="text-[58px] font-bold text-[#0055D2] ">
          What We Have Achieved
        </span>
        <div className="text-[17px]">
          At EduHub, we've empowered thousands of learners with diverse courses
          and successful job placements, helping them achieve their career goals
          and excel.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  my-5">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg p-8"
            >
              <h3 className="text-3xl font-bold text-[#0055D2]">
                <CountUp
                  start={0}
                  end={achievement.value}
                  suffix={achievement.suffix || ""}
                  duration={3}
                />
              </h3>
              <p className="text-gray-500 mt-2">{achievement.label}</p>
            </div>
          ))}
        </div>

        <section>
          <div>
            <span className="text-[58px] font-bold text-[#0055D2] ">
              Learn from our expert instructor
            </span>
            <div className="text-[17px]">
            At EduHub, we believe that education has the power to transform lives. Our mission is to make high-quality learning accessible to everyone.
            </div>
            <div className=" p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert, index) => (
          <div key={index} className=" p-4 rounded-xl text-center">
            <div className="relative w-full h-48">
              <Image
                src={expert.image}
                alt={expert.name}
                width={312}
                height={362}
                className="rounded-xl"
              />
            </div>
            <h3 className="text-white text-xl mt-4">{expert.name}</h3>
            <p className="text-gray-400">{expert.title}</p>
          </div>
        ))}
      </div>
    </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
