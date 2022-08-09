import React from 'react';
import { useSearchParams, useLocation} from 'react-router-dom';
import {
  ProductsPage,
  ProductCards,
  Header,
  Heading,
  ItemCount,
} from './style';
import ProductCard from '../../components/cards/products';
import useFetch from '../../hooks/useFetch';

const Products = () => {

  // useSearchParams hook allows a direct look into the query string
  // instead of the whole URL
  // in this case, we are looking directly for a category
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');

  // get location of current page
  const location = useLocation().pathname;

  // call useFetch custom hook and pass in category & locationn
  // to accurately fetch data
  const { productData } = useFetch(category, location);

  return (
    <ProductsPage>
      <Header>
        <Heading>{category}</Heading>
        <ItemCount>({productData.length} items)</ItemCount>
      </Header>
      <ProductCards>
        {productData.length > 0 &&
          productData.map((data, index) => (
            <ProductCard data={data} key={index} />
          ))}
      </ProductCards>
    </ProductsPage>
  );
};

export default Products;
