export default function ContactCta() {
  return (
    <div id="contacto" className="mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-2xl shadow-blue-900/20">
        <div>
          <p className="text-sm text-white/70">¿Listo para conversar?</p>
          <p className="text-xl font-semibold">Contanos tu reto y armamos juntos el primer paso sin compromiso.</p>
        </div>
        <div className="flex gap-3">
          <a href="mailto:hola@nts-solutions.com" className="rounded-full bg-white !text-slate-900 px-4 py-2 font-semibold hover:-translate-y-[1px] transition">
            Escríbinos
          </a>
          <a href="tel:+541100000000" className="rounded-full border border-white/30 px-4 py-2 font-semibold text-white/90 hover:border-white/60 transition">
            Llama ahora
          </a>
        </div>
      </div>
    </div>
  )
}
