import styled from 'styled-components';

export const CartPage = styled.section`
  margin-bottom: 5.6rem;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-areas:
      'header header'
      'itemSummary orderSummary'
      'itemSummary buttonGroup';
    grid-template-columns: 2fr 1.5fr;
    gap: 0 4.8rem;
    > section:nth-child(3) {
      background-color: rgba(217, 217, 217, 0.3);
      padding: 1.6rem;
      margin-top: 2rem;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    grid-area: header;
  }
`;

export const ItemSummary = styled.section`
  margin: 1.2rem 0 3.2rem;

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    grid-area: itemSummary;
    margin: 0;
  }
`;

export const Item = styled.article`
  padding: 1.6rem 0;
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
      width: 12rem;
      height: 12rem;
      object-fit: cover;
    }
  }
  .product-name {
    grid-area: product;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .remove-btn {
    grid-area: btn;
    place-self: start;
    border: none;
    background: none;
    color: rgba(53, 119, 218, 1);
    font-size: 1.1rem;
    cursor: pointer;
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
    font-weight: 500;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    .remove-btn {
      font-size: 1.2rem;
    }
    .quantity-selector {
      select {
        min-width: 8.6rem;
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 0 2.4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonGroup = styled.section`
  display: flex;
  flex-direction: column;
  a:first-child {
    margin-bottom: 2rem;
    background-color: ${(props) =>
      props.disableButton ? '#d3d3d3' : 'var(--primary-dark-text)'};
    color: ${(props) =>
      props.disableButton ? 'rgba(0, 0, 0, 0.2)' : 'var(--primary-white-text)'};
    border: ${(props) => props.disableButton && '1px solid rgba(0, 0, 0, 0.1)'};
    &:after {
      border: ${(props) =>
        props.disableButton && '1px solid rgba(0, 0, 0, 0.2)'};
    }
    pointer-events: ${(props) => (props.disableButton ? 'none' : 'default')};
  }
  a:last-child {
    background-color: var(--primary-white-bg);
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    grid-area: buttonGroup;
  }
`;
