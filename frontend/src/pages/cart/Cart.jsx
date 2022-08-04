import React from 'react';
import {
  CartPage,
  Header,
  ItemSummary,
  Item,
  OrderSummary,
  CostBreakdown,
  ButtonGroup
} from './style';
import { BorderButton, Button } from '../../components/buttons';

const Cart = () => {
  return (
    <CartPage>
      <ItemSummary>
        <Header>
          <h2>Shopping Bag</h2>
        </Header>
        <Item>
          <figure>
            <img
              src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt=''
            />
          </figure>
          <p className='product-name'>Product Name</p>
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
          <span className='product-price'>$14.99</span>
        </Item>
      </ItemSummary>
      <OrderSummary>
        <Header>
          <h3>Order Summary</h3>
          <span>1 Item(s)</span>
        </Header>
        <CostBreakdown>
          <article className='subtotal'>
            <p>Items subtotal</p>
            <span>$14.99</span>
          </article>
          <article className='shipping'>
            <p>Shipping fee</p>
            <span>$0.99</span>
          </article>
          <article className='tax'>
            <p>Estimated tax</p>
            <span>TBD</span>
          </article>
          <article className='total-cost'>
            <p>Total</p>
            <span>$15.98</span>
          </article>
        </CostBreakdown>
      </OrderSummary>
      <ButtonGroup>
        <BorderButton text='Checkout' linkTo='/checkout' />
        <BorderButton text='Continue shopping' linkTo='/products' />
      </ButtonGroup>
    </CartPage>
  );
};

export default Cart;
