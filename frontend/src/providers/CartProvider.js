import { createContext, useContext, useState } from 'react';

// create context for Cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state to keep track of cart
  const [cart, setCart] = useState([]);

  // add item to cart
  const addProduct = (product) => {
    setCart([...cart, product]);
  };

  // remove item from cart
  const removeProduct = () => {
    
  }

  // update cost based on add/remove/update qty

  // update shopping bag icon
  const value = { cart, addProduct };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// use CartContext
const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
