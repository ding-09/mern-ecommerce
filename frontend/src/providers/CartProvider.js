import { createContext, useContext, useState, useEffect } from 'react';

// create context for Cart
const CartContext = createContext();

const CartProvider = ({ children }) => {
  // state to keep track of cart
  const [cart, setCart] = useState([]);
  // console.log([...new Set(cart)]) this works

  // state to keep track of total item in cart
  const [totalItems, setTotalItems] = useState(0);

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
    let total = (subtotal + order.shippingFee);

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
      setCart(
        cart.map((cartProduct) =>
          cartProduct._id === product._id
            ? { ...cartProduct, qty: cartProduct.qty + 1 }
            : cartProduct
        )
      );
      return;
    }
    // if there are no matches, that means cart does not contain this item
    // add product and qty in
    product.qty = 1;
    setCart([...cart, product]);
  };

  // remove item from cart
  const removeProduct = (id) => {
    const products = cart.filter((cartProduct) => cartProduct._id !== id);
    setCart(products);
  };

  // update cost based on add/remove/update qty
  const updateProduct = (id, qty) => {
    console.log(typeof(qty))
    setCart(
      cart.map((cartProduct) =>
        cartProduct._id === id ? { ...cartProduct, qty } : cartProduct
      )
    );
  };

  // update shopping bag icon
  const value = {
    cart,
    order,
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
