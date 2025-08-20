import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

function CartDropdown() {
  const { state, dispatch } = useCart();
  const items = state.items;
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <div className="idb-cart-dropdown">
      {items.length === 0 ? (
        <div className="idb-cart-dropdown__empty">Tu carrito está vacío</div>
      ) : (
        <>
          <div className="idb-cart-dropdown__list">
            {items.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                thumbnail={item.thumbnail}
                onRemove={handleRemove}
              />
            ))}
          </div>
          <div className="idb-cart-dropdown__subtotal">
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <button className="idb-cart-dropdown__checkout">Finalizar compra</button>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
