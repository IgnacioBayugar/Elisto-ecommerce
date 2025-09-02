import './HelpFAQ.scss';

const faqs = [
  {
    category: 'Pedidos y envíos',
    questions: [
      {
        q: '¿Cuánto tarda en llegar mi pedido?',
        a: 'El tiempo de entrega depende de tu ubicación y el método de envío seleccionado. Generalmente entre 2 y 7 días hábiles.',
      },
      {
        q: '¿Cómo hago el seguimiento de mi envío?',
        a: 'Podés ver el estado de tu pedido desde tu cuenta en la sección "Mis pedidos".',
      },
    ],
  },
  {
    category: 'Pagos y facturación',
    questions: [
      {
        q: '¿Qué métodos de pago aceptan?',
        a: 'Aceptamos tarjetas de crédito, débito, transferencias y pagos en efectivo en puntos habilitados.',
      },
      {
        q: '¿Cómo obtengo mi factura?',
        a: 'La factura se envía por email y también podés descargarla desde tu cuenta.',
      },
    ],
  },
  {
    category: 'Devoluciones y reembolsos',
    questions: [
      {
        q: '¿Cómo solicito una devolución?',
        a: 'Ingresá a "Mis pedidos", seleccioná el producto y seguí los pasos para solicitar la devolución.',
      },
      {
        q: '¿Cuánto tarda el reembolso?',
        a: 'El reembolso se procesa dentro de los 5 días hábiles luego de recibir el producto devuelto.',
      },
    ],
  },
  {
    category: 'Cuenta y seguridad',
    questions: [
      {
        q: '¿Cómo cambio mi contraseña?',
        a: 'Desde tu perfil, seleccioná "Cambiar contraseña" y seguí los pasos.',
      },
      {
        q: '¿Cómo protegen mis datos?',
        a: 'Tus datos están protegidos bajo estrictos protocolos de seguridad y nunca se comparten con terceros.',
      },
    ],
  },
];

export default function HelpFAQ() {
  return (
    <section className="idb-help-page__faq">
      <h2 className="idb-help-page__faq-title">Preguntas Frecuentes</h2>
      <div className="idb-help-page__faq-list">
        {faqs.map((cat) => (
          <div className="idb-help-page__faq-category" key={cat.category}>
            <div className="idb-help-page__faq-category-title">{cat.category}</div>
            <div className="idb-help-page__faq-items">
              {cat.questions.map((q) => (
                <div className="idb-help-page__faq-item" key={q.q}>
                  <details>
                    <summary className="idb-help-page__faq-question">&#8226; {q.q}</summary>
                    <div className="idb-help-page__faq-answer">– {q.a}</div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
