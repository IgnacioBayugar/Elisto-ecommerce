import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/fetchProducts';
import { getCategories } from '../../utils/getCategories';
import WidgetCart from '../WidgetCart';
import './Navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const products = await fetchProducts();
      const uniqueCategories = getCategories(products);
      setCategories(uniqueCategories);
    }

    loadCategories();
  }, []);

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
          <div className="col">
            <ul className="navbar-nav d-flex justify-content-center flex-row align-items-center">
              <li className="nav-item dropdown">
                <button
                  className="btn idb-dropdown dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="idb-dropdown dropdown-menu dropdown-menu-dark">
                  {categories.map(category => (
                    <li key={category}>
                      <a href={`#${category}`} className="dropdown-item">
                        {category}
                      </a>
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
