import React, { useRef, useEffect } from 'react';
import { BorderButton } from '../../components/buttons';
import OrderSummary from '../../components/order-summary';
import { OrderConfirmationPage, Header, OrderNumber, OrderInfo } from './style';
import { useCart } from '../../providers/CartProvider';

const OrderConfirmation = () => {
  // only show order confirmation page if user checked out
  const { checkedOut } = useCart();

  // ref to page
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView({block: 'start'});
  }, []);

  return (
    <>
      {checkedOut ? (
        <OrderConfirmationPage ref={pageRef}>
          <Header>
            <h2>Your order has been placed!</h2>
            <OrderNumber>
              <span>Order #: </span>
              <span>1234567</span>
            </OrderNumber>
            <p>
              You will receive a confirmation e-mail shortly at{' '}
              <b>email@email.com</b>
            </p>
          </Header>
          <OrderInfo>
            <section className='shipping-info'>
              <h3>Shipping</h3>
              <p>Taro Cai-Ding</p>
              <p>123 Bear Street</p>
              <p>661123821</p>
              <p>taro@gmail.com</p>
            </section>
            <section className='billing-info'>
              <h3>Billing</h3>
              <p>Taro Cai-Ding</p>
              <p>123 Bear Street</p>
              <p>661123821</p>
              <p>taro@gmail.com</p>
            </section>
            <OrderSummary />
          </OrderInfo>
          <BorderButton text='Continue shopping' linkTo='/products' />
        </OrderConfirmationPage>
      ) : (
        <h2>I see you</h2>
      )}
    </>
  );
};

export default OrderConfirmation;
