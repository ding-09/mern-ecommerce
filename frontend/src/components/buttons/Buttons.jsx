import React from 'react';
import { StyledButton, StyledBorderButton } from './style';
import { BsArrowRightShort } from 'react-icons/bs';

export const Button = ({ text, linkTo }) => {
  return (
    <StyledButton to={linkTo}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledButton>
  );
};

export const BorderButton = ({ as, type, text, linkTo, onClick }) => {
  return (
    <StyledBorderButton to={linkTo} as={as} type={type} onClick={onClick}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledBorderButton>
  );
};
