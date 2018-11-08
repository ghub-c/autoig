const fs = require('fs');

module.exports = {
    getFilesObject: function (folder) {
        let files = [];
        fs.readdirSync(folder).forEach(file => {
            files.push(file);
        });
        return files;
    }
};
