import { useState } from "react";
import { menuIcon, logo, cartIcon, imageAvatar } from "../assets";

const MainNavigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <header className="container flex justify-between items-center py-5 md:py-10">
      <div className="flex gap-4 items-center">
        <img
          className="w-[100%] h-[22px] cursor-pointer md:hidden"
          src={menuIcon}
          alt="menuIcon"
        />
        <img
          className="cursor-pointer w-[100%] h-[22px]"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex gap-6 items-center md:gap-10">
        <img
          className=" w-[100%] h-[20px]  cursor-pointer"
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
