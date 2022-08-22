import React from 'react';
import useSimilarProducts from '../../hooks/useSimilarProducts';
import ProductCard from '../../components/cards/products';

const SimilarProducts = ({ category, productId }) => {
  const [similarProducts] = useSimilarProducts(category, productId);
  return (
    <>
      {similarProducts.length > 0 && (
        <>
          {similarProducts.map((product, index) => (
            <ProductCard data={product} key={index}/>
          ))}
        </>
      )}
    </>
  );
};

export default SimilarProducts;
