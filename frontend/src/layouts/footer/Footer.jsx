import React from 'react';
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
        <a href='/'>
          <Logo />
        </a>
        <section className='nav-links'>
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
        </section>
        <Socials>
          <ul>
            <li>
              <a href='#'>
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a href='#'>
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
