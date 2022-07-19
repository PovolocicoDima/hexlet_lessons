export default (num) => {
    if (num <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= num / 2; i += 1) {
        if (num % i === 0) {
            sum += i;
        }
    }

    const result = sum === num ? true : false
    return result;
};

// teacher 

const isPerfect = (num) => {
    if (num < 6) {
        return false;
    }

    let sum = 0;
    const upperBorder = num / 2;

    for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
        if (num % divisor === 0) {
            sum += divisor;
        }
    }

    return sum === num;
};