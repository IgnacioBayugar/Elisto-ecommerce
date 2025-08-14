import { useEffect, useState } from 'react';
import { fetchProducts } from '../../api/productApi';
import Product from '../Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div className="text-center py-5">Cargando productos...</div>;

  return (
    <div className="idb-product-list container py-4">
      <div className="row g-4">
        {products.map(product => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
