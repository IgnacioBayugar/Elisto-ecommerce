import Product from '../features/products/components/Product/Product';
import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../features/products/api/productApi';

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProductsByCategory(10);
      const discounted = data.filter(p => p.discountPercentage > 0);
      setProducts(discounted);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <div className="text-center py-5">Cargando ofertas...</div>;

  return (
    <div className="idb-container container-fluid">
        <div className="container-fluid py-3 px-0">
          <div className="row g-3">
            {products.map(product => (
              <div className="col-6 col-md-4 col-lg-2 d-flex" key={product.id}>
                <Product product={product} showDiscount={true} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}