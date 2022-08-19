export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
  return cart;
};

export const addToCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter((cartProduct) => cartProduct._id !== id);
  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const updateCart = (newCart) => {
  localStorage.setItem('cart', JSON.stringify(newCart));
};

export const clearStorage = () => {
  localStorage.clear();
};
