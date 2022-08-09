import React from 'react';
import { StyledProductCard, Figure, ProductName, ProductPrice } from './style';

const ProductCard = ({ data }) => {
  const { image, price, title } = data;
  return (
    <StyledProductCard>
      <Figure>
        <img src={image} alt={title} />
      </Figure>
      <ProductName>{title}</ProductName>
      <ProductPrice>${price}</ProductPrice>
    </StyledProductCard>
  );
};

export default ProductCard;
