import React from 'react';
import { StyledProductCard, Figure, ProductName, ProductPrice } from './style';
import { Link } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const { image, price, title, _id } = data;

  return (
    <StyledProductCard>
      <Link to={`/products/${_id}`}>
        <Figure>
          <img src={image} alt={title} />
        </Figure>
        <ProductName>{title}</ProductName>
      </Link>
      <ProductPrice>${price}</ProductPrice>
    </StyledProductCard>
  );
};

export default ProductCard;
