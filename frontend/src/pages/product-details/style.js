import styled from 'styled-components';

export const ProductDetailsPage = styled.section`
  margin-bottom: 6.4rem;

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
  }
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
    margin: 2rem 0 2.4rem;
  }
  button {
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
    border-radius: 0.2rem;
    min-width: 100%;
    cursor: pointer;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    figure {
      flex: 60%;
      margin-right: 2.4rem;
    }
    .product-details {
      flex: 40%;
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      position: sticky;
      top: 2.4rem;
      h2 {
        margin: 0 0 2rem;
      }
      .product-desc {
        margin: 2rem 0 3.2rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    figure {
      height: 80rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 10% 10%;
      }
    }
  }
`;

export const SuggestedItems = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > h3 {
    margin-bottom: 2.4rem;
    flex: 100%;
    font-size: 1.6rem;
  }
  article {
    flex-basis: 48%;
    max-width: 48%;
  }
  article:last-child {
    display: none;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    > h3 {
      font-size: 1.8rem;
      margin-bottom: 3.2rem;
    }
    article {
      flex-basis: 32%;
    }
    article:last-child {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) {
    > h3 {
      font-size: 2rem;
      margin-top: 2rem;
    }
  }
`;
