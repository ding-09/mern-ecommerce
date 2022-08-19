import React from 'react';
import { StyledNavLinks } from './style';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <li>
        <a href='/products?category=women'>Women</a>
      </li>
      <li>
        <a href='/products?category=men'>Men</a>
      </li>
      <li>
        <a href='/products?category=kids'>Kids</a>
      </li>
      <li>
        <a href='/products/sale'>Sale</a>
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
