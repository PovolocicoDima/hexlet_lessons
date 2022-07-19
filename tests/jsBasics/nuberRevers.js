export default (num) => {
    const someNumber = Math.abs(num);
    const result = someNumber.toString().split('').reverse().join('');
    if (num < 0) {
        return Number(-result);
    } else {
        return Number(result);
    }
}

// teacher

const reverseInt = (num) => {
    const numAsStr = String(Math.abs(num));
    let reversedStr = '';

    for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
        reversedStr += numAsStr[i];
    }
    const reversedModule = Number(reversedStr);

    return num < 0 ? -reversedModule : reversedModule;
};