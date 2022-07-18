import fs from 'fs';


export const move = (file1, file2, cb) => {
    fs.readFile(file1, 'utf-8', (err, data) => {
        if (err) {
            cb(err);
            return;
        }
        fs.writeFile(file2, data, 'utf-8', (err, _data) => {
            if (err) {
                cb(err);
                return;
            }
            fs.unlink(file1, cb);
        });
    })
};

export const move1 = (from, to, cb) => {
    fs.readFile(from, 'utf-8', (error1, data) => {
        if (error1) {
            cb(eb)
        }

        fs.writeFile(to, data, (err2) => {
            if (err2) {
                cb(err2);
                return;
            }
            fs.unlink(from, cb);
        })
    })
}

move('./test1.js', './test.js', (error) => {
    if (error) {
        console.log('ooops!');
        return;
    }
    console.log('YES!');
})
