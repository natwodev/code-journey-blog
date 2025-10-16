import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.filter(p => ['js-visualizer', 'react-portfolio'].includes(p.id)).slice(0, 2)
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-poppins font-semibold"
      >
        Dự án nổi bật
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}


