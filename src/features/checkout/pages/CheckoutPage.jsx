import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from '../../cart/hooks/useCart';
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const items = state.items || [];
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, [items, navigate]);

  const handleConfirm = () => {
    setConfirmed(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="idb-checkout-page">
      <h2>Checkout</h2>
      {confirmed ? (
        <div className="idb-checkout-success">Compra confirmada</div>
      ) : (
        <>
          <CheckoutSummary />
          <CheckoutForm />
          <button className="idb-checkout-confirm" onClick={handleConfirm}>
            Confirmar compra
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
