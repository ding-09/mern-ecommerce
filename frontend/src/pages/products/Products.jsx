import React from 'react';
import { useSearchParams, Outlet } from 'react-router-dom'
import {
  ProductsPage,
  ProductCards,
  Header,
  Heading,
  ItemCount,
} from './style';
import ProductCard from '../../components/cards/products';

const Products = () => {
  // this hook allows a direct look into the query string 
  // instead of the whole URL
  
  // in this case, we are looking directly for a category
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('category'))

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
