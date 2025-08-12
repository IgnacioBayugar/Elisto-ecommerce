import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="idb-footer text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="idb-footer__title">Navegación</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="idb-footer__link">Ayuda</a></li>
              <li><a href="#" className="idb-footer__link">Términos y condiciones</a></li>
              <li><a href="#" className="idb-footer__link">Políticas de privacidad</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="idb-footer__title">Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="idb-footer__icon">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="idb-footer__icon">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="idb-footer__icon">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li><a href="mailto:contacto@elisto.com" className="idb-footer__link">contacto@elisto.com</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 text-center">
            <h5 className="idb-footer__title">Elisto</h5>
            <p>© Elisto {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;