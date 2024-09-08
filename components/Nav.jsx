"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About us",
      path: "/about",
    },
    {
      name: "Courses",
      path: "/courses",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();

  return (
    <nav className=" hidden lg:flex gap-[41px] ">
      {" "}
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={
              link.path == pathname
                ? "w-[110px] p-[12px] text-[18px] border-b-2 border-blue flex justify-center items-center "
                : " w-[110px] p-[12px] text-[18px]  flex justify-center items-center "
            }
          >
            <div>{link.name}</div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
