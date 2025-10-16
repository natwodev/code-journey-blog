import { Link, Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { projects, type Project as ProjectType } from '../data/projects'
import ProjectImageSlider from '../components/projects/ProjectImageSlider'
import FullscreenImageModal from '../components/projects/FullscreenImageModal'

export default function Project() {
  const { id } = useParams()
  const project: ProjectType | undefined = projects.find(p => p.id === id)
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false)
  const [fullscreenIndex, setFullscreenIndex] = useState(0)

  if (!project) return <Navigate to="/projects" replace />

  // Prepare images for slider
  const projectImages = project.sections?.map(section => ({
    id: section.id,
    title: section.title,
    image: section.image || ''
  })).filter(img => img.image) || []

  const handleImageClick = (index: number) => {
    setFullscreenIndex(index)
    setIsFullscreenOpen(true)
  }

  const handleCloseFullscreen = () => {
    setIsFullscreenOpen(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-white/70 flex items-center gap-2 mb-6">
        <Link to="/projects" className="text-brand-cyan/90 hover:underline">Projects</Link>
        <span>/</span>
        <span>{project.name}</span>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Project Information */}
        <div className="space-y-6">
          {/* Project Header */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-white to-white/85 bg-clip-text text-transparent">
              {project.name}
            </h1>
            
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-full bg-white/8 border border-white/15">{t}</span>
              ))}
            </div>
          </div>

          {/* Project Summary */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-3 text-white">Tổng quan</h2>
            <p className="text-white/80 leading-relaxed text-[15px] md:text-base">{project.summary}</p>
          </div>

          {/* Project Details */}
          {project.details && (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-3 text-white">Chi tiết dự án</h2>
              <div className="prose prose-invert max-w-none whitespace-pre-wrap text-white/85 leading-relaxed text-[15px] md:text-base">
                {project.details}
              </div>
            </div>
          )}

          {/* Project Sections */}
          {project.sections && project.sections.length > 0 && (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4 text-white">Tính năng chính</h2>
              <div className="space-y-4">
                {project.sections.map(section => (
                  <div key={section.id} className="border-l-2 border-brand-cyan/30 pl-4">
                    <h3 className="text-lg font-medium text-white mb-2">{section.title}</h3>
                    {section.content && (
                      <p className="text-white/80 text-sm leading-relaxed">{section.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Demo Link */}
          {project.link && (
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan/90 hover:bg-brand-cyan/20 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Xem demo
              </a>
            </div>
          )}
        </div>

        {/* Right Column - Image Slider */}
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <ProjectImageSlider images={projectImages} onImageClick={handleImageClick} />
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <FullscreenImageModal
        images={projectImages}
        currentIndex={fullscreenIndex}
        isOpen={isFullscreenOpen}
        onClose={handleCloseFullscreen}
      />
    </div>
  )
}


