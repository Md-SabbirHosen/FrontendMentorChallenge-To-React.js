import ReactDom from "react-dom";
import { useState } from "react";
import { cartIcon, imageAvatar, logo, menuIcon } from "../assets";
import Backdrop from "./Backdrop";
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
            alt="Menu_Icon"
            onClick={toggleNavigation}
          />
        </div>

        <img
          className="cursor-pointer"
          width={138}
          height={20}
          src={logo}
          alt="Logo"
        />

        <Navbar
          openNavigation={openNavigation}
          onToggleNavigation={toggleNavigation}
        />
        {openNavigation &&
          ReactDom.createPortal(
            <Backdrop onToggleNavigation={toggleNavigation} />,
            document.getElementById("backdrop-root")
          )}
      </div>

      <div className="flex gap-6 items-center md:gap-10">
        <img
          className="cursor-pointer"
          width={22}
          height={20}
          src={cartIcon}
          alt="Cart_Icon"
        />

        <div className="h-[30px] cursor-pointer transition-all rounded-full border-primary-1 hover:border-4 md:h-[50px]">
          <img
            className="w-full h-full rounded-full"
            width={100}
            height={100}
            src={imageAvatar}
            alt="User_Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
