import { cartIcon } from "../../assets";

const Button = (props) => {
  return (
    <button className="flex items-center gap-2 bg-primary-1 text-black px-16 rounded-lg font-bold text-sm">
      <img src={cartIcon} alt="Cart Icon" />
      {props.children}
    </button>
  );
};

export default Button;
