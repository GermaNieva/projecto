import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/Nav.jsx'

export default function Hero() {
  return (
    <header className="relative overflow-hidden text-white bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900 to-slate-950" aria-hidden />
      <div className="absolute -left-20 -top-40 w-80 h-80 rounded-full bg-blue-500/20 blur-[120px]" aria-hidden />
      <div className="absolute right-0 top-10 w-64 h-64 rounded-full bg-cyan-400/20 blur-[100px]" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 pt-6 pb-16">
        <div className="flex items-center justify-between">
          <Logo />
          <Nav />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden />
              Software a medida
            </div>

            <h1 className="text-4xl md:text-4xl font-semibold leading-tight">
              Creamos soluciones digitales que impulsan tu negocio
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
               Escuchamos tus procesos, proponemos un plan sencillo y desarrollamos justo lo que necesitas, sin complicar el camino.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white !text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-blue-900/30 transition hover:-translate-y-[1px]"
              >
                Agenda una demo
              </a>
              <a
                href="/servicios#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-semibold text-white/90 transition hover:border-white/60"
              >
                Ver cómo trabajamos
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              {[{ label: 'Inicio', value: 'Reunión de entendimiento' }, { label: 'Plan', value: 'Propuesta en 5 días' }, { label: 'Entrega', value: 'Avances cada semana' }].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm uppercase tracking-wide text-white/60">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-blue-500/30 via-blue-400/10 to-transparent blur-3xl" aria-hidden />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6 shadow-2xl shadow-blue-900/40">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-white/70">Cómo trabajamos</p>
                  <p className="text-xl font-semibold">Ruta simple</p>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-emerald-100 text-sm border border-emerald-300/40">Acompañamiento</span>
              </div>

              <ol className="space-y-4">
                {[
                  {
                    title: 'Escuchar y priorizar',
                    detail: 'Conversamos con tu equipo para entender el problema y elegir el alcance mínimo.'
                  },
                  {
                    title: 'Plan y estimación clara',
                    detail: 'Entregamos un plan simple con hitos, responsables y fechas visibles.'
                  },
                  {
                    title: 'Construcción y demos',
                    detail: 'Mostramos avances cortos cada semana para ajustar antes de entregar.'
                  }
                ].map((step, idx) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/15 font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="text-sm text-white/75">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3">
                <div className="h-10 rounded-full bg-emerald-400/20 text-emerald-100 flex items-center justify-center font-semibold px-3 text-sm">
                  Soporte
                </div>
                <div className="text-sm text-white/80"> directo con el equipo que desarrolla: un canal único y respuestas rápidas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}