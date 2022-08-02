import React, { useState } from 'react';
import NavLinks from '../../components/navlinks'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { StyledHeader, Nav, Menu } from './style';
import { motion } from 'framer-motion';

const Header = () => {
  // toggle menu state
  const [menu, setMenu] = useState(false);

  // toggle menu function
  const toggleMenu = () => {
    setMenu(!menu);
  };

  // framer motion animatin for menu toggle
  const variants = {
    open: { opacity: [0, 1] },
    closed: { opacity: [0, 1] },
  };

  return (
    <StyledHeader>
      <Nav>
        {/* toggle open/close button based on menu state */}
        {/* {menu ? (
          <button className='icon close-icon' aria-label='Close menu' onClick={toggleMenu}>
            <CgClose />
          </button>
        ) : (
          <button className='icon menu-icon' aria-label='Open menu' onClick={toggleMenu}>
            <HiOutlineMenuAlt4 />
          </button>
        )} */}
        <motion.button
          className='icon menu-icon'
          animate={menu ? 'open' : 'closed'}
          variants={variants}
          initial={false}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
          aria-label={menu ? 'Close menu' : 'Open menu'}
        >
          {menu ? <CgClose /> : <HiOutlineMenuAlt4 />}
        </motion.button>
        <a href='/'>
          <Logo />
        </a>
        <a href='/cart' className='icon bag-icon'>
          <MdOutlineShoppingBag />
        </a>
        {/* Opened Menu */}
        {menu && (
          <Menu>
            <NavLinks/>
          </Menu>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
