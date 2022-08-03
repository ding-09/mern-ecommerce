import React from 'react';
import {
  ProductsPage,
  ProductCards,
  Header,
  Heading,
  ItemCount,
} from './style';
import ProductCard from '../../components/cards/products';

const Products = () => {
  return (
    <ProductsPage>
      <Header>
        <Heading>Heading</Heading>
        <ItemCount>(6 items)</ItemCount>
      </Header>
      <ProductCards>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductCards>
    </ProductsPage>
  );
};

export default Products;
