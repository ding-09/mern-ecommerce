import { createContext, useContext, useState, useEffect } from 'react';
import {
  getCart,
  addToCart,
  removeFromCart,
  updateCart,
} from '../utils/cartStorage';

// create context for Cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state to keep track of cart
  const [cart, setCart] = useState(getCart());

  // state to keep track of total item in cart
  const [totalItems, setTotalItems] = useState(0);

  // state to keep track of whether user checked out or not 
  const [checkedOut, setCheckedOut] = useState(false)

  // state to keep track of cost breakdown
  const [order, setOrder] = useState({
    subtotal: 0,
    shippingFee: 0.99,
    total: 0,
  });

  // run function every time there is a change to cart
  useEffect(() => {
    calculateOrder();
    getTotalItemsInBag();
  }, [cart]);

  // calculate cost
  const calculateOrder = () => {
    let subtotal = cart.map(
      (product) => parseFloat(product.price) * product.qty
    );
    subtotal = subtotal.reduce((prev, next) => (prev += next), 0);
    let total = subtotal + order.shippingFee;

    setOrder({ ...order, subtotal, total });
  };

  // get total items in bag
  const getTotalItemsInBag = () => {
    let items = cart.map((cartProduct) => cartProduct.qty);
    items = items.reduce((prev, next) => (prev += next), 0);
    setTotalItems(items);
  };

  // add item to cart
  const addProduct = (product) => {
    if (cart.length !== 0) {
      let newCart = cart.map((cartProduct) =>
        cartProduct._id === product._id
          ? { ...cartProduct, qty: cartProduct.qty + 1 }
          : cartProduct
      );
      setCart(newCart);
      addToCart(newCart);
      return;
    }
    // if there are no matches, that means cart does not contain this item
    // add product and qty in
    product.qty = 1;
    setCart([...cart, product]);
  };

  // remove item from cart
  const removeProduct = (id) => {
    const newCart = cart.filter((cartProduct) => cartProduct._id !== id);
    setCart(newCart);
    removeFromCart(newCart);
  };

  // update cost based on add/remove/update qty
  const updateProduct = (id, qty) => {
    const newCart = cart.map((cartProduct) =>
      cartProduct._id === id ? { ...cartProduct, qty } : cartProduct
    );
    setCart(newCart);
    updateCart(newCart);
  };

  const value = {
    cart,
    order,
    checkedOut,
    setCheckedOut,
    totalItems,
    addProduct,
    removeProduct,
    updateProduct,
  };
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
