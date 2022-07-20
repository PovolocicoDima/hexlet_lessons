const ascending = (numbers) => {
    if (numbers.length < 2) {
        return false;
    }
    const semiArr = [];
    for (let i = 0; i < numbers.length - 1; i += 1) {
        const current = numbers[i];
        const next = numbers[i + 1];
        const item = next - current;
        semiArr.push(item);
    }

    const result = semiArr.filter(item => {
        return item !== 1;
    })

    return result.length > 0 ? false : true
};

console.log(ascending([5, 3, 2, 8]))

// teacher 

const isContinuousSequence = (coll) => {
    const size = coll.length;
    if (size <= 1) {
        return false;
    }

    const start = coll[0];
    for (let index = 1; index < size; index += 1) {
        if (start + index !== coll[index]) {
            return false;
        }
    }

    return true;
};

const newSequence = (numbers) => {
    if (numbers.length < 2) {
        return false;
    }

    const start = numbers[0];
    for (let i = 1; i < numbers.length; i += 1) {
        if (start + i !== numbers[i]) {
            return false;
        }
    }

    return true;
}

export default newSequence;