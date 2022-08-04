import styled from 'styled-components';

export const ProductDetailsPage = styled.section`
  margin-bottom: 6.4rem;
`;

export const ProductInfo = styled.section`
  margin-bottom: 6.4rem;
  h2 {
    margin: 2.4rem 0 0.8rem;
  }
  .product-desc {
    margin: 2.4rem 0 3.2rem;
  }
  a {
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
    border-radius: 0.2rem;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      border: 1px solid var(--primary-dark-text);
      border-radius: 0.2rem;
      position: absolute;
      left: 0.4rem;
      top: 0.4rem;
    }
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
