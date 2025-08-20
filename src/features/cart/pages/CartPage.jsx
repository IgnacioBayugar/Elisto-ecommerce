import useCart from '../hooks/useCart';
import CartItem from '../components/CartItem';

function CartPage() {
  const { state, dispatch } = useCart();
  const items = state.items;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const handleQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  return (
    <div className="idb-cart">
      {items.length === 0 ? (
        <div className="idb-cart__empty">Tu carrito está vacío</div>
      ) : (
        <div className="idb-cart__content">
          <div className="idb-cart__items">
            {items.map(item => (
              <div key={item.id} className="idb-cart__item">
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  thumbnail={item.thumbnail}
                  onRemove={handleRemove}
                />
                <div className="idb-cart__item-controls">
                  <button
                    className="idb-cart__qty-btn"
                    onClick={() => handleQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <input
                    type="number"
                    className="idb-cart__qty-input"
                    value={item.quantity}
                    min={1}
                    onChange={e => handleQuantity(item.id, Number(e.target.value))}
                  />
                  <button
                    className="idb-cart__qty-btn"
                    onClick={() => handleQuantity(item.id, item.quantity + 1)}
                  >+</button>
                  <span className="idb-cart__item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <aside className="idb-cart__summary">
            <div className="idb-cart__summary-row">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="idb-cart__summary-row">
              <span>Envío:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="idb-cart__summary-total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="idb-cart__pay-btn">Proceder al pago</button>
          </aside>
        </div>
      )}
    </div>
  );
}

export default CartPage;
