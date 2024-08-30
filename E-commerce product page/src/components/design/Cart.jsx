import { deleteIcon, product1Thumbnail } from "../../assets";
import Button from "./Button";

const Cart = () => {
  return (
    <div className="absolute inset-x-0 top-full mt-2   z-[25] rounded-lg   bg-white shadow-2xl md:left-[80%]">
      <h1 className="px-6 py-4 text-xl text-black font-bold border-b-2">
        Cart
      </h1>
      <div className="flex space-y-8 flex-col px-6 py-10">
        <div className="flex justify-between items-center font-semibold">
          <div className="w-14 h-14">
            <img src={product1Thumbnail} alt="" />
          </div>
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00x3 <span className="text-black font-bold">$375.00</span>
            </p>
          </div>
          <img src={deleteIcon} alt="" />
        </div>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
