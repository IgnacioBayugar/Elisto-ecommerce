
import useCart from '../../cart/hooks/useCart';
import CartItem from '../../cart/components/CartItem';

const CheckoutSummary = () => {
  const { state } = useCart();
  const items = state.items || [];
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="idb-checkout-summary">
      <h3>Resumen del pedido</h3>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="idb-checkout-summary__items">
            {items.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                thumbnail={item.thumbnail}
                onRemove={null}
              />
            ))}
          </div>
          <div className="idb-checkout-summary__total">
            <p>Total:</p> <p>${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutSummary;
