import styled from 'styled-components';

export const ProductDetailsPage = styled.section`
  margin-bottom: 6.4rem;
`;

export const ProductInfo = styled.section`
  margin-bottom: 6.4rem;
  h2 {
    margin: 2.4rem 0 0.8rem;
  }
  .product-price {
    font-weight: 500;
  }
  .product-desc {
    margin: 2rem 0 3.2rem;
  }
  button {
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
    border-radius: 0.2rem;
    min-width: 100%;
    cursor: pointer;
  }
`;

export const SuggestedItems = styled.section`
  display: flex;
  flex-wrap: wrap;
  > h3 {
    margin-bottom: 2.4rem;
    flex: 100%;
    font-weight: 500;
  }
  article {
    flex: 45%;
    margin: 0 0.6rem;
  }
`;
