import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {StyledMain} from './style'

const Main = ({ children }) => {
  // check current location's pathname to determine 
  // appropriate styles 
  const location = useLocation().pathname; 

  return (
    <StyledMain location={location}>
      {children}
      <Outlet />
    </StyledMain>
  );
};

export default Main;
