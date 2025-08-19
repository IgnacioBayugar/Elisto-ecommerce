import './Product.scss';
import { Link } from 'react-router-dom';
import StarRating from '../../../../components/common/StarRating';

function Product({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} className="idb-product-card-link text-decoration-none">
      <div className="idb-product-card card h-100 shadow-sm">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="idb-product-card__image card-img-top"
        />
        <div className="idb-product-card__body pt-2 card-body d-flex flex-column justify-content-between">
          <h5 className="idb-product-card__title mb-1">{product.title}</h5>
          <div className="idb-product-card__rating mb-2">
            <StarRating rating={product.rating} />
          </div>
          <div className="idb-product-card__price-stock d-flex justify-content-between align-items-center mb-1">
            <p className="idb-product-card__price card-text fw-bold m-0">${product.price}</p>
            <span
              className={`idb-product-card__stock badge ${product.stock > 0 ? 'bg-secondary' : 'bg-danger'}`}
              title={product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
            >
              {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
            </span>
          </div>
          <p className="idb-product-card__description card-text m-0">{product.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
