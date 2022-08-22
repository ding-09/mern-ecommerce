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
        <a href='/' className='logo'>
          <Logo />
        </a>
        <div className='nav-links'>
          <NavLinks />
        </div>
        <Socials>
          <ul>
            <li>
              <a>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a>
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
