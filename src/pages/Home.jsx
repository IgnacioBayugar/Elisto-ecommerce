import ProductList from '../features/products/components/ProductList/ProductList';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';

export default function Home({ selectedCategory }) {
  return (
    <Section>
      <Container>
        <ProductList category={selectedCategory} />
      </Container>
    </Section>
  );
}
