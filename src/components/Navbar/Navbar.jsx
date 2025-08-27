import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="idb-navbar navbar navbar-light pt-3">
      <div className="container-fluid idb-container p-0">
        <div className="idb-navbar__row d-flex align-items-center w-100">
          <div className="idb-navbar__logo-wrapper">
            <a href="/" className="idb-navbar__logo m-0">
              E-listo!
            </a>
          </div>
          <div className="idb-navbar__search-wrapper">
            <form className="idb-navbar__search">
              <input
                className="idb-navbar__search-input ps-2"
                type="search"
                placeholder="Buscar productos..."
                aria-label="Search"
              />
              <button className="idb-navbar__search-button py-1 px-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="idb-navbar__actions-wrapper">
            <div className="idb-navbar__actions m-0">
              <WidgetCart />
            </div>
          </div>
        </div>
        <div className="idb-navbar__nav-row d-flex justify-content-center mt-3 w-100">
          <ul className="navbar-nav flex-row align-items-center idb-navbar__nav-list">
            <li className={`nav-item dropdown${dropdownOpen ? ' show' : ''}`}>
              <button
                className="btn idb-dropdown dropdown-toggle"
                type="button"
                aria-expanded={dropdownOpen}
                onClick={handleDropdownToggle}
              >
                Categories
              </button>
              <ul className={`idb-dropdown dropdown-menu dropdown-menu-dark${dropdownOpen ? ' show' : ''} idb-navbar__dropdown-menu`}>
                <li key="all">
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => handleCategoryClick(null)}
                  >
                    All
                  </button>
                </li>
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
              <Link to="/" className="nav-link idb-navbar__link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/offers" className="nav-link idb-navbar__link">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/help" className="nav-link idb-navbar__link">Ayuda</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
