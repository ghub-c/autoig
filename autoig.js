#!/usr/bin/env node
const console = require('better-console');
const List = require('prompt-list');
const utils = require('./utils');


const folder = './templates';
const files = utils.getFilesObject(folder);

const list = new List({
    name: 'options',
    message: 'What .gitignore you would like to add?',
    choices: files
});

list.ask(function(answer){
    const chosen = answer.substring(0, answer.length - 10);
    console.info("Added " + chosen + " to your .gitignore file");
});

