const faqs = [
  {
    category: "Pedidos y envíos",
    items: [
      {
        q: "¿Cuánto tarda en llegar mi pedido?",
        a: "El tiempo de entrega depende de tu ubicación y el método de envío seleccionado. Generalmente entre 2 y 7 días hábiles."
      },
      {
        q: "¿Cómo hago el seguimiento de mi envío?",
        a: "Podés ver el estado de tu pedido desde tu cuenta en la sección 'Mis pedidos'."
      }
    ]
  },
  {
    category: "Pagos y facturación",
    items: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos tarjetas de crédito, débito, MercadoPago y transferencias bancarias."
      },
      {
        q: "¿Cómo obtengo mi factura?",
        a: "La factura se envía por email y también la podés descargar desde tu cuenta."
      }
    ]
  },
  {
    category: "Devoluciones y reembolsos",
    items: [
      {
        q: "¿Cómo solicito una devolución?",
        a: "Ingresá a 'Mis pedidos', seleccioná el producto y seguí los pasos para solicitar la devolución."
      },
      {
        q: "¿Cuánto tarda el reembolso?",
        a: "El reembolso se procesa en un plazo de 3 a 10 días hábiles según el método de pago."
      }
    ]
  },
  {
    category: "Cuenta y seguridad",
    items: [
      {
        q: "¿Cómo cambio mi contraseña?",
        a: "Desde 'Mi cuenta', seleccioná 'Seguridad' y seguí los pasos para cambiar tu contraseña."
      },
      {
        q: "¿Cómo elimino mi cuenta?",
        a: "Contactá a soporte para gestionar la eliminación de tu cuenta de forma segura."
      }
    ]
  }
];

const guides = [
  {
    icon: "🚚",
    title: "Envíos y devoluciones",
    text: "Todo lo que necesitás saber sobre envíos, devoluciones y seguimiento.",
    link: "#"
  },
  {
    icon: "💳",
    title: "Pagos y facturación",
    text: "Información sobre métodos de pago, facturación y reembolsos.",
    link: "#"
  },
  {
    icon: "👤",
    title: "Administrar mi cuenta",
    text: "Gestioná tus datos, seguridad y preferencias de usuario.",
    link: "#"
  },
  {
    icon: "🔒",
    title: "Seguridad y privacidad",
    text: "Consejos y ayuda para proteger tu información personal.",
    link: "#"
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Centro de Ayuda</h1>
        <p className="text-lg text-gray-600 mb-6">Encontrá respuestas rápidas a tus preguntas o contactá a nuestro equipo de soporte.</p>
        <div className="flex justify-center mb-2">
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Escribí tu consulta…"
          />
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Buscar</button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {guides.map((g) => (
          <div key={g.title} className="bg-white rounded-xl shadow p-5 flex flex-col items-center text-center">
            <div className="text-4xl mb-2">{g.icon}</div>
            <h3 className="font-bold text-lg mb-1">{g.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{g.text}</p>
            <a href={g.link} className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 text-sm font-semibold">Ver más</a>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((cat) => (
            <div key={cat.category} className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold text-blue-700 mb-2">{cat.category}</h3>
              <div className="space-y-2">
                {cat.items.map((faq, i) => (
                  <details key={faq.q + i} className="group">
                    <summary className="cursor-pointer font-medium text-gray-800 group-open:text-blue-600 transition flex items-center justify-between">
                      {faq.q}
                    </summary>
                    <div className="pl-2 py-2 text-gray-600 text-sm">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">¿Necesitás ayuda personalizada?</h2>
        <p className="text-gray-600 mb-4">Contactá a nuestro equipo de soporte y te responderemos a la brevedad.</p>
        <div className="flex flex-col gap-2 items-center">
          <a href="mailto:soporte@tuapp.com" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Email: soporte@tuapp.com</a>
          <a href="tel:+54000000000" className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition">Teléfono: +54 00 0000-0000</a>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Chat en vivo</button>
        </div>
      </div>
    </div>
  );
}
