import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsPage, ProductInfo, SuggestedItems } from './style';
import { BorderButton } from '../../components/buttons';
import useFetch from '../../hooks/useFetch';
import SimilarProducts from '../../components/similar-products';

const ProductDetails = () => {
  // read productId from url param and
  // fetch that particular product's data
  const { productId } = useParams();
  const { productData } = useFetch(null, null, productId);

  return (
    <>
      {productData && (
        <ProductDetailsPage>
          <ProductInfo>
            <figure>
              <img src={productData.image} alt={productData.title} />
            </figure>
            <h2>{productData.title}</h2>
            <p className='product-price'>${productData.price}</p>
            <p className='product-desc'>{productData.description}</p>
            <BorderButton text='Add to bag' linkTo='#' />
          </ProductInfo>
          <SuggestedItems>
            <h3>You might also like</h3>
            <SimilarProducts
              category={productData.category}
              productId={productId}
            />
          </SuggestedItems>
        </ProductDetailsPage>
      )}
    </>
  );
};

export default ProductDetails;
