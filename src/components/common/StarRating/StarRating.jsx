function StarRating({ rating, maxStars = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="d-flex align-items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>
      ))}
      {hasHalfStar && (
        <i key="half" className="bi bi-star-half text-warning"></i>
      )}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <i key={`empty-${i}`} className="bi bi-star text-secondary"></i>
      ))}
      <span className="ms-1 small text-secondary">{rating.toFixed(1)}</span>
    </span>
  );
}

export default StarRating;
