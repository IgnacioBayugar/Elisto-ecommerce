import './Product.scss';
import { Link } from 'react-router-dom';
import StarRating from '../../../../components/common/StarRating';
import useCart from '../../../cart/hooks/useCart';

function Product({ product }) {
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
            <p className="idb-product-card__price card-text fw-bold m-0">${product.price}</p>
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
