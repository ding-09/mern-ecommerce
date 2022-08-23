import React from 'react';
import { StyledNavLinks } from './style';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ setMenu }) => {

  // close menu when link is clicked
  const handleClick = (e) => {
    let tagName = e.target.tagName;
    if (tagName.toLowerCase() === 'a') {
      setMenu(false);
    }
  };

  return (
    <StyledNavLinks onClick={handleClick}>
      <li>
        <NavLink to='products?category=women'>Women</NavLink>
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
