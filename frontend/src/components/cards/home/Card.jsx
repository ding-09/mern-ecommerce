import React from 'react';
import { StyledCard } from './style';
import { Button } from '../../buttons';

const Card = ({ data }) => {
  const { image, heading, linkTo } = data;
  return (
    <StyledCard img={image}>
      <div className="dark-overlay"></div>
      <h2>{heading}</h2>
      <Button text='Shop now' linkTo={linkTo}/>
    </StyledCard>
  );
};

export default Card;
