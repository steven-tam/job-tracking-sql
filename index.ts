import { Database } from "bun:sqlite";
import { createTable, insertJob, updateStatus, deleteJob } from "./query/jobQuery";

// CREATE DATABASE
const db = new Database("database/jobs.sqlite", {
    strict: true,
    create: true,
});
db.exec("PRAGMA journal_mode = WAL;");
// createTable(db)


// For tracking the job applications
//----------- Query Functions ------------

// deleteJob(db, 2)
// updateStatus(db, 1, "interview")
// insertJob(db, "Software Engineer", "Google", "Tech", "Full Stack", "2021-10-01", "2021-10-02", "LinkedIn", "applied")

//----------- Execute query functions below ------------

// https://play.ht/

// deleteJob(db, 1)

insertJob(db, "Software Engineering Intern", "Endeavour. Inspired Infrastructure", "Utilities and Renewable Energy", "Intern", "Feb 26, 2025", "Mar 1, 2025", "Handshake", "applied")
