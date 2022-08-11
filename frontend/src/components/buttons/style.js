import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.4rem;
  border: 1px solid black;
  box-shadow: 0.2rem 0.2rem 0 0 var(--primary-white-bg);
  text-transform: uppercase;
  border-radius: 0.2rem;
  svg {
    font-size: 2rem;
  }
`;

export const StyledBorderButton = styled(StyledButton)`
  position: relative;
  box-shadow: none;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid var(--primary-dark-text);
    border-radius: 0.2rem;
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    z-index: -1;
  }
`;

