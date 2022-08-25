import styled from 'styled-components';

export const HomePage = styled.section`
  article {
    a {
      width: 15rem;
      font-size: 1.2rem;
    }
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    margin-bottom: 4rem;
    display: grid;
    grid-template-areas:
      'hero hero'
      'women men'
      'kids sale';
    grid-gap: 1.2rem;
    article:not(:first-child) {
      min-height: 45rem;
    }
  }
`;
