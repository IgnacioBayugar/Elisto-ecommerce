import './Product.scss';
import { Link } from 'react-router-dom';
import StarRating from '../../../../components/common/StarRating';
import useCart from '../../../cart/hooks/useCart';

function Product({ product, showDiscount }) {
  const { dispatch } = useCart();
  if (!product) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail || product.images?.[0],
        quantity: 1,
      },
    });
  };

  // Calcular precio con descuento si corresponde
  const hasDiscount = product.discountPercentage && product.discountPercentage > 0;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : product.price;

  return (
    <div className="idb-product-card card">
      <Link to={`/product/${product.id}`} className="idb-product-card-link text-decoration-none">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="idb-product-card__image card-img-top"
        />
        <div className="idb-product-card__body pt-2 pb-1 card-body d-flex flex-column justify-content-between">
          <h5 className="idb-product-card__title mb-1 text-dark">{product.title}</h5>
          <div className="idb-product-card__rating mb-2">
            <StarRating rating={product.rating} />
          </div>
          <div className="idb-product-card__price-stock d-flex justify-content-between align-items-center mb-1">
            {showDiscount && hasDiscount ? (
              <>
                <span className="idb-product-card__price-original text-muted text-decoration-line-through me-2">
                  ${product.price}
                </span>
                <span className="idb-product-card__price-discounted fw-bold text-success">
                  ${discountedPrice}
                </span>
                <span className="idb-product-card__discount badge bg-danger ms-2">
                  -{product.discountPercentage}%
                </span>
              </>
            ) : (
              <p className="idb-product-card__price card-text fw-bold m-0">${product.price}</p>
            )}
            <span
              className={`idb-product-card__stock badge ${product.stock > 0 ? '' : 'bg-danger'}`}
              title={product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
            >
              {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
            </span>
          </div>
          <p className="idb-product-card__description card-text m-0">{product.description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
