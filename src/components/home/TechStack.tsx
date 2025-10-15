import { motion } from 'framer-motion'
import { skills } from '../../data/skills'

export default function TechStack() {
  
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <motion.h2 
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl font-poppins font-semibold"
      >
        Tech Stack
      </motion.h2>
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <motion.span 
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              type: 'spring',
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 text-sm sm:text-base cursor-default"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

