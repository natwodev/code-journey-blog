import { useState } from 'react'
import emailjs from '@emailjs/browser'
import SocialLinks from '../components/contact/SocialLinks'
import FullPageGradient from '../components/home/FullPageGradient'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const contactEmail = import.meta.env?.VITE_CONTACT_EMAIL ?? 'nhuynhnamht2023@gmail.com'
  const phone = '+84 972160259'
  const title = useTypingEffect(t('contact.title'), 60)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      // Kiểm tra xem EmailJS đã được cấu hình chưa
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_contact'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

      // Nếu chưa cấu hình EmailJS, sử dụng mailto fallback
      if (publicKey === 'your_public_key' || !publicKey) {
        // Fallback: Mở mail client với thông tin form
        const subject = encodeURIComponent(formData.subject || 'Liên hệ từ website')
        const body = encodeURIComponent(
          `Tên: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Chủ đề: ${formData.subject}\n\n` +
          `Tin nhắn:\n${formData.message}`
        )
        window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`)
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        return
      }

      // Gửi email qua EmailJS
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: contactEmail
      }, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative">
      <FullPageGradient />
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-16">
        <h1 className="text-5xl md:text-7xl font-poppins font-semibold tracking-wide mb-10">{title || ' '}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Name, email, phone, social icons */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="text-2xl text-brand-cyan mb-4">{t('contact.ownerName')}</div>

            <div className="flex items-center gap-3 mb-3 text-lg">
              <span className="text-brand-cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5Z"/></svg>
              </span>
              <a href={`mailto:${contactEmail}`} className="hover:underline">{contactEmail}</a>
            </div>

            <div className="flex items-center gap-3 mb-6 text-lg">
              <span className="text-brand-cyan">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.36 2.28.55 3.5.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1c0 1.22.19 2.4.55 3.5a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
              </span>
              <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
            </div>

            <SocialLinks />
          </div>

          {/* Right: Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4" onSubmit={handleSubmit}>
            <input 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" 
              placeholder={t('contact.yourNamePlaceholder')} 
              required 
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" 
              placeholder={t('contact.yourEmailPlaceholder')} 
              required 
            />
            <input 
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" 
              placeholder={t('contact.yourSubjectPlaceholder')} 
            />
            <textarea 
              rows={6} 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-lg bg-black/30 border border-white/15 px-4 py-3 focus:outline-none focus:border-brand-cyan/60" 
              placeholder={t('contact.yourMessagePlaceholder')} 
              required
            />
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-sm">
                ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-sm">
                ❌ Có lỗi xảy ra khi gửi tin nhắn. 
                <br />
                <span className="text-xs text-red-300">
                  💡 Hãy kiểm tra console để xem chi tiết lỗi hoặc cấu hình EmailJS theo hướng dẫn trong ENV_SETUP.md
                </span>
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isLoading}
              className={`px-5 py-3 rounded-xl border transition flex items-center justify-center gap-2 ${
                isLoading 
                  ? 'bg-gray-500/20 text-gray-400 border-gray-500/40 cursor-not-allowed' 
                  : 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40 hover:bg-brand-cyan/30'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Đang gửi...
                </>
              ) : (
                t('contact.send')
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
