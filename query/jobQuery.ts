import { Database } from "bun:sqlite";
import type { JobApplicationType } from "../types";

export async function createTable(db: Database) {
  // Define the SQL query properly with column definitions
  const query = `
    CREATE TABLE IF NOT EXISTS job_search (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      position TEXT,
      company TEXT,
      industry TEXT,
      role TEXT,
      date_posted TEXT,
      date_applied TEXT,
      source TEXT,
      status TEXT
    );
  `;

  // Execute the query directly using db.run()
  await db.run(query);
}

export async function insertJob( jobApp : JobApplicationType ) {
  try {
    const query = `INSERT INTO job_search (position, company, industry, role, date_posted, date_applied, source, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const insertUser = await jobApp.db.prepare(query);
    await insertUser.run(jobApp.position, jobApp.company, jobApp.industry, jobApp.role, jobApp.datePosted, jobApp.dateApplied, jobApp.source, jobApp.status);
  } catch (e) {
    console.log("Insert Error", e);
  }
}

export async function updateStatus(db: Database, id: number, status: string) {
  try {
    const query = `UPDATE job_search SET status = ? WHERE id = ?`;
    const updateStatus = await db.prepare(query);
    await updateStatus.run(status, id);
  } catch (e) {
    console.log("Update Error", e);
  }
}

export async function deleteJob(db: Database, id: number) {
  try { 
    const query = `DELETE FROM job_search WHERE id = ?`;
    const deleteJob = await db.prepare(query);
    await deleteJob.run(id);
  }
  catch (e) {
    console.log("Delete Error", e);
  }
}
