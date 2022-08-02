import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  border: 1px solid black;
  box-shadow: 0.2rem 0.2rem 0 0 var(--primary-white-bg);
  text-transform: uppercase;
  svg {
    font-size: 2rem;
  }
`;
