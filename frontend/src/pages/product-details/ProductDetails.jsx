import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailsPage, ProductInfo, SuggestedItems } from './style';
import { BorderButton } from '../../components/buttons';
import useFetch from '../../hooks/useFetch';
import SimilarProducts from '../../components/similar-products';
import CartModal from '../../components/modal';
import { useCart } from '../../providers/CartProvider';
import SizeSelector from '../../components/size-selector';

const ProductDetails = () => {
  // read productId from url param and
  // fetch that particular product's data
  const { productId } = useParams();
  const { productData } = useFetch(null, null, productId);

  // use context here to add item to cart
  const { addProduct } = useCart();

  // state to manage modal
  const [modal, showModal] = useState(false);

  return (
    <>
      {productData && (
        <ProductDetailsPage>
          <ProductInfo>
            <figure>
              <img src={productData.image} alt={productData.title} />
            </figure>
            <div className='product-details'>
              <h2 className='product-title'>{productData.title}</h2>
              <span className='product-price'>${productData.price}</span>
              <p className='product-desc'>{productData.description}</p>
              <SizeSelector/>
              <BorderButton
                as='button'
                text='Add to bag'
                onClick={() => {
                  addProduct(productData);
                  showModal(true);
                }}
              />
            </div>
          </ProductInfo>
          <SuggestedItems>
            <h3>You might also like</h3>
            <SimilarProducts
              category={productData.category}
              productId={productId}
            />
          </SuggestedItems>
          <CartModal modal={modal} showModal={showModal} />
        </ProductDetailsPage>
      )}
    </>
  );
};

export default ProductDetails;
