import Carousel from '../../../components/common/Carousel';
import BenefitCard from './BenefitCard/BenefitCard';
import { benefitCards } from './benefits';

function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const groupedBenefits = chunkArray(benefitCards, 4);

export function BenefitCarousel() {
  return (
    <section className="idb-benefit-carousel benefit-carousel">
      <Carousel
        items={groupedBenefits}
        renderItem={(group) => (
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            {group.map((item, idx) => (
              <BenefitCard key={idx} {...item} />
            ))}
          </div>
        )}
      />
    </section>
  );
}