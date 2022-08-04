import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsPage, ProductInfo, SuggestedItems } from './style';
import ProductCard from '../../components/cards/products';
import { BorderButton } from '../../components/buttons';

const ProductDetails = () => {
  return (
    <ProductDetailsPage>
      <ProductInfo>
        <figure>
          <img
            src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            alt=''
          />
        </figure>
        <h2>Product Name</h2>
        <p className='product-price'>$24.99</p>
        <p className='product-desc'>Product description</p>
        <BorderButton text='Add to bag' linkTo='/cart'/>
      </ProductInfo>
      <SuggestedItems>
        <h3>You might also like</h3>
        <ProductCard />
        <ProductCard />
      </SuggestedItems>
    </ProductDetailsPage>
  );
};

export default ProductDetails;
