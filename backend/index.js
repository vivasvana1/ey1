const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config(); // To load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(cors());

// Configure PostgreSQL connection using environment variables
const pool = new Pool({
    user: process.env.DB_USER,        // Database username from .env
    host: process.env.DB_HOST,        // Database host from .env
    database: process.env.DB_NAME,    // Database name from .env
    password: process.env.DB_PASSWORD,// Database password from .env
    port: process.env.DB_PORT || 5432,// Default PostgreSQL port
});

// Route to fetch schemes from the PostgreSQL database
app.get('/api/schemes', async (req, res) => {
    try {
        console.log('Attempting to fetch data from the database...');
        const result = await pool.query('SELECT * FROM govt_schemes_table;'); // Adjust if your table name is different
        console.log('Query Result:', result.rows);  // Log query results
        res.json(result.rows);  // Send the result as a JSON response
    } catch (error) {
        console.error('Error fetching schemes:', error.message);  // Log error details
        res.status(500).json({ error: 'An error occurred while fetching schemes', details: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
