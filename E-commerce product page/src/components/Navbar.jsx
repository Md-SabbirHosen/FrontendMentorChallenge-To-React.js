import { NavLink } from "react-router-dom";
import { closeIcon } from "../assets";
import { navigation } from "../constants";

const Navbar = (props) => {
  const toggleNavigationHandler = () => {
    props.onToggleNavigation();
  };

  return (
    <nav
      className={`fixed top-0 left-0 bg-white w-[70%] h-full p-6 z-30 shadow-2xl transition-transform duration-300 ease-in-out ${props.openNavigation ? "translate-x-0" : "-translate-x-full"} md:static md:translate-x-0 md:shadow-none`}
    >
      <ul className="flex items-start flex-col   md:flex-row md:items-center md:bg-transparent ">
        <a
          className="block mb-8 cursor-pointer md:hidden"
          onClick={toggleNavigationHandler}
        >
          <img src={closeIcon} alt="closeIcon" />
        </a>
        {navigation.map((navItem) => (
          <NavLink
            className="mr-6 mb-4 text-neutral-1   font-bold transition-all duration-300 md:mb-0 md:text-neutral-2 md:font-normal hover:md:text-neutral-1 md:no-underline md:underline-offset-0 md:hover:underline md:hover:decoration-primary-1 md:decoration-4 hover:underline-offset-[52px]"
            key={navItem.id}
            to={navItem.url}
          >
            {navItem.title}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
