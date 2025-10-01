import ProductList from '../features/products/components/ProductList/ProductList';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import '../styles/main.scss';
import { capitalizeFirst } from '../utils/stringUtils';
import { BenefitCarousel } from '../features/benefits/components/BenefitCarousel';
import { benefitCards } from '../features/benefits/components/benefits';
import useOffers from '../features/offers/hooks/useOffers';
import Carousel from '../components/common/Carousel';
import Product from '../features/products/components/Product/Product';
import { chunkArray } from '../utils/chunkArray';
import styles from '../features/offers/components/OffersCarousel.module.scss';

export default function Home({ selectedCategory }) {
  const { offers, loading } = useOffers(18);

  const cardsPerSlide = 6;
  const groupedOffers = chunkArray(offers, cardsPerSlide);

  return (
    <>
      <Section>
        <Container>
          <h2 className='idb-title ps-3'>Contamos con beneficios para vos :</h2>
          <BenefitCarousel benefits={benefitCards} />
        </Container>
                <Container>
          <h2 className='idb-title d-flex justify-content-center'>Mejores Ofertas</h2>
          {loading ? (
            <div>Cargando...</div>
          ) : (
            <Carousel
              items={groupedOffers}
              renderItem={(group, idx) => (
                <div key={idx} className={styles.carouselGroup}>
                  {group.map((item) => (
                    <div key={item.id} className={styles.carouselCardWrapper}>
                      <Product product={item} showDiscount />
                    </div>
                  ))}
                </div>
              )}
            />
          )}
        </Container>
        <Container>
          <h2 className='idb-title d-flex justify-content-center'>Explora nuestro productos</h2>
          {selectedCategory && <h3 className='idb-category-title'>&#8226; {capitalizeFirst(selectedCategory)}</h3>}
          <ProductList category={selectedCategory} />  
        </Container>
      </Section>
    </>
  );
}
