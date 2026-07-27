import { experienceContent } from '@/content/experience'
import { useTranslation } from '@/hooks'

export default function Experience() {
  const { t, language } = useTranslation()
  const jobs = experienceContent[language].jobs

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-light">{t('experience.title')}</h2>
      {jobs.map((job, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-muted">{job.company} - {job.location}</p>
          <p className="text-muted/80">{job.period}</p>
          <p className="text-foreground/80">{job.description}</p>
          <p className="text-muted"><strong>{t('experience.skillsLabel')}:</strong> {job.skills}</p>
        </div>
      ))}
    </section>
  )
}
