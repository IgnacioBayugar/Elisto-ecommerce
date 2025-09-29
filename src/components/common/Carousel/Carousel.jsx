import { useState } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({
  items = [],
  renderItem,
  showArrows = true,
  showIndicators = true,
  className = '',
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  if (!items || items.length === 0) return null;

  return (
    <div className={`${styles.carousel} ${className}`}>
      {showArrows && (
        <button className={styles.arrow} onClick={prev} aria-label="Anterior">
          <i className="bi bi-chevron-left" style={{ fontSize: 24 }}></i>
        </button>
      )}

      <div className={styles.item}>
        {renderItem ? renderItem(items[current], current) : items[current]}
      </div>

      {showArrows && (
        <button className={styles.arrow} onClick={next} aria-label="Siguiente">
          <i className="bi bi-chevron-right" style={{ fontSize: 24 }}></i>
        </button>
      )}

      {showIndicators && (
        <div className={styles.indicators}>
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.indicator} ${idx === current ? styles.active : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir al item ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;