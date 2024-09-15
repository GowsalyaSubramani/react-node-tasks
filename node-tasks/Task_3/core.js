// core.js
const winston = require('winston');

// Set up a logger with winston
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console()
    ]
});

// A sample configuration object that plugins can access
const config = {
    appName: 'My Plugin System',
    version: '1.0.0'
};

// Function to expose core functionality to plugins
const coreAPI = {
    log: (message) => {
        logger.info(message);
    },
    getConfig: () => config
};

module.exports = coreAPI;
