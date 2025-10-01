import { useEffect, useState } from 'react';
import { fetchProductsByCategory } from '../../products/api/productApi';

export default function useOffers(limit = 12) {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await fetchProductsByCategory(10);
      const discounted = data.filter(p => p.discountPercentage > 0);
      discounted.sort((a, b) => b.discountPercentage - a.discountPercentage);
      setOffers(discounted.slice(0, limit));
      setLoading(false);
    }
    load();
  }, [limit]);

  return { offers, loading };
}