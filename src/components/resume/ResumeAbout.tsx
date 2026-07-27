interface ResumeAboutProps {
    title: string
    content: string
}

export default function ResumeAbout({ title, content }: ResumeAboutProps) {
    return (
        <div className="resume-section">
            <h2>{title}</h2>
            <p className="resume-summary">{content}</p>
        </div>
    )
}
