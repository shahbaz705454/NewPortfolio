import React from "react";
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import Navbarbtn from "./Navbarbtn";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarMain = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setmenuOpen(!menuOpen);
  };

  return (
    <nav className="flex max-w-[1300px] w-full mx-auto px-6 fixed left-[50%] -translate-x-[50%] z-20 gap-4 mt-2 ">
      <div className="flex items-center justify-between w-full max-w-[1200px] h-[80px] mx-auto bg-black p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <NavbarLogo></NavbarLogo>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <Navbarbtn />
      </div>
      <div className="  justify-center items-center sm:flex lg:hidden" >
        <button
          onClick={handleMenuToggle}
          className="text-white text-1xl p-4 hover:scale-110 transition-all duration-200 hover:shadow-cyanShadow ease-in-out border-orange rounded-full border "
        >
          <RxHamburgerMenu />
        </button>
        
      </div>
    </nav>
  );
};

export default NavbarMain;
