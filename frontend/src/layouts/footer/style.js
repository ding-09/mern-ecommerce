import styled from 'styled-components';

export const GridContainer = styled.div`
  padding: 4rem 0;
  display: grid;
  grid-gap: 2.4rem;
  gap: 2.4rem;
  text-align: center;
  place-items: center;
  background-color: var(--primary-dark-text);
  a,
  .copyright {
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

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    padding: 4rem 2.4rem;
    grid-gap: 4rem;
    gap: 4rem;
    grid-template-areas:
      'logo socials'
      'navlinks copyright';
    justify-content: space-between;
    place-items: start start;
    .logo {
      grid-area: logo;
    }
    .nav-links {
      grid-area: navlinks;
      ul {
        display: inline-grid;
        grid-template-columns: repeat(4, auto);
        li {
          padding: 0;
        }
      }
    }
    .copyright {
      grid-area: copyright;
      font-size: 1.2rem;
    }
  }

  /* MEDIA QUERIES */

  @media screen and (min-width: 1024px) {
    padding: 6rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 6rem 10rem;
  }

  @media screen and (min-width: 1400px) {
    padding: 6rem 16rem;
  }
`;

export const Socials = styled.section`
  ul {
    display: flex;
    li {
      margin: 0 0.6rem;
    }
  }
  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    grid-area: socials;
    place-self: end;
  }
`;
