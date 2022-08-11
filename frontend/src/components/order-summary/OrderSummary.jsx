import React from 'react';
import { StyledOrderSummary, Header, CostBreakdown } from './style';
import { useCart } from '../../providers/CartProvider';

const OrderSummary = () => {
  // calculate order summary based on cart context
  const { cart } = useCart();
  
  const shippingFee = 0.99;
  

  return (
    <StyledOrderSummary>
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
    </StyledOrderSummary>
  );
};

export default OrderSummary;
