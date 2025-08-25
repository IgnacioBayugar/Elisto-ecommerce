import ProductList from '../features/products/components/ProductList/ProductList';

export default function Home({ selectedCategory }) {
  return (
    <main>
      <ProductList category={selectedCategory} />
    </main>
  );
}
