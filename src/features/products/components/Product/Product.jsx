import 'bootstrap/dist/css/bootstrap.min.css';

function Product({ product }) {
  if (!product) return null;

  return (
    <div className="idb-product-card card h-100 shadow-sm">
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        className="idb-product-card__image card-img-top"
      />
      <div className="idb-product-card__body card-body d-flex flex-column justify-content-between">
        <h3 className="idb-product-card__title card-title mb-2">{product.title}</h3>
        <p className="idb-product-card__price card-text fw-bold">${product.price}</p>
        <p className="idb-product-card__description card-text mb-2">{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
