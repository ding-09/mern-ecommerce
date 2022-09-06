import React from 'react';
import { StyledSizeSelector, SizeGroup } from './style';
import Size from './Size';

const SizeSelector = ({ setSize }) => {
  const sizes = ['xs', 's', 'm', 'l', 'xl'];

  return (
    <StyledSizeSelector>
      <label htmlFor='size-selector'>Select size:</label>
      <SizeGroup>
        {sizes.map((size, index) => (
          <Size size={size} key={index} setSize={setSize} />
        ))}
      </SizeGroup>
    </StyledSizeSelector>
  );
};

export default SizeSelector;
