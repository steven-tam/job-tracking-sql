import { Database } from "bun:sqlite";
import { createTable, insertJob, updateStatus, deleteJob } from "./query/jobQuery";

// CREATE DATABASE
const db = new Database("database/jobs.sqlite", {
    strict: true,
    create: true,
});
db.exec("PRAGMA journal_mode = WAL;");
// createTable(db)


// For changing the "job_search" table
//----------- Query Function References ------------

// deleteJob(db, 2)
// updateStatus(db, 1, "interview")
// insertJob(db, "Position", "Company", "Industry", "Role", "Date Posted", "Date Applied", "Source", "Status")

//----------- Execute Query Functions Below ------------

insertJob(db, "Software Engineering Intern", "Endeavour. Inspired Infrastructure", "Utilities and Renewable Energy", "Intern", "Feb 26, 2025", "Mar 1, 2025", "Handshake", "applied")
