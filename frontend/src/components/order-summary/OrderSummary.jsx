import React from 'react';
import { StyledOrderSummary, Header, CostBreakdown } from './style';
import { useCart } from '../../providers/CartProvider';

const OrderSummary = () => {
  const { totalItems, order } = useCart();

  return (
    <>
      {totalItems > 0 && (
        <StyledOrderSummary>
          <Header>
            <h3>Order Summary</h3>
            <span>{totalItems} Item(s)</span>
          </Header>
          <CostBreakdown>
            <article className='subtotal'>
              <p>Items subtotal</p>
              <span>${order.subtotal.toFixed(2)}</span>
            </article>
            <article className='shipping'>
              <p>Shipping fee</p>
              <span>${order.shippingFee}</span>
            </article>
            <article className='tax'>
              <p>Estimated tax</p>
              <span>${order.tax.toFixed(2)}</span>
            </article>
            <article className='total-cost'>
              <p>Total</p>
              <span>${order.total.toFixed(2)}</span>
            </article>
          </CostBreakdown>
        </StyledOrderSummary>
      )}
    </>
  );
};

export default OrderSummary;
