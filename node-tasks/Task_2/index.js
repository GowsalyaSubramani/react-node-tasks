#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const { createObjectCsvWriter } = require('csv-writer');

const program = new Command();

// Function to recursively list files
const listFiles = (dir, extFilter, files = []) => {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      listFiles(fullPath, extFilter, files);
    } else if (!extFilter || fullPath.endsWith(extFilter)) {
      files.push({ path: fullPath, size: stats.size });
    }
  });
};

// Function to export data to CSV
const exportToCSV = async (files, outputPath) => {
  const csvWriter = createObjectCsvWriter({
    path: outputPath,
    header: [
      { id: 'path', title: 'File Path' },
      { id: 'size', title: 'Size (bytes)' }
    ]
  });
  await csvWriter.writeRecords(files);
};

// Function to export data to JSON
const exportToJSON = (files, outputPath) => {
  fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));
};

program
  .version('1.0.0')
  .description('CLI Tool for file operations');

program
  .command('list <directory>')
  .option('-e, --extension <type>', 'Filter by file extension')
  .option('-c, --csv <file>', 'Export to CSV file')
  .option('-j, --json <file>', 'Export to JSON file')
  .action((directory, options) => {
    const files = [];
    listFiles(directory, options.extension, files);
    files.sort((a, b) => a.size - b.size);

    if (options.csv) {
      exportToCSV(files, options.csv).then(() => console.log('CSV file created.'));
    }

    if (options.json) {
      exportToJSON(files, options.json);
      console.log('JSON file created.');
    }

    console.log('Files:', files);
  });

program
  .command('count <directory>')
  .option('-e, --extension <type>', 'Filter by file extension')
  .action((directory, options) => {
    const files = [];
    listFiles(directory, options.extension, files);
    files.forEach(file => {
      const lines = fs.readFileSync(file.path, 'utf-8').split('\n').length;
      console.log(`${file.path}: ${lines} lines`);
    });
  });

program
  .command('largest <directory>')
  .action((directory) => {
    const files = [];
    listFiles(directory, null, files);
    files.sort((a, b) => b.size - a.size);
    console.log('Largest file:', files[0]);
  });

program.parse(process.argv);
