import React from 'react';
import { useCart } from '../context/CartContext';

function WidgetCart() {
  const { state } = useCart();
  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="widget-cart position-relative">
      <a href="#cart" className="btn btn-secondary position-relative">
        <i className="bi bi-cart"></i>
        {totalItems > 0 && (
          <span className="widget-cart__badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        )}
      </a>
    </div>
  );
}

export default WidgetCart;
