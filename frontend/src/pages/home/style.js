import styled from 'styled-components';

export const HomePage = styled.section`
  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas:
      'hero hero'
      'women men'
      'kids sale';
    grid-gap: 1rem;
    padding: 1.2rem 1.2rem 3.2rem;
    article:not(:first-child) {
      min-height: 45rem;
    }
  }
`;
