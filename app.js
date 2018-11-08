const fs = require('fs');
const utils = require('./utils');

const filename = "./.gitignore";

const args = process.argv.slice(2);
if (utils.isEmptyObject(args)){
    process.on('exit', function() {
        return console.log("Please provide which .gitignore file you want to add")
    })
} else{
    const gitig = JSON.stringify(args);

    fs.open(filename, 'r', function(err){
        if(err){
            fs.writeFile(filename, '', function(err){
                if(err){
                    console.log(err);
                }
                console.log(".gitignore was saved!");
            });
        } else {
            console.log(".gitignore already exists in this project")
        }
    });

    const to = fs.createWriteStream(filename, {flags: 'a'});
    const from = fs.createWriteStream()
}


