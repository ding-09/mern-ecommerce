import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsPage, ProductInfo, SuggestedItems } from './style';
import { BorderButton } from '../../components/buttons';
import useFetch from '../../hooks/useFetch';

const ProductDetails = () => {
  // read productId from url param and
  // fetch that particular product's data
  const { productId } = useParams();
  const { productData } = useFetch(null, null, productId);
  const { image, category, title, price, description } = productData;
  return (
    <>
      {productData && (
        <ProductDetailsPage>
          <ProductInfo>
            <figure>
              <img src={image} alt={title} />
            </figure>
            <h2>{title}</h2>
            <p className='product-price'>${price}</p>
            <p className='product-desc'>{description}</p>
            <BorderButton text='Add to bag' linkTo='#' />
          </ProductInfo>
          <SuggestedItems>
            <h3>You might also like</h3>
          </SuggestedItems>
        </ProductDetailsPage>
      )}
    </>
  );
};

export default ProductDetails;
