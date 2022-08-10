import React from 'react';
import { Item } from './style';

const CartItem = ({ product }) => {
  const { title, price } = product;
  return (
    <Item>
      <figure>
        <img
          src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          alt=''
        />
      </figure>
      <p className='product-name'>{title}</p>
      <button className='remove-btn'>Remove</button>
      <div className='quantity-selector'>
        <select name='quantity' id='quantity'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <span className='product-price'>${price}</span>
    </Item>
  );
};

export default CartItem;
