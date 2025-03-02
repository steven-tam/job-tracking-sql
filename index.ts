import { Database } from "bun:sqlite";
import { createTable, insertJob, updateStatus, deleteJob } from "./query/jobQuery";
import type { JobApplicationType } from "./types";

// CREATE DATABASE
const db = new Database("database/jobs.sqlite", {
    strict: true,
    create: true,
});
db.exec("PRAGMA journal_mode = WAL;");
createTable(db);

// For changing the "job_search" table
//----------- Query Function References ------------

// deleteJob(db, 2)
// updateStatus(db, 1, "interview")
// insertJob(db, "Position", "Company", "Industry", "Role", "Date Posted", "Date Applied", "Source", "Status")

//----------- Execute Query Functions Below ------------

const newJobApplication: JobApplicationType = {
    db: db,
    position: "Software Engineering",
    company: "U.S. News & World Report",
    industry: "Journalism, Media & Publishing",
    role: "Intern",
    datePosted: "Feb 28, 2025",
    dateApplied: "Mar 2, 2025",
    source: "Handshake",
    status: "applied"
}

insertJob(newJobApplication)
