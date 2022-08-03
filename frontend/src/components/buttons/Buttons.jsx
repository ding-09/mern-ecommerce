import React from 'react';
import { StyledButton } from './style';
import { BsArrowRightShort } from 'react-icons/bs';

export const Button = ({ text, linkTo }) => {
  return (
    <StyledButton href={linkTo}>
      <span className='button-text'>{text}</span>
      <BsArrowRightShort />
    </StyledButton>
  );
};

