import React from 'react';
import { FormGroup } from './style';

const Size = ({ size, setSize }) => {
  return (
    <FormGroup>
      <input
        type='radio'
        name='size'
        id={size}
        onChange={(e) => {
          setSize(e.target.id);
        }}
        defaultChecked={size === 'xs'}
      />
      <label htmlFor={size}>{size.toUpperCase()}</label>
    </FormGroup>
  );
};

export default Size;
