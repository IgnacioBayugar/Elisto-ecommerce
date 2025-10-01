
import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../api/productApi';
import Product from '../Product/Product';
import PaginationControls from '../../../../components/common/PaginationControls/PaginationControls';

function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

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
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="product-list-container">
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
      <div className="row g-3">
        {paginatedProducts.length === 0 ? (
          <div className="col-12 text-center py-5">No hay productos para mostrar.</div>
        ) : (
          paginatedProducts.map(product => (
            <div className="col-6 col-md-4 col-lg-2 d-flex" key={product.id}>
              <Product product={product} />
            </div>
          ))
        )}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}

export default ProductList;
