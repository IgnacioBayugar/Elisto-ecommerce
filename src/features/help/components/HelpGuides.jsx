import './HelpGuides.scss';

const guides = [
  {
    icon: 'bi-truck',
    title: 'Envíos y devoluciones',
    text: 'Todo lo que necesitás saber sobre envíos, devoluciones y seguimiento.',
    link: '#',
  },
  {
    icon: 'bi-credit-card',
    title: 'Pagos y facturación',
    text: 'Información sobre métodos de pago, facturación y reembolsos.',
    link: '#',
  },
  {
    icon: 'bi-person',
    title: 'Administrar mi cuenta',
    text: 'Gestioná tus datos, seguridad y preferencias de usuario.',
    link: '#',
  },
  {
    icon: 'bi-shield-lock',
    title: 'Seguridad y privacidad',
    text: 'Consejos y ayuda para proteger tu información personal.',
    link: '#',
  },
];

export default function HelpGuides() {
  return (
    <section className="idb-help-page__guides">
      <div className="container-fluid">
        <div className="row g-3 justify-content-center">
          {guides.map((guide) => (
            <div className="col-12 col-md-6 col-lg-3 d-flex" key={guide.title}>
              <div className="idb-help-page__guides-card w-100">
                <span className={`idb-help-page__guides-icon bi ${guide.icon}`}></span>
                <div className="idb-help-page__guides-title">{guide.title}</div>
                <div className="idb-help-page__guides-text">{guide.text}</div>
                <a className="idb-help-page__guides-link" href={guide.link}>
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
