import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Products from './components/Products';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import About from './components/About';
import { CartProvider } from './contexts/CartContext';
import Success from './components/Success';
import Search from './components/Search';

function App() {
  return (
    <CartProvider>
      <Router basename="/ecommerce">
        <HeaderFooter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products/>} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="checkout" element={<Checkout/>} />
            <Route path="success" element={<Success />} />
            <Route path="search/:search" element={<Search />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </HeaderFooter>
      </Router>
    </CartProvider>
  );
}

export default App;
