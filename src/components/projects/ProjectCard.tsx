import type { Project } from '../../data/projects'
import { useMouseTilt } from '../../hooks/useMouseTilt'
import { Link } from 'react-router-dom'
import TagChip from '../common/TagChip'

export default function ProjectCard({ project }: { readonly project: Project }) {
  const { ref, onMouseMove, onMouseLeave } = useMouseTilt<HTMLButtonElement>()
  return (
    <Link to={`/projects/${project.id}`} ref={ref as unknown as React.Ref<HTMLAnchorElement>} onMouseMove={onMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>} onMouseLeave={onMouseLeave as unknown as React.MouseEventHandler<HTMLAnchorElement>} className="group block h-full text-left rounded-2xl bg-white/5 hover:bg-white/8 transition neon-border will-change-transform hover:-translate-y-1 shadow-[0_0_0_rgba(0,201,167,0)] hover:shadow-[0_0_28px_rgba(0,201,167,0.22)] overflow-hidden flex flex-col">
      {project.sections && project.sections[0]?.image && (
        <div className="h-40 w-full overflow-hidden">
          <img src={project.sections[0].image} alt={project.name} className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition" />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors duration-300">
          <span className="relative">
            {project.name}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
          </span>
        </h3>
        <p className="mt-2 text-white/70 flex-1">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <TagChip key={t} label={t} />
          ))}
        </div>
      </div>
    </Link>
  )
}
