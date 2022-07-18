let counter = 0;

const id = setInterval(() => {
    counter += 1;
    if (counter === 4) {
        clearInterval(id);
        return;
    }
    console.log(new Date());
}, 5000)