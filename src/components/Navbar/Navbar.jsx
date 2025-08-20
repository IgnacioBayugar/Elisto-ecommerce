import React, { useEffect, useState } from 'react';
import { getCategories } from '../../utils/getCategories';
import WidgetCart from '../../features/cart/components/CartWidget';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const uniqueCategories = await getCategories();
      setCategories(uniqueCategories);
    }

    loadCategories();
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setDropdownOpen(false);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest('.nav-item.dropdown')) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="idb-navbar navbar navbar-light">
      <div className="container-fluid idb-container">
        <div className="row w-100 align-items-center">
          <div className="col-auto d-flex align-items-center">
            <a href="/" className="idb-navbar__logo">
              E-listo
            </a>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <form className="d-flex idb-navbar__search">
              <input
                className="idb-navbar__search-input form-control"
                type="search"
                placeholder="Buscar productos, marcas y más..."
                aria-label="Search"
              />
              <button className="btn idb-navbar__search-button" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="col-auto d-flex align-items-center idb-navbar__actions">
            <WidgetCart />
          </div>
        </div>
        <div className="row w-100 mt-3">
          <div className="col d-flex justify-content-center">
            <ul className="navbar-nav flex-row align-items-center">
              <li className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`} style={{ position: 'relative' }}>
                <button
                  className="btn idb-dropdown dropdown-toggle"
                  type="button"
                  aria-expanded={dropdownOpen}
                  onClick={handleDropdownToggle}
                >
                  Categories
                </button>
                <ul className={`idb-dropdown dropdown-menu dropdown-menu-dark${dropdownOpen ? ' show' : ''}`} style={{ position: 'absolute', left: 0, top: '100%', minWidth: '200px', zIndex: 1000 }}>
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <a href="/help" className="nav-link idb-navbar__link">Help</a>
              </li>
              <li className="nav-item">
                <a href="/mis-compras" className="nav-link idb-navbar__link">My Purchases</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
