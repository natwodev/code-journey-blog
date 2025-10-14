import { useState } from 'react'

function isEmail(v: string) {
  return /.+@.+\..+/.test(v)
}

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const valid = name.trim() && isEmail(email) && subject.trim() && message.trim().length >= 10

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!valid) {
      setError('Vui lòng nhập đầy đủ thông tin (tin nhắn ≥ 10 ký tự).')
      return
    }
    setSubmitting(true)
    try {
      // Simulate send, integrate with Email API later (e.g., Formspree, Resend)
      await new Promise(r => setTimeout(r, 900))
      setSuccess('Đã gửi liên hệ! Mình sẽ phản hồi sớm nhất.')
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } catch (e) {
      setError('Gửi thất bại. Vui lòng thử lại sau.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-white/70">Họ tên</label>
          <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-cyan/50" placeholder="Nguyễn Huỳnh Nam" />
        </div>
        <div>
          <label className="text-sm text-white/70">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-cyan/50" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="text-sm text-white/70">Chủ đề</label>
        <input value={subject} onChange={e => setSubject(e.target.value)} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-cyan/50" placeholder="Trao đổi hợp tác / Hỏi đáp" />
      </div>
      <div>
        <label className="text-sm text-white/70">Nội dung</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-cyan/50" placeholder="Viết lời nhắn của bạn..." />
      </div>

      {error && <div className="text-sm text-red-400">{error}</div>}
      {success && <div className="text-sm text-brand-cyan">{success}</div>}

      <button disabled={!valid || submitting} className="mt-2 inline-flex items-center gap-2 justify-center rounded-xl px-5 py-3 neon-border bg-white/5 hover:bg-white/10 disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? (
          <svg className="animate-spin h-4 w-4 text-brand-cyan" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 6.03L12 11l9.99-4.97a2 2 0 0 0-1.03-.28H3.04c-.37 0-.71.1-1.03.28Z"/><path d="M22 8.9 12 14 2 8.9V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.9Z"/></svg>
        )}
        <span>{submitting ? 'Đang gửi...' : 'Gửi liên hệ'}</span>
      </button>
    </form>
  )
}

