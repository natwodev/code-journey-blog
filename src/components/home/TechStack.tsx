import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import SkillBadge from '../common/SkillBadge'

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04, type: 'spring', stiffness: 220 }}
          >
            <SkillBadge name={skill.name} />
          </motion.span>
        ))}
      </div>
    </section>
  )
}

