import MobileNav from "./MobileNav";
import Tag from "./Tag";
import Nav from "./Nav";
import { Button, Button2 } from "./Button";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="container  w-full flex flex-col lg:flex-row lg:h-[100px] sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center w-full py-4 lg:py-0">
        {/* Logo */}
        <div className="w-[143px]">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={150} height={100} priority />
          </Link>
        </div>

        {/* Large Screen Nav */}
        <div className="hidden md:flex">
          <Nav />
        </div>

        {/* Login and Enroll Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-10 lg:mr-36">
          <Link href={"#"}>
            <Button2 value="px-0 gap-[10px] text-[21px] text-blue" name="Login" />
          </Link>
          <Link href={"#"} className="hidden lg:flex">
            <Button value="button-custom" name="Enroll Now" />
          </Link>
        </div>

        {/* Responsive Hamburger Menu */}
        <div className="md:hidden">
          <Tag />
        </div>
      </div>

      {/* Mobile Nav (visible only on mobile devices) */}
      <div className="md:hidden w-full">
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
