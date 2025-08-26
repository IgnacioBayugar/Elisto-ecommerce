import ProductList from '../features/products/components/ProductList/ProductList';

export default function Home({ selectedCategory }) {
  return (
    <section className="idb-gallery-bg">
      <div className="idb-container">
        <ProductList category={selectedCategory} />
      </div>
    </section>
  );
}
