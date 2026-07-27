interface Project {
    name: string
    period: string
    description: string
    achievements?: string[]
    skills: string
}

interface ResumeProjectsProps {
    title: string
    skillsLabel: string
    projects: Project[]
}

export default function ResumeProjects({ title, skillsLabel, projects }: ResumeProjectsProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <div className="project-header">
                        <h3>{project.name}</h3>
                        <span className="period">{project.period}</span>
                    </div>
                    <p className="description">{project.description}</p>
                    {project.achievements && project.achievements.length > 0 && (
                        <ul className="achievements">
                            {project.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    )}
                    <div className="skills"><strong>{skillsLabel}:</strong> {project.skills}</div>
                </div>
            ))}
        </div>
    )
}
