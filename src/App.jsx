import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './features/products/components/ProductList/ProductList';
import ProductDetail from './features/products/pages/ProductDetail/ProductDetail';
import CartPage from './features/cart/pages/CartPage';
import { useState } from 'react';
import { CartProvider } from './features/cart/context/CartContext';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Navbar onCategorySelect={setSelectedCategory} />
          <Routes>
            <Route path="/" element={<ProductList category={selectedCategory} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}