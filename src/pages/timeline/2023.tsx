import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import FullPageGradient from '../../components/home/FullPageGradient'

export default function Timeline2023() {
  const { t } = useTranslation()
  
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

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
            to="/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('common.backToHome')}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="text-brand-cyan/90 text-sm font-medium mb-2">{t('common.milestone')}: 2023</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold mb-4">
              {t('timeline.2023.title')}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              {t('timeline.2023.description')}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Core Subjects */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {t('timeline.2023.coreSubjects.title')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2023.coreSubjects.dataStructures.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2023.coreSubjects.dataStructures.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2023.coreSubjects.oop.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2023.coreSubjects.oop.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2023.coreSubjects.networks.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2023.coreSubjects.networks.description')}
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">{t('timeline.2023.coreSubjects.database.title')}</h3>
                  <p className="text-white/70 text-sm">
                    {t('timeline.2023.coreSubjects.database.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Subjects */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 border border-white/10 grid place-items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3H12L8 7H21V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                Môn thực hành xuất sắc
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">Thực hành lý thuyết đồ thị</h3>
                  <p className="text-white/70 text-sm">
                    Thực hiện các thuật toán đồ thị như DFS, BFS, Dijkstra, Kruskal.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">Thực hành hệ điều hành</h3>
                  <p className="text-white/70 text-sm">
                    Làm việc với Linux, shell scripting, process management.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">Thực hành lập trình hướng đối tượng</h3>
                  <p className="text-white/70 text-sm">
                    Xây dựng các ứng dụng Java với OOP principles.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="font-semibold text-brand-cyan mb-2">Thực hành mạng máy tính</h3>
                  <p className="text-white/70 text-sm">
                    Lập trình socket, xây dựng ứng dụng client-server.
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
                Thành tựu nổi bật
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                  <span className="text-white/80">Đạt điểm A trong môn Thực hành lý thuyết đồ thị</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                  <span className="text-white/80">Đạt điểm A trong môn Thực hành lập trình hướng đối tượng</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                  <span className="text-white/80">Nắm vững kiến thức nền tảng về cấu trúc dữ liệu và giải thuật</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 shrink-0"></div>
                  <span className="text-white/80">Hiểu sâu về lập trình mạng và socket programming</span>
                </li>
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
                Kỹ năng phát triển
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Object-Oriented Programming', 'Operating Systems', 'Computer Networks', 'Database Systems', 'Graph Theory', 'Discrete Mathematics'].map((skill) => (
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
