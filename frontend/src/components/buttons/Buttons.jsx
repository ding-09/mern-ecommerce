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

export const BorderButton = ({ text, linkTo, as = 'a', onClick }) => {
  return (
    <StyledBorderButton href={linkTo} as={as} onClick={onClick}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledBorderButton>
  );
};
