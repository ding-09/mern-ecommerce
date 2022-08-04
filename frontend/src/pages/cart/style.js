import styled from 'styled-components';

export const CartPage = styled.section`
  margin-bottom: 5.6rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItemSummary = styled.section`
  margin-bottom: 5.6rem;
  header {
    margin-bottom: 2rem;
  }
`;

export const Item = styled.article`
  padding: 1.4rem 0;
  display: grid;
  grid-template-areas:
    'img product product product'
    'img btn btn btn'
    'img . . .'
    'img selector selector price';
  grid-template-columns: 10rem repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0 1.6rem;
  figure {
    grid-area: img;
    img {
      width: 10rem;
      height: 10rem;
      object-fit: cover;
    }
  }
  .product-name {
    grid-area: product;
  }
  .remove-btn {
    grid-area: btn;
    place-self: start;
    border: none;
    background: none;
    color: rgba(53, 119, 218, 1);
    font-size: 1.1rem;
  }
  .quantity-selector {
    grid-area: selector;
    align-self: end;
    select {
      min-width: 7.8rem;
      padding: 0.4rem 0.2rem;
      border: none;
      border-radius: 0.2rem;
      background-color: rgba(220, 220, 220, 0.5);
      font-size: 1.1rem;
      font-family: inherit;
    }
  }
  .product-price {
    grid-area: price;
    place-self: center end;
  }
`;

export const OrderSummary = styled.section`
  header {
    margin-bottom: 1.6rem;
    font-weight: 500;
    font-size: 1.4rem;
  }
  margin-bottom: 4.8rem;
`;

export const CostBreakdown = styled.section`
  > article {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
  .total-cost {
    padding-top: 1.2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: 500;
    font-size: 1.4rem;
  }
`;

export const ButtonGroup = styled.section`
  display: flex;
  flex-direction: column;
  a:first-child {
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
    margin-bottom: 2rem;
  }
  a:last-child {
    background-color: var(--primary-white-bg);
  }
`;
