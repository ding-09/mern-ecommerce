import React from 'react';
import { FormGroup } from './style';

const Size = ({ size, setSize }) => {
  return (
    <FormGroup>
      <input
        type='radio'
        name='size'
        id={size}
        onClick={(e) => {
          setSize(e.target.id);
        }}
      />
      <label htmlFor={size}>{size.toUpperCase()}</label>
    </FormGroup>
  );
};

export default Size;
