import { NavLink } from "react-router-dom";
import { closeIcon } from "../assets";
import { navigation } from "../constants";

const Navbar = (props) => {
  const toggleNavigationHandler = () => {
    props.onToggleNavigation();
  };

  return (
    <nav className={`${props.openNavigation ? "flex" : "hidden"}  md:flex `}>
      <ul className="fixed top-0 left-0 flex items-start flex-col bg-white w-[70%] h-full p-6 z-30 shadow-2xl md:flex-row md:items-center md:bg-transparent md:static md:shadow-none">
        <a
          className="block mb-8 cursor-pointer"
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
