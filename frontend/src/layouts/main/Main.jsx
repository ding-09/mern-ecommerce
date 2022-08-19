import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { StyledMain } from './style';

const Main = ({ children }) => {
  // check current location's pathname to determine
  // appropriate styles
  const location = useLocation().pathname;
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return (
    <StyledMain location={location} ref={pageRef}>
      {children}
      <Outlet />
    </StyledMain>
  );
};

export default Main;
