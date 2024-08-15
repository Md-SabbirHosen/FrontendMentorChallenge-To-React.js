import { useState } from "react";
import { menuIcon, logo, cartIcon, imageAvatar, closeIcon } from "../assets";
import { navigation } from "../constants";
import { NavLink } from "react-router-dom";

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
        <nav className={`${openNavigation ? "flex" : "hidden"} md:flex `}>
          <ul className="fixed top-0 left-0 flex items-start flex-col bg-white w-[70%] h-full p-6 z-10 shadow-2xl md:flex-row md:items-center md:bg-transparent md:static md:shadow-none">
            <a className="block mb-8 cursor-pointer" onClick={toggleNavigation}>
              <img src={closeIcon} alt="closeIcon" />
            </a>
            {navigation.map((navItem) => (
              <NavLink
                className="mr-6 mb-4 text-neutral-1 font-bold md:mb-0 md:text-neutral-2 md:font-normal hover:md:text-neutral-1 md:hover:underline md:hover:decoration-primary-1 md:decoration-4 hover:underline-offset-[50px]"
                key={navItem.id}
                to={navItem.url}
              >
                {navItem.title}
              </NavLink>
            ))}
          </ul>
        </nav>
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
