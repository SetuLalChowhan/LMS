"use client";

import React from "react";
import Image from "next/image";
import about1 from "./about-1.png";
import about2 from "./about-2.png";
import CountUp from "react-countup";
import { Button } from "@/components/Button";

const achievements = [
  { value: "2000", label: "Learner", suffix: "+" },
  { value: "1200", label: "Job Placement", suffix: "+" },
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
    image: "/images/albert.png",
  },
  {
    name: "Ronald Richards",
    title: "Python Expert",
    image: "/images/cooper.png",
  },
  {
    name: "Bessie Cooper",
    title: "Animation Expert",
    image: "/images/darleno.png",
  },
  {
    name: "Albert Flores",
    title: "Language Design Expert",
    image: "/images/guy.png",
  },
  {
    name: "Darlene Robertson",
    title: "Data Science Expert",
    image: "/images/pena.png",
  },
  {
    name: "Eleanor Pena",
    title: "Java Expert",
    image: "/images/richard.png",
  },
  {
    name: "Wade Warren",
    title: "Ux/Ui Expert",
    image: "/images/wade.png",
  },
];

const About = () => {
  return (
    <div className="container">
    {/* About Us Section */}
    <div>
      <section className="py-12 text-center lg:text-left">
        <h2 className="text-4xl lg:text-[58px] font-bold text-[#0055D2]">About Us</h2>
        <p className="text-lg lg:text-[17px] mt-4">
          At EduHub, we believe that education has the power to transform lives.
          Our mission is to make high-quality learning accessible to everyone, 
          no matter where you are in the world. With cutting-edge technology and
          a passionate team of educators, we strive to create an engaging and
          effective learning experience for all. Join us on this journey to
          unlock your full potential and achieve your dreams.
        </p>
      </section>
    </div>

    {/* Our Mission Section */}
    <div>
      <section className="py-12">
        <h2 className="text-4xl lg:text-[58px] font-bold text-[#0055D2] text-center lg:text-left">Our Mission</h2>
        <p className="text-lg lg:text-[17px] mt-4 text-center lg:text-left">
          At EduHub, our mission is to provide accessible, high-quality
          education to learners around the world, enabling them to achieve their
          personal and professional goals.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <Image
            src={about1}
            width={600}
            height={500}
            alt="Our Mission"
            className="rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-4xl">Empowering Every Learner to Succeed</h3>
            <p className="text-lg lg:text-[17px]">
              Our mission is to provide accessible, high-quality education that
              empowers learners to achieve their personal and professional
              goals.
            </p>
          </div>
        </div>
      </section>
    </div>

    {/* Our Journey Section */}
    <div>
      <section className="py-12">
        <h2 className="text-4xl lg:text-[58px] font-bold text-[#0055D2] text-center lg:text-left">Our Journey</h2>
        <p className="text-lg lg:text-[17px] mt-4 text-center lg:text-left">
          Learn about the founding of EduHub, our growth, and our commitment to
          transforming education through innovation and technology.
        </p>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mt-8">
          <div className="flex flex-col gap-4">
            <p className="text-lg lg:text-[17px]">
              Our mission is to provide accessible, high-quality education that
              empowers learners to achieve their personal and professional
              goals.
            </p>
          </div>
          <Image
            src={about2}
            width={600}
            height={500}
            alt="Our Journey"
            className="rounded-lg"
          />
        </div>
      </section>
    </div>

    {/* Achievements Section */}
    <div>
      <section className="py-12">
        <h2 className="text-4xl lg:text-[58px] font-bold text-[#0055D2] text-center">What We Have Achieved</h2>
        <p className="text-lg lg:text-[17px] mt-4 text-center">
          At EduHub, we've empowered thousands of learners with diverse courses
          and successful job placements, helping them achieve their career goals
          and excel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg p-8 text-center"
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
      </section>
    </div>

    {/* Expert Instructors Section */}
    <div>
      <section className="py-12">
        <h2 className="text-4xl lg:text-[58px] font-bold text-[#0055D2] text-center">Learn from our Expert Instructors</h2>
        <p className="text-lg lg:text-[17px] mt-4 text-center">
          At EduHub, we believe that education has the power to transform lives.
          Our mission is to make high-quality learning accessible to everyone.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="gap-4 rounded-xl text-center"
            >
              <div className="relative w-full h-50 overflow-hidden rounded-xl">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  width={312}
                  height={362}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h4 className="mt-4 font-bold">{expert.name}</h4>
              <p className="text-gray-500">{expert.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    {/* Call to Action Section */}
    <div>
      <section className="py-12">
        <div className="w-full h-[250px] bg-[#EEF5FF] flex flex-col items-center justify-center gap-5 text-center px-4 lg:px-0">
          <h3 className="font-bold text-2xl lg:text-4xl">
            Enroll in Our Courses and Transform Your Future
          </h3>
          <p className="text-lg lg:text-xl">
            Join our courses today and gain the skills needed to transform your
            future and achieve your goals.
          </p>
          <Button name="Get Discount" value="button-custom1 w-[170px]" />
        </div>
      </section>
    </div>
  </div>
  );
};

export default About;
