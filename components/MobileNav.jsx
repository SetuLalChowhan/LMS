"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Button2, Login } from "./Button";
import { setNav } from "@/redux/feature/lms";

const MobileNav = () => {
  const { nav } = useSelector((state) => state.lms);
  const dispatch =useDispatch()
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
    <nav className={nav ? "hidden" : "flex flex-col gap-7 "}>
      {/* //option */}
      <div className="flex flex-col justify-center items-center gap-6 text-[18px]">
        {links.map((link, index) => {
          return (
            <Link  onClick={() => {
              dispatch(setNav(!nav));
            }}
              key={index}
              href={link.path}
              className={
                link.path == pathname
                  ? "w-[110px] p-[12px] text-[18px] border-b-2 border-blue  flex justify-center items-center"
                  : " w-[110px] p-[12px] text-[18px]  flex justify-center items-center "
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {/* Button all */}
      <div className="flex flex-col justify-center items-center gap-6">
        <Link href={"#"}>
          <Button2
            value={" px-0 gap-[10px] text-[18px] text-blue "}
            name={"Login"}
          />
        </Link>
        <div className=" mb-4">
          <Link href={"#"}>
            <Button value="button-custom1" name={"Enroll Now"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
