import CheckoutSummary from "../components/CheckoutSummary";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className="idb-checkout-page">
      <h2>Checkout</h2>
      <CheckoutSummary />
      <CheckoutForm />
      <button className="idb-checkout-confirm">Confirmar compra</button>
    </div>
  );
};

export default CheckoutPage;
