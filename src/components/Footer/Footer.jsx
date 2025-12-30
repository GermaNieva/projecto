export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-lg font-semibold">IGS Soluciones Digitales</p>
          <p className="text-sm text-white/70">Equipo que diseña y construye software a medida.</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Enlaces</p>
          <ul className="space-y-1 text-sm text-white/80">
            <li><a href="/#resumen" className="hover:text-white">Inicio</a></li>
            <li><a href="/servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="/beneficios" className="hover:text-white">Beneficios</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>
        <div className="space-y-2 text-sm text-white/80">
          <p className="text-sm font-semibold">Contacto</p>
          <p>hola@igs-soluciones.com</p>
          <p>+54 11 0000-0000</p>
          <p>Soporte directo con el equipo que desarrolla.</p>
        </div>
      </div>
    </footer>
  )
}
