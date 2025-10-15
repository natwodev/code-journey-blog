import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects, type Project } from '../data/projects'
import ProjectCard from '../components/projects/ProjectCard'
import ProjectModal from '../components/projects/ProjectModal'

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState<Project | null>(null)
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-poppins font-semibold">{t('projects.title')}</h2>
      <p className="mt-4 text-white/70">{t('projects.description')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} onOpen={setActive} />
        ))}
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  )
}
