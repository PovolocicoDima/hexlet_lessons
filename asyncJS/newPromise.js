const wait = (time) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time)
    })

    return promise;
};

wait(10000).then(() => console.log('time is over!'))
// wait(10000);


export default wait;