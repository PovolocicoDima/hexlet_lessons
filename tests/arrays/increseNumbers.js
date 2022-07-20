const increase = (arr) => {
    if (arr.length < 2) {
        return [];
    }

    let intermediate1 = [];

    for (let i = 0; i < arr.length; i += 1) {
        const current = arr[i];
        const next = arr[i + 1];
        if (next - current === 1) {
            intermediate1.push(current, next);
        }
    }

    const intermediate2 = Array.from(new Set(intermediate1));
    const intermediate3 = [];

    for (let i = 0; i < intermediate2.length; i += 1) {
        if (intermediate2[i] - intermediate2[i + 1] === -1) {
            intermediate3.push(intermediate2[i], intermediate2[i + 1])
        } else {
            intermediate3.push('stop')
        }
    }

    const intermediate4 = Array.from(new Set(intermediate3));
    const itemNumber = intermediate4.indexOf('stop')
    const left_part = intermediate4.slice(0, itemNumber);
    const right_part = intermediate4.slice(itemNumber + 1);
    console.log(`left_part === ${left_part}`);
    console.log(`right_part === ${right_part}`);
    if (left_part.length === 0 && right_part.length === 0) {
        return [];
    }
    if (right_part.length === 0) {
        return [`${left_part[0]}->${left_part[left_part.length - 1]}`]
    }
    return [
        `${left_part[0]}->${left_part[left_part.length - 1]}`,
        `${right_part[0]}->${right_part[right_part.length - 1]}`
    ]
}

// export default increase;

// teacher

const getRangeOfSequence = (sequence) => {
    const first = sequence[0];
    const last = sequence[sequence.length - 1];
    return `${first}->${last}`;
};

const summaryRanges = (numbers) => {
    const ranges = [];
    let sequence = [];

    for (let index = 0; index < numbers.length; index += 1) {
        const current = numbers[index];
        const next = numbers[index + 1];
        sequence.push(current);
        if (current + 1 !== next) {
            if (sequence.length > 1) {
                const range = getRangeOfSequence(sequence);
                ranges.push(range);
            }
            sequence = [];
        }
    }

    return ranges;
};

const myGetRanges = (s) => {
    const first = s[0];
    const last = s[s.length - 1];
    return `${first}->${last}`
}

const mySummaryRanges = (numbers) => {
    let sequence = [];
    const ranges = [];

    for (let i = 0; i < numbers.length; i += 1) {
        const current = numbers[i];
        const next = numbers[i + 1];
        sequence.push(current);
        if (current + 1 !== next) {
            if (sequence.length > 1) {
                const range = myGetRanges(sequence);
                ranges.push(range);
            }
            sequence = [];
        }
    }

    return ranges;
}

export default mySummaryRanges;