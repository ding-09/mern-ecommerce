import React from 'react';
import NavLinks from '../../components/navlinks';
import { GridContainer, Socials } from './style';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as PinterestIcon } from '../../assets/icons/pinterest.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <GridContainer>
        <a href='/' className='logo' aria-label='Site logo'>
          <Logo />
        </a>
        <div className='nav-links'>
          <NavLinks />
        </div>
        <Socials>
          <ul>
            <li>
              <a aria-label='Placeholder Twitter icon'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a aria-label='Placeholder Facebook icon'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a aria-label='Placeholder Instagram icon'>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a aria-label='Placeholder Pinterest icon'>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a aria-label='Placeholder Twitter icon'>
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </Socials>
        <p className='copyright'>Copyright 2022. All rights reserved</p>
      </GridContainer>
    </footer>
  );
};

export default Footer;
