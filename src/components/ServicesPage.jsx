import Logo from './Logo.jsx'
import Nav from './Nav.jsx'
import Services from './Services.jsx'
import ContactCta from './ContactCta.jsx'

export default function ServicesPage() {
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
              Servicios
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Elegí el tipo de solución que necesitas y la adaptamos a tu negocio
            </h1>
            <p className="text-lg text-white/80">
              Sitios ejecutivos, sitios de ventas o apps de gestión web (con opción móvil). Te ayudamos a elegir el alcance justo y entregamos avances semanales.
            </p>
          </div>
        </div>
      </header>

      <main className="pb-16">
        <Services />
        <div className="max-w-6xl mx-auto px-4 lg:px-6">
          <ContactCta />
        </div>
      </main>
    </div>
  )
}
