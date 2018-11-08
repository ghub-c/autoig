#!/usr/bin/env node
const console = require('better-console');
const app = require('./app');


const gitIgnore = "./.gitignore";
const folder = './templates';

console.info('Welcome to autoignore !');

app.createGitIgnore(gitIgnore);
app.showOptions(folder, gitIgnore);

