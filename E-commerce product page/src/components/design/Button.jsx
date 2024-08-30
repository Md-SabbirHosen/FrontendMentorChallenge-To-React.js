import { cartIcon } from "../../assets";

const Button = (props) => {
  return (
    <button className="flex justify-center items-center gap-2 text-base bg-primary-1 text-black p-3  rounded-lg font-bold  md:px-16 md:py-2">
      {props.cartIcon && <img src={cartIcon} alt="Cart Icon" />}
      {props.children}
    </button>
  );
};

export default Button;
