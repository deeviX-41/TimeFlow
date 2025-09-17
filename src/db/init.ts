import db from "./connection";

// Crear tabla Users
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT
  )
`);

// Crear tabla Customers
db.run(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT,
    email TEXT
  )
`);

// Crear tabla Appointments
db.run(`
  CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    customerId INTEGER NOT NULL,
    date TEXT NOT NULL,
    hour TEXT NOT NULL,
    status TEXT CHECK(status IN ('pendiente', 'hecha', 'cancelada')) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (customerId) REFERENCES customers(id)
  )
`);

console.log("Base de datos inicializada");
