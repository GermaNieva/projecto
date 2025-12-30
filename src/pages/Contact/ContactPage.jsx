import { useMemo, useState } from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import Nav from '../../components/Nav/Nav.jsx'

const CONTACT = {
  email: 'hola@igs-soluciones.com',
  phoneDisplay: '+54 11 0000-0000',
  phoneE164: '+541100000000',
  whatsappE164: '541100000000'
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Contacto desde la web: ${name || 'Nuevo mensaje'}`)
    const body = encodeURIComponent(
      `Nombre: ${name || '-'}\nEmail: ${email || '-'}\n\nMensaje:\n${message || '-'}`
    )
    return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
  }, [name, email, message])

  function onSubmit(e) {
    e.preventDefault()
    window.location.href = mailtoHref
  }

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
          <div className="mt-12 max-w-4xl space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide border border-white/20">
              Contacto
            </p>
            <h1 className="text-4xl md:text-4xl font-semibold leading-tight">Hablemos de tu proyecto</h1>
            <p className="text-lg text-white/80">
              Enviá un mensaje con el formulario o elegí otra forma de contacto. Respondemos lo antes posible.
            </p>
          </div>
        </div>
      </header>

      <main className="pb-16">
        <section className="max-w-6xl mx-auto px-4 lg:px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-900/20">
              <h2 className="text-xl font-semibold">Formulario</h2>
              <p className="text-sm text-white/70 mt-1">Contanos qué necesitás y te respondemos por email.</p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <label className="block">
                  <span className="block text-sm text-white/70 mb-1">Nombre</span>
                  <input
                    className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-white/70 mb-1">Email</span>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="tu@email.com"
                    required
                  />
                </label>

                <label className="block">
                  <span className="block text-sm text-white/70 mb-1">Mensaje</span>
                  <textarea
                    className="min-h-[140px] w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Qué querés construir, para cuándo, y cualquier dato útil"
                    required
                  />
                </label>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-white !text-slate-900 px-5 py-3 font-semibold shadow hover:-translate-y-[1px] transition"
                  >
                    Enviar
                  </button>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 font-semibold text-white/90 hover:border-white/60 transition"
                  >
                    Abrir en mi correo
                  </a>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-900/20">
                <h2 className="text-xl font-semibold">Otras formas de contacto</h2>
                <div className="mt-4 space-y-3 text-white/85">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4">
                    <p className="text-sm text-white/60">Email</p>
                    <a className="font-semibold hover:underline" href={`mailto:${CONTACT.email}`}>
                      {CONTACT.email}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4">
                    <p className="text-sm text-white/60">Teléfono</p>
                    <a className="font-semibold hover:underline" href={`tel:${CONTACT.phoneE164}`}>
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4">
                    <p className="text-sm text-white/60">WhatsApp</p>
                    <a
                      className="font-semibold hover:underline"
                      href={`https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent('Hola, quiero consultar por un proyecto')}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Escribir por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/70">Tip</p>
                <p className="font-semibold">Si ya tenés una idea, contanos:</p>
                <ul className="mt-2 text-sm text-white/80 list-disc pl-5 space-y-1">
                  <li>Qué problema querés resolver</li>
                  <li>Quiénes lo van a usar</li>
                  <li>Para cuándo lo necesitás</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
