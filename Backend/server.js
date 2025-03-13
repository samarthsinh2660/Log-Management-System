// server.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// PostgreSQL connection configuration using environment variables
const pool = new Pool({
  user: process.env.PGUSER,         // PostgreSQL username
  host: process.env.PGHOST,         // Database host
  database: process.env.PGDATABASE, // Database name
  password: process.env.PGPASSWORD, // Database password
  port: process.env.PGPORT,         // Database port
});

// Endpoint to get all log entries
app.get('/api/logs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM logs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Endpoint to add a new log entry
app.post('/api/logs', async (req, res) => {
  try {
    const { message } = req.body;
    const result = await pool.query(
      'INSERT INTO logs (message, created_at) VALUES ($1, NOW()) RETURNING *',
      [message]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Log System API');
  });

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
