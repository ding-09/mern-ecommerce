import React, { useRef, useEffect } from 'react';
import { BorderButton } from '../../components/buttons';
import OrderSummary from '../../components/order-summary';
import { OrderConfirmationPage, Header, OrderNumber, OrderInfo } from './style';
import { useCart } from '../../providers/CartProvider';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  // only show order confirmation page if user checked out
  const { checkedOut } = useCart();

  // ref to page
  const pageRef = useRef();

  const location = useLocation();
  const { shippingInfo, billingInfo } = location.state;

  useEffect(() => {
    pageRef.current.scrollIntoView({ block: 'start' });
  }, []);

  return (
    <>
      {checkedOut ? (
        <OrderConfirmationPage ref={pageRef}>
          <Header>
            <h1>Your order has been placed!</h1>
            <OrderNumber>
              <span>Order #: </span>
              <span>1234567</span>
            </OrderNumber>
            <p>
              You will receive a confirmation e-mail shortly at{' '}
              <b>{shippingInfo.email}</b>
            </p>
          </Header>
          <OrderInfo>
            <section className='shipping-info'>
              <h2>Shipping</h2>
              <p>
                {shippingInfo.firstName} {shippingInfo.lastName}
              </p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.phone}</p>
              <p>{shippingInfo.email}</p>
            </section>
            <section className='billing-info'>
              <h2>Billing</h2>
              <p>{billingInfo.firstName}</p>
              <p>{billingInfo.address}</p>
              <p>{billingInfo.phone}</p>
              <p>{shippingInfo.email}</p>
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
