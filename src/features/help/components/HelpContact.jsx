import './HelpContact.scss';

export default function HelpContact() {
  return (
    <section className="idb-help-page__contact">
      <div className="idb-help-page__contact-title">¿Necesitás ayuda directa?</div>
      <div className="idb-help-page__contact-text">
        Contactanos por email o chat y nuestro equipo te responderá lo antes posible.
      </div>
      <div className="idb-help-page__contact-options">
        <a
          href="mailto:soporte@tuapp.com"
          className="idb-help-page__contact-link idb-help-page__contact-link--email"
        >
          Email: soporte@tuapp.com
        </a>
        <a
          href="tel:+5400000000"
          className="idb-help-page__contact-link idb-help-page__contact-link--phone"
        >
          Teléfono: +54 00 0000-0000
        </a>
        <a
          href="#"
          className="idb-help-page__contact-link idb-help-page__contact-link--chat"
        >
          Chat en vivo
        </a>
      </div>
    </section>
  );
}
