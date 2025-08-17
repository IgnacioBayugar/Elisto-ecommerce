import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../api/productApi';
import Product from '../Product/Product';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProductsByCategory(10);
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div className="text-center py-5">Cargando productos...</div>;

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="idb-product-list container py-4">
      <div className="row g-2">
        {filteredProducts.map(product => (
          <div className="col-6 col-md-4 col-lg-2 d-flex" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
