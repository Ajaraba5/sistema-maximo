const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Security middleware
app.use(compression()); // Compress response bodies
app.use(morgan('combined')); // Logging middleware
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Route mounting
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
