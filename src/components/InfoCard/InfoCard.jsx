export default function InfoCard({ title, text }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-lg shadow-slate-900/30">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-100 border border-blue-300/20">✓</span>
        <div>
          <h3 className="font-semibold mb-1 text-white">{title}</h3>
          <p className="text-sm text-white/80 leading-relaxed">{text}</p>
        </div>
      </div>
    </article>
  )
}
