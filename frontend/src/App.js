import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layouts
import Header from './layouts/header'
import Main from './layouts/main';
import Footer from './layouts/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>
          {/* <Route index element={<HomePage />} />
          <Route path='products'>
            <Route path=':category' element={<ProductsPage />} />
            <Route path='id/:productId' element={<ProductDetailsPage />} />
          </Route> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
