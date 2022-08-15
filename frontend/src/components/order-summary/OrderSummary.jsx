import React from 'react';
import { StyledOrderSummary, Header, CostBreakdown } from './style';
import { useCart } from '../../providers/CartProvider';

const OrderSummary = () => {
  // calculate order summary based on cart context
  const { cart, order } = useCart();

  return (
    <>
      {cart.length > 0 && (
        <StyledOrderSummary>
          <Header>
            <h3>Order Summary</h3>
            <span>{cart.length} Item(s)</span>
          </Header>
          <CostBreakdown>
            <article className='subtotal'>
              <p>Items subtotal</p>
              <span>${order.subtotal}</span>
            </article>
            <article className='shipping'>
              <p>Shipping fee</p>
              <span>${order.shippingFee}</span>
            </article>
            <article className='tax'>
              <p>Estimated tax</p>
              <span>TBD</span>
            </article>
            <article className='total-cost'>
              <p>Total</p>
              <span>${order.total}</span>
            </article>
          </CostBreakdown>
        </StyledOrderSummary>
      )}
    </>
  );
};

export default OrderSummary;
