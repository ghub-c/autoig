#!/usr/bin/env node
const console = require('better-console');
const { getInstalledPathSync } = require('get-installed-path');
const app = require('./app');


const gitIgnore = process.cwd() + '/.gitignore';

const path = getInstalledPathSync('auto-gitignore');
const folder = path + '/templates';

console.info('Welcome to autoignore !');

app.createGitIgnore(gitIgnore);
app.showOptions(folder, gitIgnore);

