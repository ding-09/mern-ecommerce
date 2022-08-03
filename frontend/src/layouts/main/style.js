import styled from 'styled-components';

export const StyledMain = styled.main`
  /* apply margin to pages that are not the index page */
  margin: ${(props) => (props.location === '/' ? '' : '2.4rem 1.2rem')};
`;
