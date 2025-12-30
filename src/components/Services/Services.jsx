const SERVICES = [
  {
    title: 'Sitio ejecutivo / institucional',
    subtitle: 'Página para presentar quién eres y cómo contactarte',
    bullets: [
      'Home, quiénes somos, servicios y formulario/WhatsApp',
      'Sección para mostrar proyectos o novedades si las tienes',
      'Pensado para agregar más secciones cuando crezcas'
    ]
  },
  {
    title: 'Sitio de ventas / catálogo',
    subtitle: 'Muestra productos o servicios y facilita la compra',
    bullets: [
      'Catálogo simple con categorías y llamados a comprar o consultar',
      'Botón a WhatsApp, formulario o pago básico según tu preferencia',
      'Listo para sumar carrito y checkout cuando lo necesites'
    ]
  },
  {
    title: 'App de gestión (web) + móvil opcional',
    subtitle: 'Administra tu operación en web; móvil opcional para campo',
    bullets: [
      'Stock, ventas y gastos con reportes descargables',
      'Roles para tu equipo y registro de cambios importantes',
      'App móvil opcional para equipos en ruta o en tienda'
    ]
  }
]

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-gradient-to-b from-[#0a102a] via-[#0b1736] to-[#0a102a] text-white py-12 sm:py-16">
      <div className="absolute inset-x-10 -top-24 h-40 bg-blue-500/10 blur-3xl" aria-hidden />
      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">Soluciones a medida con tres enfoques claros</h2>
          <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto">
            Elegí el punto de partida y lo adaptamos a tu contexto. Si necesitas algo diferente, usamos esto como guía para definir un alcance a medida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/30">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{service.title}</h3>
              <p className="text-sm text-white/75 mb-3">{service.subtitle}</p>
              <div className="space-y-2">
                {service.bullets.map((item) => (
                  <div key={item} className="flex gap-2 text-sm text-white/85">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-100 border border-blue-300/20 text-xs">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
