import styled from 'styled-components';

export const OrderConfirmationPage = styled.section`
  margin-bottom: 4rem;
  a {
    background-color: var(--primary-white-bg);
  }
`;

export const Header = styled.header`
  margin-bottom: 3.2rem;
  h1 {
    font-size: 1.6rem;
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
`;
