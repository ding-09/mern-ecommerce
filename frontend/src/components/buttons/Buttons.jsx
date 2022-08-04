import React from 'react';
import { StyledButton, StyledBorderButton } from './style';
import { BsArrowRightShort } from 'react-icons/bs';

export const Button = ({ text, linkTo }) => {
  return (
    <StyledButton href={linkTo}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledButton>
  );
};

export const BorderButton = ({ text, linkTo }) => {
  return (
    <StyledBorderButton href={linkTo}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledBorderButton>
  );
};
