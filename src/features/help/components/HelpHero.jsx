import './HelpHero.scss';

export default function HelpHero() {
  return (
    <section className="idb-help-page__hero">
      <h1 className="idb-help-page__hero-title">Centro de Ayuda</h1>
      <p className="idb-help-page__hero-subtitle">
        Encontrá respuestas rápidas a tus preguntas o contactá a nuestro equipo de soporte.
      </p>
      <div className="idb-help-page__hero-search-wrapper">
        <form className="idb-help-page__hero-search" autoComplete="off">
          <input
            className="idb-help-page__hero-search-input"
            type="text"
            placeholder="Escribí tu consulta…"
            aria-label="Buscar en el centro de ayuda"
          />
          <button className="idb-help-page__hero-search-btn" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}
