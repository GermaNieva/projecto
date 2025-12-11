import { useState, useEffect, useRef } from 'react'

const NAV_ITEMS = [
  { href: '#resumen', label: 'Inicio' },
  { href: '#soluciones', label: 'Servicios' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#casos', label: 'Contacto' }
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Cerrar con Escape y al click fuera
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onDocClick(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onDocClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onDocClick)
    }
  }, [open])

  // Bloquear scroll de fondo cuando el menú móvil está abierto
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = open ? 'hidden' : prev
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <nav ref={navRef} aria-label="Main navigation" className="flex items-center relative">
      {/* Desktop nav */}
      <div className="hidden md:block">
        <ul className="flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-white hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile button */}
      <button
        className="md:hidden p-2 rounded ml-2 focus:outline-none focus:ring-2 focus:ring-white"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen((v) => !v)}
      >
        {!open ? (
          <svg className="w-6 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24 items-center justify-center" >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8h16 M4 16h16 M4 24h16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile menu - fixed para cubrir toda la pantalla horizontal */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={
          `md:hidden fixed inset-x-0 top-25 z-20 bg-blue-700 transition-all duration-200 transform ` +
          (open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none')
        }
      >
        <ul role="menu" className="flex flex-col gap-2 p-4 max-w-6xl mx-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                role="menuitem"
                href={item.href}
                className="block px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
// ...existing code...
