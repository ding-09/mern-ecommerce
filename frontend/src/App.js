import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// layouts
import Header from './layouts/header'
import Main from './layouts/main';
import Footer from './layouts/footer';

// pages
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          {/* <Route path='products'>
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
