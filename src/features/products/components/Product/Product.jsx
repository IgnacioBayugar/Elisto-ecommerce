import './Product.scss';
import { Link } from 'react-router-dom';
import StarRating from '../../../../components/common/StarRating';

function Product({ product, showDiscount }) {
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price;

  return (
    <div className="idb-product-card card">
      <Link to={`/product/${product.id}`} className="idb-product-card-link text-decoration-none">
        <div className="idb-product-card__image-wrapper position-relative">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="idb-product-card__image card-img-top"
          />
          <span
            className={`idb-product-card__stock-badge badge position-absolute ${product.stock > 0 ? '' : 'bg-danger'}`}
            title={product.stock > 0 ? `${product.stock} Disponibles` : 'Agotado'}
          >
            {product.stock > 0 ? `${product.stock} Disponibles` : 'Agotado'}
          </span>
          {showDiscount && hasDiscount && (
            <div className="idb-product-card__ribbon">
              -{product.discountPercentage}%
            </div>
          )}
        </div>
        <div className="idb-product-card__body pt-2 pb-1 card-body d-flex flex-column justify-content-between">
          <h5 className="idb-product-card__title mb-1 text-dark">{product.title}</h5>
          <div className="idb-product-card__rating d-flex align-items-center gap-2">
            <StarRating rating={product.rating} />
          </div>
          <div className="idb-product-card__price-group mb-0">
            {showDiscount && hasDiscount ? (
              <>
                <span className="idb-product-card__price-old">
                  ${product.price}
                </span>
                <span className="idb-product-card__price-final">
                  ${discountedPrice}
                </span>
              </>
            ) : (
              <span className="idb-product-card__price-final">${product.price}</span>
            )}
          </div>
          <p className="idb-product-card__description card-text m-0">{product.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
