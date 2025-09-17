import Database from "bun:sqlite";

const db = new Database("timeflow.db");
export default db;
