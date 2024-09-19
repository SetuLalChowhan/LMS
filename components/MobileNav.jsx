"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button, Button2 } from "./Button";
import { setNav } from "@/redux/feature/lms";

const MobileNav = () => {
  const { nav } = useSelector((state) => state.lms);
  const dispatch = useDispatch();
  const links = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];
  const pathname = usePathname();

  return (
    <nav className={nav ? "hidden" : "flex flex-col gap-7"}>
      <div className="flex flex-col justify-center items-center gap-6 text-[18px]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={
              link.path === pathname
                ? "w-[110px] p-[12px] text-[18px] border-b-2 border-blue flex justify-center items-center"
                : "w-[110px] p-[12px] text-[18px] flex justify-center items-center"
            }
            onClick={() => dispatch(setNav(!nav))}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6 mt-4">
        <Link href={"#"}>
          <Button2 value="px-0 gap-[10px] text-[18px] text-blue" name="Login" />
        </Link>
        <div className="mb-4">
          <Link href={"#"}>
            <Button value="button-custom1" name="Enroll Now" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
