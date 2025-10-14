import { motion } from 'framer-motion'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-poppins font-semibold">Liên hệ</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-2 text-white/75">Vui lòng nhập thông tin và mô tả để được hỗ trợ nhanh.</motion.p>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 rounded-2xl p-6 bg-white/5 border border-white/10">
        <h3 className="text-xl font-semibold">Gửi yêu cầu hỗ trợ</h3>
        <p className="text-white/70 mt-1">Mình sẽ phản hồi sớm nhất sau khi nhận được thông tin.</p>
        <div className="mt-4">
          <ContactForm />
        </div>
      </motion.div>
    </div>
  )
}
