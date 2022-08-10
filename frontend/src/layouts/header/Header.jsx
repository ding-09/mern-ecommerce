import React, { useState } from 'react';
import NavLinks from '../../components/navlinks';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { StyledHeader, Nav, Menu, ItemCount } from './style';
import { motion } from 'framer-motion';
import { useCart } from '../../providers/CartProvider';

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

  // cart context
  const { cart } = useCart();

  return (
    <StyledHeader>
      <Nav>
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
          {cart.length > 0 && <ItemCount>{cart.length}</ItemCount>}
        </a>
        {/* Opened Menu */}
        {menu && (
          <Menu>
            <NavLinks />
          </Menu>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
