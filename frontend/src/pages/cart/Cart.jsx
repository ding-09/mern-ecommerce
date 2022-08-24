import React, { useState, useEffect } from 'react';
import { CartPage, Header, ItemSummary, ButtonGroup } from './style';
import { BorderButton } from '../../components/buttons';
import OrderSummary from '../../components/order-summary';
import { useCart } from '../../providers/CartProvider';
import CartItem from './CartItem';
import EmptyCart from '../../components/empty-state';

const Cart = () => {
  // update bag based on cart using context
  const { cart } = useCart();

  // state to keep track of whether to
  // disable or enable button based on cart
  const [disableButton, setDisableButton] = useState(true);

  // useEffect to update button depending on cart length
  useEffect(() => {
    cart.length > 0 ? setDisableButton(false) : setDisableButton(true);
  }, [cart]);

  return (
    <CartPage>
      <ItemSummary>
        <Header>
          <h2>Shopping Bag</h2>
        </Header>
        {cart.length > 0 ? (
          cart.map((item, index) => <CartItem product={item} key={index} />)
        ) : (
          <EmptyCart />
        )}
      </ItemSummary>
      <OrderSummary />
      <ButtonGroup disableButton={disableButton}>
        <BorderButton text='Checkout' linkTo='/checkout' />
        <BorderButton text='Continue shopping' linkTo='/products' />
      </ButtonGroup>
    </CartPage>
  );
};

export default Cart;
