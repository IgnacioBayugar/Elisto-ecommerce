import { useState } from 'react';
import useCart from '../hooks/useCart';
import CartDropdown from './CartDropdown';

function WidgetCart() {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="widget-cart position-relative">
      <button type="button" className="btn btn-secondary position-relative" onClick={handleToggle}>
        <i className="bi bi-cart"></i>
        {totalItems > 0 && (
          <span className="widget-cart__badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && <CartDropdown />}
    </div>
  );
}

export default WidgetCart;
