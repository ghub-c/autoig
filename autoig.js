#!/usr/bin/env node
const console = require('better-console');
const app = require('./app');


const gitIgnore = "./.gitignore";
const folder = '/usr/lib/node_modules/auto-gitignore/templates';

console.info('Welcome to autoignore !');

app.createGitIgnore(gitIgnore);
app.showOptions(folder, gitIgnore);

