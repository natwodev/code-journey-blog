//

export default function BlogFilter({ tags, active, onChange }: { readonly tags: string[]; readonly active: string; readonly onChange: (tag: string) => void }) {
  const all = ['All', ...tags]
  return (
    <div className="flex flex-wrap items-center gap-2">
      {all.map((t) => {
        const isActive = (active === t) || (active === 'All' && t === 'All')
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`relative px-3 py-1 rounded-full border transition ${isActive ? 'border-brand-cyan/60 bg-brand-cyan/10 text-white' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/8'}`}
          >
            {t}
            {/* underline removed per request */}
          </button>
        )
      })}
    </div>
  )
}
