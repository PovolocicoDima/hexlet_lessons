export default (start, end) => {
    if (!end || start > end) {
        return;
    }

    for (let i = start; i <= end; i += 1) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            console.log('Fizz');
            continue;
        }
        if (i % 5 === 0) {
            console.log('Buzz');
            continue;
        }
        console.log(i);
    }
}
// END

//   teacher

const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i += 1) {
        const hasFizz = i % 3 === 0 ? 'Fizz' : '';
        const hasBuzz = i % 5 === 0 ? 'Buzz' : '';
        console.log(`${hasFizz}${hasBuzz}` || i);
    }
};
