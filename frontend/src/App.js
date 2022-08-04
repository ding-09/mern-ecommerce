import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layouts
import Header from './layouts/header';
import Main from './layouts/main';
import Footer from './layouts/footer';

// pages
import Home from './pages/home';
import Products from './pages/products';
import ProductDetails from './pages/product-details';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index element={<Products />} />
            <Route path='sale' element={<Products />} />
            <Route path=':productId' element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
