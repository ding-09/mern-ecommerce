import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = ({ children }) => {
  return (
    <main>
      {children}
      <Outlet />
    </main>
  );
};

export default Main;
