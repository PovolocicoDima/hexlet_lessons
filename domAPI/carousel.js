const encrypt = (str) => {
    let result = '';
    if (str.length % 2 === 0) {
        for (let i = 0; i < str.length; i += 2) {
            result += `${str[i + 1]}${str[i]}`
        }
    }

    const last = str[str.length - 1];

    if (str.length % 2 !== 0) {
        for (let i = 0; i < str.length - 1; i += 2) {
            result += `${str[i + 1]}${str[i]}`
        }
        result += `${last}`
    }


    return result;
};

console.log(encrypt('go!go'))