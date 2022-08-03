import React from 'react'
import { StyledProductCard, Figure, ProductName, ProductPrice } from './style'

const ProductCard = () => {
  return (
    <StyledProductCard>
      <Figure>
        <img
          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          alt=''
        />
      </Figure>
      <ProductName>Product Name</ProductName>
      <ProductPrice>$24.99</ProductPrice>
    </StyledProductCard>
  );
}

export default ProductCard
