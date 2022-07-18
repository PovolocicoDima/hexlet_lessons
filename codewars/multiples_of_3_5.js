function solution(number) {
    if (number < 0) {
        return 0;
    }
    const test = []
    for (let i = 0; i < number; i += 1) {
        if (i % 3 === 0) {
            test.push(i);
        } else if (i % 5 === 0) {
            test.push(i);
        }
    }

    const setResult = new Set(test);
    const arrResult = Array.from(setResult);
    let result = 0;
    if (arrResult.length !== 0) {
        result = arrResult.reduce((a, b) => a + b);
    }
    return result;
}

console.log(solution(10));