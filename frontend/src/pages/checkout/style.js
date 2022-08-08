import styled from 'styled-components';

export const CheckoutPage = styled.section``;

export const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form``;

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
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  label {
    margin-bottom: 0.4rem;
  }
  input {
    min-height: 3rem;
    padding-left: 0.8rem;
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
    width: 100%;
    margin-bottom: 2rem;
    background-color: var(--primary-dark-text);
    color: var(--primary-white-text);
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;
  }
  a:last-child {
    background-color: var(--primary-white-bg);
  }
`;
