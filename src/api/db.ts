import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function initializeDB() {
  const db = await open({
    filename: './db.sqlite',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      discord_id TEXT UNIQUE,
      email TEXT,
      username TEXT,
      password TEXT
    )
  `);

  return db;
}
