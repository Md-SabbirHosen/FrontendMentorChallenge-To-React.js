import { cartIcon } from "../../assets";

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 bg-primary-1 text-black p-3  rounded-lg font-bold text-sm md:px-16 md:py-2">
      <img src={cartIcon} alt="Cart Icon" />
      {props.children}
    </button>
  );
};

export default Button;
