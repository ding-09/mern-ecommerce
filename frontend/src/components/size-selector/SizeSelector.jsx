import React from 'react';
import { StyledSizeSelector, SizeGroup } from './style';
import Size from './Size';

const SizeSelector = () => {
  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  return (
    <StyledSizeSelector>
      <label htmlFor='size-selector'>Select size:</label>
      <SizeGroup>
        {sizes.map((size, index) => (
          <Size size={size} key={index} />
        ))}
      </SizeGroup>
    </StyledSizeSelector>
  );
};

export default SizeSelector;
