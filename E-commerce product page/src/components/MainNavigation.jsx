import { useState } from "react";
import { menuIcon, logo, cartIcon, imageAvatar } from "../assets";

const MainNavigation = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <header className="container flex justify-between items-center py-5 md:py-10">
      <div className="flex gap-4 items-center">
        <img src={menuIcon} alt="menuIcon" />
        <img src={logo} alt="logo" />
      </div>
      <div className="flex gap-4 items-center">
        <img className="w-[20px]" src={cartIcon} alt="cartIcon" />
        <img className="w-[30px]" src={imageAvatar} alt="imageAvatar" />
      </div>
    </header>
  );
};

export default MainNavigation;
