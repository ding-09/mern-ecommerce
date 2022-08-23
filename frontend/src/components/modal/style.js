import styled from 'styled-components';

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.1rem);
  opacity: 0;
  animation-name: openModal;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  @keyframes openModal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.section`
  background-color: var(--primary-white-bg);
  padding: 1.8rem 1.8rem 3.2rem;

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    padding: 2.4rem 2.4rem 4rem;
  }
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
  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    margin-bottom: 3.2rem;
    > svg {
      font-size: 2rem;
    }
    p {
      svg {
        font-size: 1.6rem;
      }
      span {
        font-size: 1.6rem;
      }
    }
  }
`;

export const CartSummary = styled.section`
  margin-bottom: 4rem;
`;

export const CartItem = styled.article`
  display: flex;
  margin-bottom: 1.6rem;
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

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    margin-bottom: 2.4rem;
    figure {
      max-width: 8rem;
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
