import { Link, Navigate, useParams } from 'react-router-dom'
import { projects, type Project as ProjectType } from '../data/projects'

export default function Project() {
  const { id } = useParams()
  const project: ProjectType | undefined = projects.find(p => p.id === id)
  if (!project) return <Navigate to="/projects" replace />

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-sm text-white/70 flex items-center gap-2">
        <Link to="/projects" className="text-brand-cyan/90 hover:underline">Projects</Link>
        <span>/</span>
        <span>{project.name}</span>
      </div>

      <h1 className="mt-3 text-3xl md:text-5xl font-semibold bg-gradient-to-r from-white to-white/85 bg-clip-text text-transparent">
        {project.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full bg-white/8 border border-white/15">{t}</span>
        ))}
      </div>

      <p className="mt-6 text-white/80 leading-relaxed text-[15px] md:text-base">{project.summary}</p>

      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="inline-block mt-6 px-4 py-2 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan/90 hover:bg-brand-cyan/20 transition">
          Xem demo
        </a>
      )}
    </div>
  )
}


