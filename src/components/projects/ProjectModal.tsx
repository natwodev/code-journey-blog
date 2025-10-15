import type { Project } from '../../data/projects'

export default function ProjectModal({ project, onClose }: Readonly<{ project: Project | null; onClose: () => void }>) {
  if (!project) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md mx-auto rounded-2xl bg-[#121214] neon-border">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg sm:text-xl font-semibold text-white truncate pr-2">{project.name}</h3>
          <button 
            onClick={onClose} 
            className="flex-shrink-0 px-3 py-1.5 text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            Đóng
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-4">
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">{project.summary}</p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span 
                key={t} 
                className="px-2 py-1 text-xs rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan/90"
              >
                {t}
              </span>
            ))}
          </div>
          
          {/* Demo link */}
          {project.link && (
            <a 
              className="inline-block px-4 py-2 text-sm font-medium text-brand-cyan bg-brand-cyan/10 rounded-lg hover:bg-brand-cyan/20 transition-colors" 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
            >
              Xem demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

