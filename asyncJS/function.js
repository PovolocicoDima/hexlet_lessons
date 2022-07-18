import fs from 'fs';

export const compareFileSizes = (file1, file2, cb) => {

    fs.stat(file1, (_error1, { size: size1 }) => {
        fs.stat(file2, (_error2, { size: size2 }) => {
            cb(null, Math.sign(size1 - size2))
        })
    })
}


compareFileSizes('./function.js', './normalize.js', (_error, result) => console.log(result))

// export const compareFileSizes = (filepath1, filepath2, cb) => {
//     fs.stat(filepath1, (_error1, { size: size1 }) => {
//         fs.stat(filepath2, (_error2, { size: size2 }) => {
//             cb(null, Math.sign(size1 - size2));
//         });
//     });
// };