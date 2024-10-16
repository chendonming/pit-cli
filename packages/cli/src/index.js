#!/usr/bin/env node

const { program } = require('commander');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

program
  .version('1.0.0')
  .command('start [url]')
  .description('Start the application with an optional URL')
  .action((url) => {
    const serverEnv = { ...process.env, APP_URL: url || '' };
    const server = spawn('node', [path.join(__dirname, 'server.js')], { 
      stdio: 'inherit',
      env: serverEnv
    });
    const appEnv = { ...process.env, VITE_APP_URL: url || '' };
    const appPath = path.resolve(__dirname, '../../app');

    const app = spawn('node', ['server.js'], { 
      stdio: 'inherit',
      env: appEnv,
      cwd: appPath
    });

    server.on('close', (code) => {
      console.log(`Server process exited with code ${code}`);
      app.kill();
    });

    app.on('close', (code) => {
      console.log(`App process exited with code ${code}`);
      server.kill();
    });
  });

program.parse(process.argv);
