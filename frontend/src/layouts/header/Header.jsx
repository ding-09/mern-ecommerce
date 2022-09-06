import React, { useState, useEffect } from 'react';
import NavLinks from '../../components/navlinks';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CgClose } from 'react-icons/cg';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { StyledHeader, Nav, Menu, ItemCount } from './style';
import { motion } from 'framer-motion';
import { useCart } from '../../providers/CartProvider';
import { Link, useLocation } from 'react-router-dom';

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
  const { totalItems } = useCart();

  // state to toggle between mobile and desktop menu
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const { key } = useLocation();

  // close menu when URL changes
  // detect by using location.key
  useEffect(() => {
    setMenu(false);
  }, [key]);

  useEffect(() => {
    // check initial width to correctly show the right nav
    const initialWidth = window.innerWidth;
    if (initialWidth >= 1024) {
      setShowMobileMenu(false);
    }

    // handle resize
    const handleResize = (e) => {
      let width = e.target.innerWidth;
      if (width >= 1024) {
        setMenu(false);
        setShowMobileMenu(false);
      } else {
        setShowMobileMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <Nav showMobileMenu={showMobileMenu}>
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
        <Link to='/' aria-label='Site logo'>
          <Logo />
        </Link>
        {!showMobileMenu && <NavLinks />}
        <Link
          to='cart'
          className='icon bag-icon'
          aria-label='Shopping bag icon'
        >
          <MdOutlineShoppingBag />
          {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
        </Link>
        {/* Opened Menu */}
        {menu && (
          <Menu>
            <NavLinks setMenu={setMenu} />
          </Menu>
        )}
      </Nav>
    </StyledHeader>
  );
};

export default Header;
