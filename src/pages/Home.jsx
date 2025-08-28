import ProductList from '../features/products/components/ProductList/ProductList';

export default function Home({ selectedCategory }) {
  return (
    <section className="idb-container">
      <div className="container-fluid">
        <ProductList category={selectedCategory} />
      </div>
    </section>
  );
}
