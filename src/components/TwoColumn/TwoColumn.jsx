import InfoCard from '../InfoCard/InfoCard.jsx'
import ContactCta from '../ContactCta/ContactCta.jsx'
import equipoImg from './assets/equipo-it.jpeg'

export default function TwoColumn() {
  return (
    <section id="resumen" className="relative overflow-hidden bg-gradient-to-b from-[#0b1740] via-[#0f193c] to-[#0a102a] text-white py-20">
      <div className="absolute inset-x-10 -top-20 h-40 bg-blue-500/10 blur-3xl" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-white/20 justify-center">
            Ruta clara de principio a fin
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-3xl">
            Así trabajamos contigo para construir la solución que necesitas
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-14 items-center">
          {/* Imagen */}
          <div className="w-full max-w-[520px]">
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-500/40 via-blue-400/10 to-transparent blur-xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-blue-300/30 shadow-2xl shadow-blue-900/30">
                <img
                  src={equipoImg}
                  alt="Equipo colaborando en un proyecto"
                  loading="lazy"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-white/80">
              {[{ label: 'Equipos', value: 'Pequeños y medianos' }, { label: 'Industria', value: 'Servicios y retail' }, { label: 'Colaboración', value: 'Remota y presencial' }].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                  <p className="text-xs text-white/60 uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contenido */}
          <div className="w-full max-w-5xl space-y-6 text-left">
            <p className="text-lg text-white/80">
              No ofrecemos un catálogo infinito. Nos enfocamos en entender tu proceso, proponer un camino sencillo y entregar una solución estable que tu equipo pueda usar sin enredos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr" id="soluciones">
              <InfoCard title="Entendimiento claro" text="Reuniones cortas para mapear el problema y decidir el alcance justo." />
              <InfoCard title="Plan visible" text="Fechas, hitos y responsables en un tablero compartido desde el día uno." />
              <InfoCard title="Construcción sin ruido" text="Entregas pequeñas cada semana para que pruebes y ajustes rápido." />
              <InfoCard title="Soporte directo" text="Hablas con quienes desarrollan; sin capas intermedias ni respuestas genéricas." />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3" id="casos">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
                Preferimos relaciones largas: iteramos y mejoramos con tus usuarios
              </div>
              <div className="h-px bg-white/15 flex-1 sm:block hidden" aria-hidden />
              <a href="/contacto" className="text-sm font-semibold text-blue-200 hover:text-white">
                Conversemos sobre tu caso →
              </a>
            </div>
          </div>
        </div>

        <ContactCta />
      </div>
    </section>
  )
}