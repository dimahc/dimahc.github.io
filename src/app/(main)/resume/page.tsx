import ResumeAbout from '@/components/resume/ResumeAbout'
import ResumeEducation from '@/components/resume/ResumeEducation'
import ResumeExperience from '@/components/resume/ResumeExperience'
import ResumeHeader from '@/components/resume/ResumeHeader'
import ResumeProjects from '@/components/resume/ResumeProjects'
import ResumeStyles from '@/components/resume/ResumeStyles'
import ResumeTechnologies from '@/components/resume/ResumeTechnologies'
import PrintButton from '@/components/ui/PrintButton'
import { getResumeData, getResumeLabels } from '@/lib/resumeData'

function ResumeContent() {
    // Use default language for server-side rendering
    const currentLanguage: 'en' | 'fr' = 'en'

    const portfolioData = getResumeData(currentLanguage)
    const labels = getResumeLabels(currentLanguage)

    return (
        <div className="resume-container">
            <ResumeStyles />
            <PrintButton />
            <ResumeHeader
                name={portfolioData.name}
                title={portfolioData.title}
                contact={portfolioData.contact}
            />
            <ResumeAbout
                title={labels.about}
                content={portfolioData.about}
            />
            <ResumeTechnologies
                title={labels.technologies}
                labels={{
                    languages: labels.languages,
                    cloudDevOps: labels.cloudDevOps,
                    dataMessaging: labels.dataMessaging,
                    observability: labels.observability,
                }}
                technologies={portfolioData.technologies}
            />
            <ResumeExperience
                title={labels.experience}
                skillsLabel={labels.skills}
                jobs={portfolioData.experience}
            />
            <ResumeProjects
                title={labels.projects}
                skillsLabel={labels.skills}
                projects={portfolioData.projects}
            />
            <ResumeEducation
                title={labels.education}
                education={portfolioData.education}
            />
        </div>
    )
}

export default function ResumePage() {
    return <ResumeContent />
}
