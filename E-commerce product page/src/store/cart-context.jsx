import React, { useState } from "react";

const CartContext = React.createContext({
  totalAmount: 0,
  totalPrice: 0,
  addUnit: () => {},
  removeUnit: () => {},
  deleteCart: () => {},
});

export const CartContextProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const addUnitHandler = () => {
    setTotalAmount((prevAmount) => prevAmount + 1);
  };

  const removeUnitHandler = () => {
    setTotalAmount((prevAmount) => prevAmount - 1);
  };

  const deleteCartHandler = () => {};

  const cartContext = {
    totalAmount: totalAmount,
    totalPrice: 0,
    addUnit: addUnitHandler,
    removeUnit: removeUnitHandler,
    deleteCart: deleteCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
