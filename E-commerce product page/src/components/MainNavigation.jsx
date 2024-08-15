import { useState } from "react";
import { menuIcon, logo, cartIcon, imageAvatar } from "../assets";
import Navbar from "./Navbar";

const MainNavigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prevNavigation) => !prevNavigation);
  };

  return (
    <header className="container flex justify-between items-center  py-5 md:border-b-2 md:border-neutral-3/40">
      <div className="flex gap-4 items-center md:gap-12">
        <div className="w-[22px] cursor-pointer md:hidden">
          <img
            className="w-full h-full object-cover"
            src={menuIcon}
            width={16}
            height={15}
            alt="menuIcon"
            onClick={toggleNavigation}
          />
        </div>
        <div>
          <img
            className="w-full h-full object-cover cursor-pointer"
            width={138}
            height={20}
            src={logo}
            alt="logo"
          />
        </div>
        <Navbar
          openNavigation={openNavigation}
          toggleNavigation={toggleNavigation}
        />
      </div>

      <div className="flex gap-6 items-center md:gap-10">
        <img
          className="w-[100%] h-[20px]  cursor-pointer"
          src={cartIcon}
          alt="cartIcon"
        />

        <img
          className="w-[100%] h-[30px] cursor-pointer transition-all rounded-full border-primary-1 hover:border-4 md:h-[50px]"
          src={imageAvatar}
          alt="imageAvatar"
        />
      </div>
    </header>
  );
};

export default MainNavigation;
