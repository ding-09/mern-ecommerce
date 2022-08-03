import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1.6rem 2.4rem;
  display: flex;
  position: relative;
  box-shadow: 0 0.2rem 1rem 0 rgba(18, 18, 18, 0.2);
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
  padding: 1.6rem 2.4rem 3.2rem;
  background-color: var(--primary-white-bg);
  li {
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      color: var(--secondary-dark-text);
    }
  }
`;
