import React from 'react';
import { StyledProductCard, Figure, ProductName, ProductPrice } from './style';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const { image, price, title, _id } = data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${_id}`);
  }
  return (
    <StyledProductCard>
      <Figure onClick={handleClick}>
        <img src={image} alt={title} />
      </Figure>
      <ProductName onClick={handleClick}>{title}</ProductName>
      <ProductPrice>${price}</ProductPrice>
    </StyledProductCard>
  );
};

export default ProductCard;
