"use client"

import React, { useState } from 'react';

const accordionData = [
  { title: "Module 1: Introduction to UX/UI Design", content: "Learn the fundamentals of UX/UI design, including key concepts and the design process.", week: "1" },
  { title: "Module 2: Understanding Users", content: "Explore techniques for understanding user needs, behavior, and motivations.", week: "2" },
  { title: "Module 3: Design Principles", content: "Study the core design principles that contribute to effective, user-centered interfaces.", week: "3" },
  { title: "Module 4: Wireframing and Prototyping", content: "Learn how to create wireframes and prototypes to visualize and test design ideas.", week: "4" },
  { title: "Module 5: Usability Testing", content: "Understand the importance of usability testing and how to conduct effective tests.", week: "5" },
  { title: "Module 6: Advanced UI Design", content: "Delve into advanced UI design techniques and best practices.", week: "6" },
  { title: "Module 7: Design Systems", content: "Learn how to create and maintain a design system for consistent, scalable design.", week: "7" },
  { title: "Module 8: Project Work", content: "Apply your knowledge in a hands-on project to develop a real-world design solution.", week: "8" },
  { title: "Module 9: Building a Portfolio", content: "Create a portfolio that showcases your design skills and projects.", week: "9" },
  { title: "Module 10: Industry Insights and Trends", content: "Explore current trends and future directions in UX/UI design.", week: "10" }
];

const Module = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the accordion open/close
  };

  return (
    <div className="container my-6 font-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              className="flex border-2  items-center w-full p-4 font-medium text-left text-black bg-white hover:bg-gray-200"
              onClick={() => toggleAccordion(index)}
            >
              {/* Box for Week */}
              <div className="w-16 h-16 bg-[#3687FC] text-white flex flex-col items-center justify-center rounded text-center">
                <span>Week</span>
                <span className="text-2xl font-bold">{item.week}</span>
              </div>
              <span className="ml-4">{item.title}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-gray-600">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Module;




