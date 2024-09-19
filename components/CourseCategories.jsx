import { categories } from "@/utilities/file";
import Head from "../components/Head";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCategories = () => {
  return (
    <section className=" container  lg:mt-28">
      <div>
        <Head
          header={"Categories"}
          details={
            "Browse courses by category to find the perfect match for your interests and career goals."
          }
        />
      </div>
      <div className=" md:grid flex flex-wrap justify-center items-center lg:grid-cols-4 md:grid-cols-3 md:place-items-center gap-4 mt-3  ">
        {categories.map((item, index) => (
          <Link
            href={"#"}
            key={index}
            className="shadow-xl md:w-[312px] md:h-[276px] flex flex-col justify-center items-center gap-3 bg-[#FFFFFF] hover:scale-105 duration-200 transition-all rounded-lg"
          >
            <div>
              <Image
                src={item.image}
                alt="images"
                width={140}
                height={140}
                quality={100}
              />
            </div>
            <div>{item.catergory}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CourseCategories;
