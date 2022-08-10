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
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import OrderConfirmation from './pages/order-confirmation';

// cart provider
import { CartProvider } from './providers/CartProvider';

const App = () => {
  return (
    <CartProvider>
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
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='success' element={<OrderConfirmation />} />
          </Route>
          <Route path='*' element={<h1>??? 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
