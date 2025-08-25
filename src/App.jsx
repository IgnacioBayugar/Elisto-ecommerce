import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './features/cart/context/CartContext';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Help from './pages/Help';
import ProductDetail from './features/products/pages/ProductDetail/ProductDetail';
import CartPage from './features/cart/pages/CartPage';
import CheckoutPage from './features/checkout/pages/CheckoutPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}