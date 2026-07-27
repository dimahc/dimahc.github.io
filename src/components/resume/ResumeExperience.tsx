import type { AchievementGroup, Experience } from '@/types'

interface ResumeExperienceProps {
    title: string
    skillsLabel: string
    jobs: Experience[]
}

export default function ResumeExperience({ title, skillsLabel, jobs }: ResumeExperienceProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            {jobs.map((job, index) => (
                <div key={index} className="job">
                    <div className="job-header">
                        <h3>{job.title}</h3>
                        <span className="period">{job.period}</span>
                    </div>
                    <div className="company">{job.company} • {job.location}</div>
                    {job.achievementGroups && job.achievementGroups.length > 0 ? (
                        <div className="achievement-groups">
                            {job.achievementGroups.map((group: AchievementGroup, gi: number) => (
                                <div key={gi} className="achievement-group">
                                    {group.title && <strong className="group-title">{group.title}</strong>}
                                    <ul className="achievements">
                                        {group.items.map((item, ii) => (
                                            <li key={ii}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="description">{job.description}</p>
                    )}
                    <div className="skills"><strong>{skillsLabel}:</strong> {job.skills.join(', ')}</div>
                </div>
            ))}
        </div>
    )
}
