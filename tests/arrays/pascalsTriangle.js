// BEGIN (write your solution here)

const pascal = (num) => {
    function factorialize(num) {
         if (num == 0)
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    }
    const result = [];
    for (let i = 0; i <= num; i += 1) {
        const item = factorialize(num) / (factorialize(i) * factorialize(num - i));
        result.push(item);
    }

    return result;
}

export default pascal;