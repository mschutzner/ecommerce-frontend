import { createContext, useState } from "react";

const CartContext = createContext("light");

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };