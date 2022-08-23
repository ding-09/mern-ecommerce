import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1.6rem 2.4rem;
  display: flex;
  position: relative;
  box-shadow: 0 0.2rem 1rem 0 rgba(18, 18, 18, 0.2);

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    padding: 1.6rem 4rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 1.6rem 5.6rem;
  }
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
  .bag-icon {
    position: relative;
  }

  /* MEDIA QUERIES */
  @media screen and (min-width: 1024px) {
    .menu-icon {
      display: ${(props) => (props.showMobileMenu ? 'block' : 'none')};
    }
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

  /* MEDIA QUERIES */
  @media screen and (min-width: 768px) {
    padding: 2rem 4.8rem 4rem;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  left: 50%;
  bottom: 45%;
  width: 1.4rem;
  height: 1.4rem;
  background-color: var(--primary-dark-text);
  color: var(--primary-white-text);
  border-radius: 50%;
  font-size: 0.8rem;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
