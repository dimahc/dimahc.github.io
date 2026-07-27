interface ResumeTechnologiesProps {
    title: string
    labels: {
        languages: string
        cloudDevOps: string
        dataMessaging: string
        observability: string
    }
    technologies: {
        languages: string[]
        cloudDevOps: string[]
        dataMessaging: string[]
        observability: string[]
    }
}

export default function ResumeTechnologies({ title, labels, technologies }: ResumeTechnologiesProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            <div className="tech-grid">
                <div className="tech-category">
                    <h4>{labels.languages}</h4>
                    <div className="tech-list">{technologies.languages.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.cloudDevOps}</h4>
                    <div className="tech-list">{technologies.cloudDevOps.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.dataMessaging}</h4>
                    <div className="tech-list">{technologies.dataMessaging.join(' • ')}</div>
                </div>
                <div className="tech-category">
                    <h4>{labels.observability}</h4>
                    <div className="tech-list">{technologies.observability.join(' • ')}</div>
                </div>
            </div>
        </div>
    )
}
