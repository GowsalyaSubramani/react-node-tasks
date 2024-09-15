// plugins/examplePlugin.js
module.exports = function(core) {
    core.log('Example Plugin Loaded!');
    const config = core.getConfig();
    core.log(`App Name: ${config.appName}, Version: ${config.version}`);
};
