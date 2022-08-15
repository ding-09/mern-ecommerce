import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsPage, ProductInfo, SuggestedItems } from './style';
import { BorderButton } from '../../components/buttons';
import useFetch from '../../hooks/useFetch';
import SimilarProducts from '../../components/similar-products';
import { useCart } from '../../providers/CartProvider';

const ProductDetails = () => {
  // read productId from url param and
  // fetch that particular product's data
  const { productId } = useParams();
  const { productData } = useFetch(null, null, productId);

  // use context here to add item to cart
  const { addProduct } = useCart();

  return (
    <>
      {productData && (
        <ProductDetailsPage>
          <ProductInfo>
            <figure>
              <img src={productData.image} alt={productData.title} />
            </figure>
            <h2>{productData.title}</h2>
            <span className='product-price'>${productData.price}</span>
            <p className='product-desc'>{productData.description}</p>
            <BorderButton
              as='button'
              text='Add to bag'
              onClick={() => {
                addProduct(productData);
              }}
            />
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
