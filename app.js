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

    showOptions: function(folder, gitIgnore){
        const files = utils.getFilesObject(folder);
        const list = new List({
            name: 'options',
            message: 'What .gitignore you would like to add?',
            choices: files
        });
        list.ask(function(answer){
            const pathTo = "./templates/" + answer;
            const to = fs.createWriteStream(gitIgnore, {flags: 'a'});
            const from = fs.createReadStream(pathTo);
            to.on('close', function() {});
            from.pipe(to);
            const chosen = answer.substring(0, answer.length - 10);
            console.info("Added " + chosen + " to your .gitignore file");
        });
    }
};

