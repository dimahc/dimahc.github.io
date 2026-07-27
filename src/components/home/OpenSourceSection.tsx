'use client'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'

export default function OpenSourceSection() {
  const { t } = useTranslation()

  return (
    <section id="oss">
      <div className="max-w-[920px] mx-auto px-8 py-16 border-t border-line-soft">
        <div className="flex items-baseline gap-3.5 mb-8">
          <span className="font-mono text-[12px] text-faint uppercase tracking-wider">{t('oss.tag')}</span>
          <h2 className="font-bold text-2xl">{t('oss.title')}</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-[10px] overflow-hidden"
        >
          {/* Left panel — terminal prompt + project info */}
          <div className="bg-surface p-7 md:p-[28px_30px] flex flex-col">
            <div className="font-mono text-[11px] text-faint mb-5 leading-relaxed">
              <span className="text-muted">~/oss/</span> <span className="text-accent">$</span> cat provider.tf
            </div>
            <h3 className="font-bold text-[19px] mb-2.5">{t('oss.project')}</h3>
            <p className="text-muted text-[14.5px] mb-[18px]">{t('oss.description')}</p>
            <a
              href="https://github.com/dimahc"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-secondary hover:text-accent transition-colors inline-flex items-center gap-1.5 mt-auto"
            >
              {t('oss.cta')}
            </a>
          </div>

          {/* Right panel — terminal emulator window */}
          <div className="bg-sunken overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
              <div className="flex items-center gap-[7px]">
                <span className="w-[11px] h-[11px] rounded-full bg-red-500/80" />
                <span className="w-[11px] h-[11px] rounded-full bg-yellow-500/80" />
                <span className="w-[11px] h-[11px] rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[11px] text-faint">provider.tf</span>
              <div className="w-[51px]" />
            </div>
            {/* Code content */}
            <div className="p-7 md:p-[28px_26px] font-mono text-[12.5px] leading-relaxed text-muted overflow-x-auto">
              <span className="text-secondary">resource</span> <span className="text-accent">&quot;cloudavenue_vapp&quot;</span> &quot;app&quot; &#123;<br />
              &nbsp;&nbsp;name        = <span className="text-accent">&quot;prod-ingest&quot;</span><br />
              &nbsp;&nbsp;description = <span className="text-accent">&quot;real-time pipeline&quot;</span><br />
              &#125;<br /><br />
              <span className="text-secondary">resource</span> <span className="text-accent">&quot;cloudavenue_vm&quot;</span> &quot;worker&quot; &#123;<br />
              &nbsp;&nbsp;vapp_name = cloudavenue_vapp.app.name<br />
              &nbsp;&nbsp;cpus      = 4<br />
              &nbsp;&nbsp;memory    = 8192<br />
              &#125;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
