function getSum(a, b) {
    if (a == b) {
        return a;
    }
    let bigger = 0;
    let smaller = 0;
    if (a > b) {
        bigger = a;
        smaller = b;
    }
    if (a < b) {
        bigger = b;
        smaller = a;
    }

    let result = [];

    for (let i = smaller; i <= bigger; i += 1) {
        result.push(i);
    }

    return result.reduce((a, b) => a + b)
}

console.log(getSum(-1, 2))