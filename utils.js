const fs = require('fs');

module.exports = {
    isEmptyObject: function (obj) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    },
    getFilesObject: function (folder) {
        let files = [];
        fs.readdirSync(folder).forEach(file => {
            files.push(file);
        });
        return files;
    }
};
