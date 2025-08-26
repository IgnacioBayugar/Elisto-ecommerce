import './styles/main.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './features/cart/context/CartContext';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Help from './pages/Help';
import ProductDetail from './features/products/pages/ProductDetail/ProductDetail';
import CartPage from './features/cart/pages/CartPage';
import CheckoutPage from './features/checkout/pages/CheckoutPage';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setSelectedCategory(null);
    }
  }, [location.pathname]);

  return (
    <CartProvider>
      <header>
        <Navbar onCategorySelect={setSelectedCategory} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}