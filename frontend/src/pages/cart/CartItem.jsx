import React from 'react';
import { Item } from './style';
import { useCart } from '../../providers/CartProvider';

const CartItem = ({ product }) => {
  const { title, price, qty, _id, image } = product;

  const { updateProduct, removeProduct } = useCart();

  const handleChange = (e) => {
    const value = parseInt(e.target.value)

    // adjust qty in cart context
    updateProduct(_id, value);
  };

  return (
    <Item>
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <p className='product-name'>{title}</p>
      <button
        className='remove-btn'
        onClick={() => {
          removeProduct(_id);
        }}
      >
        Remove
      </button>
      <div className='quantity-selector'>
        <select
          name='quantity'
          id='quantity'
          value={qty}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <span className='product-price'>${(price * qty).toFixed(2)}</span>
    </Item>
  );
};

export default CartItem;
