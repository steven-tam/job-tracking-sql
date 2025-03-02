export type JobApplicationType = {
    db: Database,
    position: string | 'null',
    company: string | 'null',
    industry: string | 'null',
    role: string| 'null',
    datePosted: string | 'null',
    dateApplied: string | 'null',
    source: string | 'null',
    status: 'null' | 'applied' | 'interview' | 'offer' | 'rejected'
}