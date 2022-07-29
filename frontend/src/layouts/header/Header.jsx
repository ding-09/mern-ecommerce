import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { StyledHeader, Nav, Menu } from './style';

const Header = () => {
  // toggle menu state
  const [menu, setMenu] = useState(false);

  // toggle menu function
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <StyledHeader>
      <Nav>
        {/* toggle open/close button based on menu state */}
        {menu ? (
          <button className='icon close-icon' aria-label='Close menu' onClick={toggleMenu}>
            <CgClose />
          </button>
        ) : (
          <button className='icon menu-icon' aria-label='Open menu' onClick={toggleMenu}>
            <HiOutlineMenuAlt4 />
          </button>
        )}
        <a href='/'>
          <Logo />
        </a>
        <a href='/cart' className='icon bag-icon'>
          <MdOutlineShoppingBag />
        </a>
        {/* Opened Menu */}
        {menu && (
          <Menu>
            <ul>
              <li>
                <a href='/women'>Women</a>
              </li>
              <li>
                <a href='/men'>Men</a>
              </li>
              <li>
                <a href='/kids'>Kids</a>
              </li>
              <li>
                <a href='/sale'>Sale</a>
              </li>
            </ul>
          </Menu>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
