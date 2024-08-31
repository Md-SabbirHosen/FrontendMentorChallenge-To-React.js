import React, { useState } from "react";

const CartContext = React.createContext({
  totalAmount: 0,
  addUnit: () => {},
  removeUnit: () => {},
});

export const CartContextProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const addUnitHandler = () => {
    setTotalAmount((prevAmount) => prevAmount + 1);
  };

  const removeUnitHandler = () => {
    setTotalAmount((prevAmount) => prevAmount - 1);
  };

  const cartContext = {
    totalAmount: totalAmount,
    addUnit: addUnitHandler,
    removeUnit: removeUnitHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
