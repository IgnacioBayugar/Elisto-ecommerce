import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCart from '../../cart/hooks/useCart';
import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutForm from "../components/CheckoutForm";
import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { state, dispatch } = useCart();
  const items = state.items || [];
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      navigate("/");
    }
  }, [items, navigate]);

  const handleContinue = () => setStep(2);

  const handleConfirm = () => {
    setConfirmed(true);
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="idb-checkout">
      <h2 className="idb-checkout__title">Checkout</h2>
      {confirmed ? (
        <div className="idb-checkout__success">Compra confirmada</div>
      ) : (
        <>
          {step === 1 && (
            <>
              <div className="idb-checkout__summary">
                <CheckoutSummary />
              </div>
              <div className="idb-checkout__actions idb-checkout__actions--single">
                <button
                  className="idb-checkout__button idb-checkout__button--continue"
                  onClick={handleContinue}
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="idb-checkout__form">
                <CheckoutForm onConfirm={handleConfirm} />
              </div>
              <div className="idb-checkout__actions idb-checkout__actions--split">
                <button
                  className="idb-checkout__button idb-checkout__button--back"
                  onClick={() => setStep(1)}
                >
                  Volver atrás
                </button>
                <button
                  className="idb-checkout__button idb-checkout__button--confirm"
                  onClick={handleConfirm}
                >
                  Confirmar compra
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
