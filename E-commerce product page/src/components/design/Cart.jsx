import { deleteIcon, product1Thumbnail } from "../../assets";
import Button from "./Button";

const Cart = (props) => {
  return (
    <div
      className={`absolute inset-x-0  z-[25]   rounded-lg   bg-white  transition-all duration-500 ease-in-out ${props.onShowCart ? "shadow-2xl translate-y-48 md:translate-y-56 " : "shadow-sm -translate-y-48 md:-translate-y-56 "}    md:w-80 md:left-2/3`}
    >
      <h1 className="px-6 py-4 text-xl text-black font-bold border-b-2">
        Cart
      </h1>
      <div className="flex space-y-10 flex-col px-6 py-10">
        <div className="flex justify-between gap-4 items-center font-semibold">
          <div className="w-14 h-14 ">
            <img className="rounded-lg" src={product1Thumbnail} alt="" />
          </div>
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00x3 <span className="text-black font-bold">$375.00</span>
            </p>
          </div>
          <div>
            <img src={deleteIcon} alt="Delete Icon" />
          </div>
        </div>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
