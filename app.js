const fs = require('fs');
const console = require('better-console');
const List = require('prompt-list');
const utils = require('./utils');

module.exports = {

    createGitIgnore: function(gitIgnore){
        fs.open(gitIgnore, 'r', function(err){
            if(err){
                fs.writeFile(gitIgnore, '', function(err){
                    if(err){
                        console.warn(err);
                    }
                });
            }
        });
    },

    showOptions: function(folder){
        const files = utils.getFilesObject(folder);
        const list = new List({
            name: 'options',
            message: 'What .gitignore you would like to add?',
            choices: files
        });
        list.ask(function(answer){
            return answer;
        });
    },

    concatenate: function(file){
        const chosen = file.substring(0, answer.length - 10);
        console.info("Added " + chosen + " to your .gitignore file");
    }
};


/*
const to = fs.createWriteStream(filename, {flags: 'a'});
const from = fs.createWriteStream();
*/
