import styled from 'styled-components';

export const StyledNavLinks = styled.ul`
  display: grid;
  grid-gap: 1.2rem;
  gap: 1.2rem;
  opacity: 0.8;

  /* MEDIA QUERIES */
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, auto);
    grid-gap: 0 4.8rem;
    gap: 0 4.8rem;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: repeat(4, auto);
    grid-gap: 0 8rem;
    gap: 0 8rem;
  }
`;
