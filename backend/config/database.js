const { Pool } = require('pg');

// Create a new pool instance with connection details
const pool = new Pool({
    user: 'your_username', // replace with your database user
    host: 'localhost', // replace with your database host
    database: 'your_database', // replace with your database name
    password: 'your_password', // replace with your database password
    port: 5432, // replace with your database port
});

// Export the pool instance for usage in other parts of the application
module.exports = pool;

// Error handling on pool connection
pool.on('error', (error) => {
    console.error('Unexpected error on idle client', error);
    process.exit(-1);
});