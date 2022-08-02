import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1.6rem 2.4rem;
  display: flex;
  border-bottom: 1px solid black;
  position: relative;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  button {
    border: none;
    background: none;
  }
  button,
  a {
    display: flex;
  }
  .icon {
    font-size: 2.2rem;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 1.4rem 2.4rem;
  background-color: var(--primary-white-bg);
  li {
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--accent-dark);
    a {
      color: var(--secondary-dark-text);
    }
  }
`;
