export default (ticket) => {
    const sum = (numbers) => {
        return numbers.reduce((a, b) => parseInt(a) + parseInt(b));
    }

    const leftPart = Array.from(ticket);
    const rightPart = leftPart.splice(leftPart.length / 2)
    const left = sum(leftPart);
    const right = sum(rightPart);
    console.log(`left === ${left}`)
    console.log(`right === ${right}`)
    const result = left === right ? true : false;
    return result;
}

// teacher 

const default1 = (num) => {
    let balance = 0;

    for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
        balance += +num[i] - +num[j];
    }
    return balance === 0;
};