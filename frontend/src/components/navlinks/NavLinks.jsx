import React from 'react';
import { StyledNavLinks } from './style';

const NavLinks = () => {
  return (
    <StyledNavLinks>
      <li>
        <a href='women'>Women</a>
      </li>
      <li>
        <a href='men'>Men</a>
      </li>
      <li>
        <a href='kids'>Kids</a>
      </li>
      <li>
        <a href='sale'>Sale</a>
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
