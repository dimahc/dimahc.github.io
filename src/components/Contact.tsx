import { useTranslation } from '@/hooks'
import { PERSONAL_INFO } from '@/lib/constants'
import { validateForm } from '@/lib/validators'
import type { FormData, FormErrors, FormStatus } from '@/types'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { FormEvent, useEffect, useState } from 'react'

export default function Contact() {
  const { t, tNamespace } = useTranslation()
  const contactLabels = tNamespace('contact')

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const validationErrors = validateForm(formData, contactLabels)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

      if (!serviceId || !templateId) {
        console.error('EmailJS configuration missing')
        throw new Error('Email service not configured')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: PERSONAL_INFO.email.professional
        }
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})

      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <motion.section
      className="space-y-12 max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="space-y-8"
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-muted text-lg md:text-xl">{t('contact.cta')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4 group">
            <Mail className="w-6 h-6 mt-1 flex-shrink-0 group-hover:text-foreground transition-colors" />
            <div className="space-y-1">
              <p className="text-sm text-muted">{t('contact.email')}</p>
              <a
                href={`mailto:${PERSONAL_INFO.email.professional}`}
                className="text-lg break-all hover:text-blue-400 transition-colors"
              >
                {PERSONAL_INFO.email.professional}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <Linkedin className="w-6 h-6 mt-1 flex-shrink-0 text-blue-400" />
            <div className="space-y-1">
              <p className="text-sm text-muted">{t('contact.linkedin')}</p>
              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-400 hover:underline break-all"
              >
                linkedin.com/in/abdoul-hamid-coulibaly
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 group">
            <MapPin className="w-6 h-6 mt-1 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
            <div className="space-y-1">
              <p className="text-sm text-muted">{t('contact.location')}</p>
              <p className="text-lg">{t('contact.locationText')}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6">{t('contact.formTitle')}</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder={t('contact.form.namePlaceholder')}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  if (errors.name) setErrors({ ...errors, name: undefined })
                }}
                aria-label={t('contact.form.namePlaceholder')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-blue-400'
                  }`}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                aria-label={t('contact.form.emailPlaceholder')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-blue-400'
                  }`}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value })
                  if (errors.message) setErrors({ ...errors, message: undefined })
                }}
                aria-label={t('contact.form.messagePlaceholder')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={6}
                className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-border focus:ring-blue-400'
                  }`}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'success' && (
              <p className="text-green-500 text-sm">{t('contact.form.successMessage')}</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-sm">{t('contact.form.errorMessage')}</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm hover:bg-blue-400/10 hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'sending' ? t('contact.form.sending') : t('contact.form.sendButton')}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
