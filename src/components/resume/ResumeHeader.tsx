interface ResumeHeaderProps {
    name: string
    title: string
    contact: {
        email: string
        phone: string
        location: string
        github: string
        linkedin: string
    }
}

export default function ResumeHeader({ name, title, contact }: ResumeHeaderProps) {
    return (
        <header className="resume-header">
            <h1>{name}</h1>
            <div className="resume-subtitle">{title}</div>
            <div className="resume-contact">
                <span className="resume-contact-item">✉️ {contact.email}</span>
                <span className="resume-contact-item">📞 {contact.phone}</span>
                <span className="resume-contact-item">📍 {contact.location}</span>
                <span className="resume-contact-item">🔗 {contact.github}</span>
                <span className="resume-contact-item">💼 {contact.linkedin}</span>
            </div>
        </header>
    )
}
