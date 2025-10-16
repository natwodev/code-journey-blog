import type { Project } from '../../data/projects'
import { useMouseTilt } from '../../hooks/useMouseTilt'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }: { readonly project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useMouseTilt<HTMLButtonElement>()
  return (
    <Link to={`/projects/${project.id}`} ref={ref as unknown as React.Ref<HTMLAnchorElement>} onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>} onMouseLeave={onMouseLeave as unknown as React.MouseEventHandler<HTMLAnchorElement>} className="block text-left p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition neon-border will-change-transform hover:-translate-y-1 shadow-[0_0_0_rgba(0,201,167,0)] hover:shadow-[0_0_30px_rgba(0,201,167,0.25)]">
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-2 text-white/70">{project.summary}</p>
      <div className="mt-3 flex gap-2 text-xs text-brand-cyan/90">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">{t}</span>
        ))}
      </div>
    </Link>
  )
}
