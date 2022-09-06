import React from 'react';
import { FormGroup } from './style';

const Size = ({ size }) => {
  return (
    <FormGroup>
      <input type='radio' name='size' id={size} />
      <label htmlFor={size}>{size.toUpperCase()}</label>
    </FormGroup>
  );
};

export default Size;
