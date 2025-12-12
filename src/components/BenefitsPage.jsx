import Logo from './Logo.jsx'
import Nav from './Nav.jsx'

const BENEFITS = [
  { title: 'Sin lenguaje difícil', text: 'Explicamos avances en términos de negocio para que tomes decisiones rápido.' },
  { title: 'Documentación ligera', text: 'Guías breves para que tu equipo use y mantenga el sistema.' },
  { title: 'Entrega responsable', text: 'Preferimos cumplir algo pequeño y sólido antes que prometer de más.' },
  { title: 'Contacto directo', text: 'Hablas con quienes desarrollan, sin capas intermedias.' },
  { title: 'Avances frecuentes', text: 'Mostramos demos cortas cada semana para ajustar a tiempo.' },
  { title: 'Listo para crecer', text: 'Dejamos la base preparada para sumar nuevas funciones cuando las necesites.' }
]

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900 to-slate-950" aria-hidden />
        <div className="absolute -left-20 -top-32 w-72 h-72 rounded-full bg-blue-500/20 blur-[110px]" aria-hidden />
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-cyan-400/20 blur-[100px]" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 pt-6 pb-10">
          <div className="flex items-center justify-between">
            <Logo />
            <Nav />
          </div>
          <div className="mt-12 max-w-3xl space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-white/20">
              Beneficios
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Cómo te acompañamos durante el proyecto
            </h1>
            <p className="text-lg text-white/80">
              Comunicación simple, entregas frecuentes y soporte directo con el equipo que desarrolla.
            </p>
          </div>
        </div>
      </header>

      <main className="pb-16">
        <section className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 shadow-lg shadow-slate-900/30">
                <p className="text-sm text-white/60">{item.title}</p>
                <p className="font-semibold mt-1">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
