
import ProductList from '../features/products/components/ProductList/ProductList';
import Section from '../components/Section/Section';

export default function Home({ selectedCategory }) {
  return (
    <Section>
      <div className="container-fluid">
        <ProductList category={selectedCategory} />
      </div>
    </Section>
  );
}
