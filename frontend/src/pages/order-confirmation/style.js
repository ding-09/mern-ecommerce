import styled from 'styled-components';

export const OrderConfirmationPage = styled.section`
  margin-bottom: 4rem;
  a {
    background-color: var(--primary-white-bg);
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    max-width: 50%;
    margin: 0 auto 5.8rem;;
  }
`;

export const Header = styled.header`
  margin-bottom: 3.2rem;
  h1 {
    font-size: 1.6rem;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const OrderNumber = styled.p`
  margin-top: 0.2rem;
  margin-bottom: 1.6rem;
`;

export const OrderInfo = styled.section`
  margin-bottom: 3.2rem;
  > section {
    h2 {
      font-size: 1.4rem;
      margin-bottom: 0.6rem;
    }
    background-color: rgba(217, 217, 217, 0.3);
    border-radius: 0.2rem;
    margin-bottom: 2rem;
    padding: 1.2rem;
    line-height: 2rem;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    > section {
      h2 {
        font-size: 1.6rem;
      }
      padding: 1.6rem 2.4rem;
      margin-bottom: 3.2rem;
    }
  }
`;
