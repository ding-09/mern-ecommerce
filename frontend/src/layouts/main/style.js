import styled from 'styled-components';

export const StyledMain = styled.main`
  /* apply margin to pages that are not the index page */
  margin: ${(props) => (props.location === '/' ? '' : '2.4rem 1.6rem')};
  scroll-margin-top: 100rem;

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    margin: ${(props) => (props.location === '/' ? '' : '4rem')};
  }

  @media screen and (min-width: 1024px) {
    margin: 4rem 5.6rem;
  }
`;
