import styled from 'styled-components';

export const CheckoutPage = styled.section`
  /* MEDIA QUERIES */
  @media screen and (min-width: 1024px) {
    max-width: 70%;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    max-width: 65%;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    input {
      font-size: 1.4rem;
    }
    .error {
      font-size: 1.2rem;
    }
  }
`;

export const FormSection = styled.section`
  margin-bottom: 2.4rem;
  h3 {
    margin-bottom: 1.2rem;
    font-weight: 500;
  }
`;

export const PaymentSection = styled(FormSection)`
  display: grid;
  grid-template-areas:
    'heading heading'
    'cardNum cardNum'
    'exp cvv';
  grid-column-gap: 1rem;
  margin-bottom: 3.2rem;
  h3 {
    grid-area: heading;
  }
  div:nth-child(2) {
    grid-area: cardNum;
  }
  div:nth-child(3) {
    grid-area: exp;
  }
  div:nth-child(4) {
    grid-area: cvv;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    grid-template-areas:
      'heading heading heading heading'
      'cardNum cardNum exp cvv';
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  label {
    margin-bottom: 0.4rem;
  }
  input {
    scroll-margin-top: 3rem;
    border: 1px solid black;
    border-radius: 0.2rem;
    min-height: 3rem;
    padding-left: 0.8rem;
    &:focus:invalid {
      outline: 1px solid #ff2f2f;
      border: none;
    }
    &:focus:valid {
      outline: 1px solid #4c956c;
      border: none;
    }
  }
  .error {
    padding-top: 0.8rem;
    display: none;
    color: #ef233c;
    font-weight: 500;
  }
`;

export const BillingGroup = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  label {
    order: 2;
    margin-left: 1rem;
  }
  input[type='checkout'] {
    background-color: black;
  }
`;

export const ButtonGroup = styled.section`
  margin-bottom: 4rem;
  button {
    min-width: 100%;
    margin-bottom: 2rem;
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
  }
  a:last-child {
    background-color: var(--primary-white-bg);
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    > * {
      flex-basis: 48%;
      cursor: pointer;
    }
    button {
      min-width: 0;
      margin: 0;
    }
  }
`;
