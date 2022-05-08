import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products/>} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
