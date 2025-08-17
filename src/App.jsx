import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductList from './features/products/components/ProductList/ProductList';
import { useState } from 'react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Navbar onCategorySelect={setSelectedCategory} />
      <ProductList category={selectedCategory} />
      <Footer />
    </div>
  );
}