import styled from 'styled-components';

export const StyledSizeSelector = styled.div`
  margin-bottom: 3.2rem;
  > label {
    display: block;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }
`;

export const SizeGroup = styled.div`
  display: flex;
`;

export const FormGroup = styled.div`
  margin-right: 1.4rem;
  min-width: 4rem;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #d9d9d9;
    border-radius: 0.2rem;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    &:checked {
      border: 2px solid #1b1b1b;
    }
  }
`;
