import Product from '../features/products/components/Product/Product';
import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../features/products/api/productApi';
import PaginationControls from '../components/common/PaginationControls/PaginationControls';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import { capitalizeFirst } from '../utils/stringUtils';

export default function Offers({ selectedCategory }) {
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

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <Section>
      <Container>
        <h2 className='idb-title d-flex justify-content-center'>Explora nuestras ofertas</h2>
        {selectedCategory && <h3 className='idb-category-title'>&#8226; {capitalizeFirst(selectedCategory)}</h3>}
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={page => setCurrentPage(page)}
        />
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
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={page => setCurrentPage(page)}
        />
      </Container>
    </Section>
  );
}