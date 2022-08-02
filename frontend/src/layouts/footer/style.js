import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 2.4rem;
  gap: 2.4rem;
  text-align: center;
  place-items: center;
  background-color: var(--primary-dark-text);
  a, .copyright {
    color: var(--primary-white-text);
  }
  .copyright {
    opacity: 0.6;
    font-size: 1rem;
  }
  svg {
    path {
      fill: var(--primary-white-text);
    }
  }
  .nav-links {
    ul li {
      padding-bottom: 0.6rem;
    }
  }
`;

export const Socials = styled.section`
  ul {
    display: flex; 
    li {
      margin: 0 0.6rem;
    }
  }
`
