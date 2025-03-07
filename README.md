# JOB TRACKING IN SQL

Tracking jobs in Excel is fustrating so use SQL and TypeScript
<img width="1290" alt="Screenshot 2025-03-01 at 8 59 24 PM" src="https://github.com/user-attachments/assets/99b46937-c859-46bf-b376-e16540ab1673" />


To keep it simple, there are only 3 query functions you can call to edit your database: 
deleteJob(db: Database, id: number), 
updateStatus(db: Database, id: number, status: string), 
insertJob(db: Database, position: string, company: string, industry: string, role: string, datePosted: string, dateApplied: string, source: string, status: string).

Call "bun start" to execute a query function and refresh the SQLite database afterward to see the changes.


To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
