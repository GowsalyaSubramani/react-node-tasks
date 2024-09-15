const express = require('express');
const fs = require('fs').promises; // Using promises for async file reading
const http = require('http');

const app = express();

// Example function with performance bottleneck
async function processRequests() {
    try {
        // Simulating multiple async I/O operations (file reads and HTTP request)
        const [data1, data2] = await Promise.all([
            fs.readFile('file1.txt', 'utf8'),
            fs.readFile('file2.txt', 'utf8')
        ]);

        // Simulate an external API request
        const body = await new Promise((resolve, reject) => {
            http.get('http://example.com/api', (res) => {
                let body = '';
                res.on('data', (chunk) => { body += chunk; });
                res.on('end', () => resolve(body));
                res.on('error', (err) => reject(err));
            });
        });

        // Return combined data
        return { data1, data2, body };

    } catch (error) {
        throw new Error('Error processing requests:', error);
    }
}

// Define an API endpoint to test performance
app.get('/test', async (req, res) => {
    try {
        const result = await processRequests();
        res.json(result);
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

// Start the server
app.listen(3010, () => {
    console.log('Server is running on port 3010');
});
