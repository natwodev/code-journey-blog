import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from '../components/projects/ProjectCard'
import { useTypingEffect } from '../hooks/useTypingEffect'

export default function Projects() {
  const { t } = useTranslation()
  const title = useTypingEffect(t('projects.title'), 40)
  type Category = 'Web' | 'Desktop' | 'Mobile' | 'Api'
  type Status = 'Completed' | 'In Progress' | 'Planned'
  const [category, setCategory] = useState<'All' | Category>('All')
  const [status, setStatus] = useState<'All' | Status>('All')

  const stats = useMemo(() => {
    const total = projects.length
    const completed = projects.filter(p => p.status === 'Completed').length
    const inProgress = projects.filter(p => p.status === 'In Progress').length
    const planned = projects.filter(p => p.status === 'Planned').length
    return { total, completed, inProgress, planned }
  }, [])

  const categories: Array<'All' | Category> = ['All', 'Web', 'Desktop', 'Mobile', 'Api']
  const statuses: Array<'All' | Status> = ['All', 'Completed', 'In Progress', 'Planned']

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const okCat = category === 'All' ? true : p.categories?.includes(category as Category)
      const okSta = status === 'All' ? true : p.status === status
      return okCat && okSta
    })
  }, [category, status])

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-5xl md:text-7xl font-poppins font-semibold">{title || ' '}</h2>
      <p className="mt-4 text-white/70">{t('projects.description')}</p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
          <div className="text-3xl font-semibold text-white">{stats.total}</div>
          <div className="text-xs text-white/70 mt-1">Total</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
          <div className="text-3xl font-semibold text-brand-cyan">{stats.completed}</div>
          <div className="text-xs text-white/70 mt-1">Completed</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
          <div className="text-3xl font-semibold text-yellow-400">{stats.inProgress}</div>
          <div className="text-xs text-white/70 mt-1">In Progress</div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
          <div className="text-3xl font-semibold text-blue-400">{stats.planned}</div>
          <div className="text-xs text-white/70 mt-1">Planned</div>
        </div>
      </div>

      {/* Filters */}
      {/* Mobile: compact selects */}
      <div className="mt-6 grid grid-cols-1 gap-3 sm:hidden">
        <label className="text-left">
          <span className="block text-white/70 text-xs mb-1">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as 'All' | Category)}
            className="w-full rounded-lg border border-white/10 bg-white/5 text-white/90 px-3 py-2"
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="text-left">
          <span className="block text-white/70 text-xs mb-1">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as 'All' | Status)}
            className="w-full rounded-lg border border-white/10 bg-white/5 text-white/90 px-3 py-2"
          >
            {statuses.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Desktop/Tablet: chip controls */}
      <div className="mt-6 hidden sm:flex sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-sm">Category:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)} className={`px-3 py-1 rounded-full border transition ${category === c ? 'border-brand-cyan/60 bg-brand-cyan/10 text-white' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/8'}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-sm">Status:</span>
          <div className="flex flex-wrap gap-2">
            {statuses.map(s => (
              <button key={s} onClick={() => setStatus(s)} className={`px-3 py-1 rounded-full border transition ${status === s ? 'border-brand-cyan/60 bg-brand-cyan/10 text-white' : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/8'}`}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
