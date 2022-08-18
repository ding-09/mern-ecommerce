import React, { useState } from 'react';
import {
  CheckoutPage,
  Header,
  Form,
  FormSection,
  PaymentSection,
  FormGroup,
  BillingGroup,
  ButtonGroup,
} from './style';
import OrderSummary from '../../components/order-summary';
import { BorderButton } from '../../components/buttons';
import {
  validateEmail,
  validateField,
  handleFormSubmit,
} from '../../utils/validateForm';
import { useCart } from '../../providers/CartProvider';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  // toggle billing form
  const [showBilling, setShowBilling] = useState(false);

  const { setCheckedOut } = useCart();

  const handleCheckbox = () => {
    setShowBilling(!showBilling);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const submitted = handleFormSubmit(e);
    if (submitted) {
      setCheckedOut(true);
      navigate('/success', { replace: true });
    }
  };

  return (
    <CheckoutPage>
      <Header>
        <h2>Checkout</h2>
      </Header>
      <Form
        method='post'
        noValidate
        onSubmit={handleSubmit}
        name='checkoutForm'
      >
        <FormSection>
          <h3>Contact information</h3>
          <FormGroup>
            <label htmlFor='email'>Email *</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              onChange={validateEmail}
              onBlur={validateEmail}
            />
            <span className='error'>Please enter a valid email</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor='phone'>Phone number *</label>
            <input
              type='tel'
              name='phone'
              id='phone'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
        </FormSection>
        <FormSection>
          <h3>Shipping address</h3>
          <FormGroup>
            <label htmlFor='first-name'>First name *</label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor='last-name'>Last name *</label>
            <input
              type='text'
              name='last-name'
              id='last-name'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
          <FormGroup className='form-group'>
            <label htmlFor='address'>Address *</label>
            <input
              type='text'
              name='address'
              id='address'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
        </FormSection>
        <FormSection>
          <h3>Billing address</h3>
          <BillingGroup>
            <label htmlFor='billing'>Same as shipping address</label>
            <input
              type='checkbox'
              name='billing'
              id='billing'
              defaultChecked
              onChange={handleCheckbox}
            />
          </BillingGroup>
          {/* show form if checkbox is unchecked */}
          {showBilling && (
            <div className='diff-billing'>
              <FormGroup>
                <label htmlFor='billing-first-name'>First name *</label>
                <input
                  type='text'
                  name='billing-first-name'
                  id='billing-first-name'
                  required
                  onChange={validateField}
                  onBlur={validateField}
                />
                <span className='error'>Please fill out this field</span>
              </FormGroup>
              <FormGroup>
                <label htmlFor='billing-last-name'>Last name *</label>
                <input
                  type='text'
                  name='billing-last-name'
                  id='billing-last-name'
                  required
                  onChange={validateField}
                  onBlur={validateField}
                />
                <span className='error'>Please fill out this field</span>
              </FormGroup>
              <FormGroup>
                <label htmlFor='billing-address'>Address *</label>
                <input
                  type='text'
                  name='billing-address'
                  id='billing-address'
                  required
                  onChange={validateField}
                  onBlur={validateField}
                />
                <span className='error'>Please fill out this field</span>
              </FormGroup>
            </div>
          )}
        </FormSection>
        <PaymentSection>
          <h3>Payment information</h3>
          <FormGroup>
            <label htmlFor='card-num'>Card number *</label>
            <input
              type='number'
              name='card-num'
              id='card-num'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor='card-exp'>Expiration date *</label>
            <input
              type='text'
              name='card-exp'
              id='card-exp'
              maxLength='4'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
          <FormGroup>
            <label htmlFor='cvv'>CVV *</label>
            <input
              type='text'
              name='cvv'
              id='cvv'
              required
              onChange={validateField}
              onBlur={validateField}
            />
            <span className='error'>Please fill out this field</span>
          </FormGroup>
        </PaymentSection>
        <OrderSummary />
        <ButtonGroup>
          <BorderButton as='button' type='submit' text='Place Order' />
          <BorderButton text='Back to cart' linkTo='/cart' />
        </ButtonGroup>
      </Form>
    </CheckoutPage>
  );
};

export default Checkout;
