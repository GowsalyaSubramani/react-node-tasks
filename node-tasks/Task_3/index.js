// index.js
const fs = require('fs');
const path = require('path');
const core = require('./core');

// Directory where plugins are located
const pluginDir = path.join(__dirname, 'plugins');

// Function to load and execute plugins
function loadPlugins() {
    // Read all files from the plugin directory
    fs.readdir(pluginDir, (err, files) => {
        if (err) {
            console.error('Error reading plugin directory:', err);
            return;
        }

        // Filter only JavaScript files
        const pluginFiles = files.filter(file => file.endsWith('.js'));

        // Dynamically load each plugin
        pluginFiles.forEach(file => {
            try {
                const pluginPath = path.join(pluginDir, file);
                const plugin = require(pluginPath);
                
                // Execute the plugin and pass the core API
                if (typeof plugin === 'function') {
                    plugin(core);
                } else {
                    console.warn(`Plugin ${file} does not export a function.`);
                }
            } catch (error) {
                console.error(`Error loading plugin ${file}:`, error);
            }
        });
    });
}

// Start the application and load plugins
console.log('Starting application...');
loadPlugins();
