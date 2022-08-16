import React from 'react';
import {
  ModalBg,
  ModalContent,
  Header,
  CartSummary,
  CartItem,
  ButtonGroup,
} from './style';
import { BorderButton } from '../../components/buttons';
import { CgClose } from 'react-icons/cg';
import { BsCheckSquareFill } from 'react-icons/bs';
import { useCart } from '../../providers/CartProvider';

const CartModal = ({ modal, showModal }) => {
  const { cart } = useCart();
  return (
    <>
      {modal && (
        <ModalBg>
          <ModalContent>
            <Header>
              <p>
                <BsCheckSquareFill />
                <span>Added to bag</span>
              </p>
              <CgClose
                onClick={() => {
                  showModal(false);
                }}
              />
            </Header>
            <CartSummary>
              {cart.map((cartProduct) => (
                <CartItem>
                  <figure>
                    <img src={cartProduct.image} alt={cartProduct.title} />
                  </figure>
                  <div className='item-details'>
                    <h3>{cartProduct.title}</h3>
                    <span className='quantity'>Qty: {cartProduct.qty}</span>
                    <span className='price'>${cartProduct.price}</span>
                  </div>
                </CartItem>
              ))}
            </CartSummary>
            <ButtonGroup>
              <BorderButton text='Checkout' linkTo='/checkout' />
              <BorderButton text='Go to cart' linkTo='/cart' />
            </ButtonGroup>
          </ModalContent>
        </ModalBg>
      )}
    </>
  );
};

export default CartModal;
