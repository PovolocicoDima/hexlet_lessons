const invert = (str) => {
    const arr = Array.from(str);
    const result = arr.map((letter) => {
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        } else {
            return letter.toUpperCase();
        }
    })

    return result.join('');
}

// teacher

const invertCase = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        const upper = str[i] === str[i].toUpperCase();
        result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
    }

    return result;
};