import Carousel from '../../../components/common/Carousel';


export default function OffersCarousel({ offers = [] }) {
  const bestOffers = [...offers]
    .filter(p => p.discountPercentage > 0)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 12);
  return (
    <Carousel
      items={bestOffers}
      renderItem={(item) => <OfferCard key={item.id} {...item} />}
    />
  );
}
