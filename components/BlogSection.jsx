import Head from "../components/Head";
import React from "react";
import Card from "./Card";
import { Blogs } from "@/utilities/file";
import { ButtonIcon } from "./Button";

const BlogSection = () => {
  return (
    <section className="lg:container lg:w-[1320px] lg:h-[777px] mt-24 ">
      <div>
        <Head
          header={"Dive Into Our Blog for Fresh Insights"}
          details={
            "Stay updated with the latest trends, expert advice, and educational tips from our blog."
          }
        />
      </div>
      <div className="  lg:h-[486px] grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-2  mt-14 ">
        {Blogs.map((blog, index) => (
          <Card
            key={index}
            item={blog}
            height={"h-[486px]"}
            category={blog.category}
            date={blog.date}
            type={"Read More"}
          />
        ))}
      </div>
      <div className="text-blue mt-14 ">
        <ButtonIcon
          value={"button-custom3 w-[200px]   mx-auto font-semibold text-[16px]"}
          name={"See More "}
          icon={""}
        />
      </div>
     
    </section>
  );
};

export default BlogSection;
