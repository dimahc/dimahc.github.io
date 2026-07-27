import { projectsContent } from '@/content/projects'
import { useTranslation } from '@/hooks'
import { FC } from 'react'

const Projects: FC = () => {
  const { t, language } = useTranslation()
  const projects = projectsContent[language].projects

  return (
    <section className="space-y-12">
      <h2 className="text-3xl font-light">{t('projects.title')}</h2>
      {projects.map((project, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="text-muted/80">{project.period}</p>
          <p className="text-foreground/80">{project.description}</p>
          <ul className="list-disc list-inside text-muted">
            {project.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          <p className="text-muted"><strong>{t('projects.skillsLabel')}:</strong> {project.skills}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects
