import styled from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.1rem);
`;

export const ModalContent = styled.section`
  background-color: var(--primary-white-bg);
  padding: 1.8rem 1.8rem 3.2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  > svg {
    font-size: 1.8rem;
    opacity: 0.6;
  }
  p {
    display: flex;
    align-items: center;
    svg {
      fill: #4ecb71;
      font-size: 1.2rem;
    }
    span {
      margin-left: 1.2rem;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }
`;

export const CartSummary = styled.section`
  margin-bottom: 4rem;
`;

export const CartItem = styled.article`
  display: flex;
  figure {
    max-width: 7rem;
  }
  .item-details {
    margin-left: 1.6rem;
    display: flex;
    flex-direction: column;
    .quantity {
      margin-bottom: auto;
    }
  }
`;

export const ButtonGroup = styled.section`
  display: flex;
  justify-content: space-between;
  a {
    flex-basis: 48%;
    &:first-child {
      background-color: var(--primary-dark-text);
      color: var(--primary-white-text);
    }
  }
`;
