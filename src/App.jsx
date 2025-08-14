import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProductList from './features/products/components/ProductList/ProductList';

export default function App() {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
}