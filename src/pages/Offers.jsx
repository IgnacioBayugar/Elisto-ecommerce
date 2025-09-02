import Product from '../features/products/components/Product/Product';
import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../features/products/api/productApi';
import PaginationControls from '../components/common/PaginationControls/PaginationControls';

export default function Offers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

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

  const totalPages = Math.ceil(products.length / pageSize);
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="idb-container container-fluid">
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
      <div className="container-fluid">
        <div className="row g-3">
          {paginatedProducts.length === 0 ? (
            <div className="col-12 text-center py-5">No hay ofertas para mostrar.</div>
          ) : (
            paginatedProducts.map(product => (
              <div className="col-6 col-md-4 col-lg-2 d-flex" key={product.id}>
                <Product product={product} showDiscount={true} />
              </div>
            ))
          )}
        </div>
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}