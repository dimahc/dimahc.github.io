'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Space_Grotesk } from 'next/font/google'
import { validateForm } from '@/lib/validators'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import type { FormData, FormErrors, FormStatus } from '@/types'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
})

export default function ContactSection() {
  const { t } = useTranslation()

  if (
    !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
    !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ) {
    console.error('Missing EmailJS environment variables. Check .env file.')
  }

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const validationErrors = validateForm(formData, {
      nameRequired: t('contact.validation.nameRequired'),
      emailRequired: t('contact.validation.emailRequired'),
      emailInvalid: t('contact.validation.emailInvalid'),
      messageRequired: t('contact.validation.messageRequired'),
      messageMinLength: t('contact.validation.messageMinLength'),
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 border-t border-line-soft">
      <div className="max-w-[920px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="flex items-baseline gap-3.5 mb-2">
            <h2 className={`${spaceGrotesk.className} text-2xl font-bold`}>
              {t('contact.formTitle')}
            </h2>
          </div>

          <p className="text-muted text-sm mb-8 max-w-[56ch] leading-relaxed">
            {t('contact.cta')}
          </p>

          {status === 'success' ? (
            <div className="border border-border rounded-[10px] p-7 bg-surface flex items-center gap-3">
              <CheckCircle size={20} className="text-accent shrink-0" />
              <p className="text-sm text-muted">{t('contact.form.successMessage')}</p>
            </div>
          ) : status === 'error' ? (
            <div className="border border-border rounded-[10px] p-7 bg-surface flex items-center gap-3">
              <AlertCircle size={20} className="text-red-400 shrink-0" />
              <p className="text-sm text-muted">{t('contact.form.errorMessage')}</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-accent hover:text-accent/80 text-sm ml-auto transition-colors"
              >
                {t('contact.form.retryButton')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-[520px]">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full bg-sunken border border-border rounded-[10px] px-4 py-3 text-sm text-foreground placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full bg-sunken border border-border rounded-[10px] px-4 py-3 text-sm text-foreground placeholder:text-faint focus:outline-none focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full bg-sunken border border-border rounded-[10px] px-4 py-3 text-sm text-foreground placeholder:text-faint focus:outline-none focus:border-accent transition-colors resize-y min-h-[120px]"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5 font-mono">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 bg-accent text-background font-medium text-sm px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>{t('contact.form.sending')}</>
                ) : (
                  <>
                    {t('contact.form.sendButton')}
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
