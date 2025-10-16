import { motion } from 'framer-motion'
import { skills } from '../../data/skills'
import SkillBadge from '../common/SkillBadge'

export default function ProfileSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-poppins font-semibold">About Me</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-3 text-white/80 max-w-3xl">
        Mình là developer yêu Java & JS, đam mê lập trình mạng và UI hiện đại.
      </motion.p>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map(s => (
          <motion.span key={s.name} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <SkillBadge name={s.name} />
          </motion.span>
        ))}
      </div>
    </section>
  )
}

