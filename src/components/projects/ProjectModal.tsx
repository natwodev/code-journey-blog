import type { Project } from '../../data/projects'

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70">
      <div className="max-w-lg w-full mx-6 p-6 rounded-2xl bg-[#121214] neon-border">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-white/75">{project.summary}</p>
            <div className="mt-3 flex gap-2 text-xs text-brand-cyan/90">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">{t}</span>
              ))}
            </div>
            {project.link && (
              <a className="mt-4 inline-block text-brand-cyan hover:underline" href={project.link} target="_blank" rel="noreferrer">Xem demo</a>
            )}
          </div>
          <button onClick={onClose} className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20">Đóng</button>
        </div>
      </div>
    </div>
  )
}

