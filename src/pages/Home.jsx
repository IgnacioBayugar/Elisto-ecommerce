import ProductList from '../features/products/components/ProductList/ProductList';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import '../styles/main.scss';
import { capitalizeFirst } from '../utils/stringUtils';

export default function Home({ selectedCategory }) {
  return (
    <Section>
      <Container>
        <h2 className='idb-title d-flex justify-content-center'>Explora nuestro productos</h2>
        {selectedCategory && <h3 className='idb-category-title'>&#8226; {capitalizeFirst(selectedCategory)}</h3>}
        <ProductList category={selectedCategory} />
      </Container>
    </Section>
  );
}
