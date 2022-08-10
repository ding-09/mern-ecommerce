import React from 'react';
import { StyledNavLinks } from './style';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <li>
        <NavLink to='/products?category=women'>Women</NavLink>
      </li>
      <li>
        <NavLink to='/products?category=men'>Men</NavLink>
      </li>
      <li>
        <NavLink to='/products?category=kids'>Kids</NavLink>
      </li>
      <li>
        <NavLink to='/products/sale'>Sale</NavLink>
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
