import React from 'react';
import { StyledCard } from './style';
import { Button } from '../../buttons';

const Card = ({ data, gridPos }) => {
  const { image, heading, linkTo } = data;
  return (
    <StyledCard image={image} gridPos={gridPos}>
      <div className="dark-overlay"></div>
      <h2>{heading}</h2>
      <Button text='Shop now' linkTo={linkTo}/>
    </StyledCard>
  );
};

export default Card;
