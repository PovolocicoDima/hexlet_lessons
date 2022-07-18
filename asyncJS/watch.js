import fs from 'fs';

const watch = (filepath, period, cb) => {
    let lastCheckTime = Date.now();

    const f = (timerId) => {
        fs.stat(filepath, (err1, stats) => {
            if (err1) {
                clearInterval(timerId);
                cb(err1);
                return;
            }
            const { mtimeMs } = stats;
            if (mtimeMs > lastCheckTime) {
                cb(null);
                lastCheckTime = mtimeMs
            }

        })
    };
    const timerId = setInterval(() => f(timerId), period)
};

watch('./move.js', 1000, (err) => {
    console.log('wow!');
})


export default watch;