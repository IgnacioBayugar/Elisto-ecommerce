function CartItem({ id, title, price, quantity, thumbnail, onRemove }) {
  return (
    <div className="idb-cart-item">
      <img src={thumbnail || '/placeholder.png'} alt={title} className="idb-cart-item__thumbnail" />
      <div className="idb-cart-item__info">
        <span className="idb-cart-item__title">{title}</span>
        <span className="idb-cart-item__price">${price}</span>
        <span className="idb-cart-item__quantity">x{quantity}</span>
      </div>
      <button className="idb-cart-item__remove" onClick={() => onRemove(id)}>
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
