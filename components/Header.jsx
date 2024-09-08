import MobileNav from "./MobileNav";
import Tag from "./Tag";
import Nav from "./Nav";
import { Button, Button2 } from "./Button";
import Link from "next/link";
const Header = () => {
  console.log(30)
  return (
    <header className=" shadow-custom  w-full lg:h-[100px]  flex lg:flex-row  flex-col  lg:justify-center sticky top-0 z-50  bg-white   ">
      <div className="container flex justify-between items-center ">
        <div className="w-[143px] font-semibold text-blue">
          {/* Logo */}
          <Link href="/">
            <h1 className=" text-[23px] font-semibold">EduHub</h1>
          </Link>
        </div>
        {/* Large Screen Nav */}
        <div>
          <Nav />
        </div>
        {/* Login and Enroll Button */}
        <div className=" hidden lg:flex gap-10 lg:mr-28">
        <Link href={"#"}>  <Button2
            value=" px-0 gap-[10px] text-[21px] text-blue  "
            name={"Login"}
          /></Link>

          <Link href={'#'}><Button value="button-custom " name={"Enroll Now"} /></Link>
        </div>
        {/* responsive three line and close icon */}
        <div className="lg:hidden">
          <Tag />
        </div>
      </div>
      {/* Mobile Nav */}
      <div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
