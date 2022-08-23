import React, { useEffect } from 'react';
import { CartPage, Header, ItemSummary, ButtonGroup } from './style';
import { BorderButton } from '../../components/buttons';
import OrderSummary from '../../components/order-summary';
import { useCart } from '../../providers/CartProvider';
import CartItem from './CartItem';

const Cart = () => {
  // update bag based on cart using context
  const { cart } = useCart();
  
  return (
    <CartPage>
      <ItemSummary>
        <Header>
          <h2>Shopping Bag</h2>
        </Header>
        {cart.length > 0 &&
          cart.map((item, index) => <CartItem product={item} key={index} />)}
      </ItemSummary>
      <OrderSummary />
      <ButtonGroup>
        <BorderButton text='Checkout' linkTo='/checkout' />
        <BorderButton text='Continue shopping' linkTo='/products' />
      </ButtonGroup>
    </CartPage>
  );
};

export default Cart;
