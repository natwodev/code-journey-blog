import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FullPageGradient from '../../components/home/FullPageGradient'

export default function Timeline2024() {
  const { t } = useTranslation()
  
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  // Read achievements array from locales
  const achievementsItems = t('timeline.2024.achievements.items', { returnObjects: true }) as string[]

  return (
    <div className="min-h-screen relative">
      <FullPageGradient />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {/* Back button */}
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('common.backToAbout', { defaultValue: 'Back to About' })}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="text-brand-cyan/90 text-sm font-medium mb-2">{t('common.milestone')}: 2024</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
              {t('timeline.2024.title')}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('timeline.2024.description')}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Advanced Subjects */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('timeline.2024.advancedSubjects.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.advancedSubjects.security.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.advancedSubjects.security.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.advancedSubjects.ai.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.advancedSubjects.ai.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.advancedSubjects.softwareEngineering.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.advancedSubjects.softwareEngineering.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.advancedSubjects.webProgramming.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.advancedSubjects.webProgramming.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Capstone Project */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('timeline.2024.capstoneProject.title')}
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.capstoneProject.project.title')}</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  {t('timeline.2024.capstoneProject.project.description')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Three.js', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design'].map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Excellent Practical Results */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3H12L8 7H21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('timeline.2024.practicalResults.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.practicalResults.securityPractice.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.practicalResults.securityPractice.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.practicalResults.webPractice.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.practicalResults.webPractice.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.practicalResults.openSourcePractice.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.practicalResults.openSourcePractice.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2024.practicalResults.oopDesignPractice.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2024.practicalResults.oopDesignPractice.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('common.achievements')}
              </h2>
              <ul className="space-y-3">
                {achievementsItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Developed */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('common.skillsDeveloped')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Information Security', 'Artificial Intelligence', 'Software Engineering', 'Web Programming', 'System Analysis & Design', 'Windows Programming', 'Advanced Database', 'React', 'Three.js', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
