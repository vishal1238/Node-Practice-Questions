// Create a Node.js application that connects to a PostgreSQL database and performs CRUD operations on an employee table using SQL queries.

import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "companydb",
  password: "your_password",
  port: 5432
});

// CREATE employee
app.post("/employees", async (req, res) => {
  const { name, email, salary } = req.body;

  await pool.query(
    "INSERT INTO employees (name, email, salary) VALUES ($1, $2, $3)",
    [name, email, salary]
  );

  res.send("Employee Added");
});

// READ employees
app.get("/employees", async (req, res) => {
  const result = await pool.query("SELECT * FROM employees");
  res.json(result.rows);
});

// UPDATE employee
app.put("/employees/:id", async (req, res) => {
  const { name, salary } = req.body;

  await pool.query(
    "UPDATE employees SET name=$1, salary=$2 WHERE id=$3",
    [name, salary, req.params.id]
  );

  res.send("Employee Updated");
});

// DELETE employee
app.delete("/employees/:id", async (req, res) => {
  await pool.query(
    "DELETE FROM employees WHERE id=$1",
    [req.params.id]
  );

  res.send("Employee Deleted");
});

// Start server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
