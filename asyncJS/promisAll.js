import path from 'path';
import _ from 'lodash';
import fs from 'fs/promises';


export const getDirectorySize = (dirPath) => {
    const promise = fs.readdir(dirPath).then((files) => {
        const filePaths = files.map((name) => path.join(dirPath, name));
        const promises = filePaths.map((file) => fs.stat(file))
        return Promise.all(promises);
    })

    return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))
};

export const getDirectorySize2 = (dirpath) => {
    const promise = fs.readdir(dirpath).then((filenames) => {
        const filepaths = filenames.map((name) => path.join(dirpath, name));
        const promises = filepaths.map(fs.stat);
        return Promise.all(promises);
    });

    return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};

console.log(getDirectorySize('/home/povolochko/hexlet/final_projects/lessons').then(console.log));