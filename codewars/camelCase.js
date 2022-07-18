function toCamelCase(str) {
    if (str.length === 0) {
        return '';
    }
    const isUpper = false;
    let result = [];
    const splitArr = str.split(/[-_]/g);
    if (splitArr[0][0] === splitArr[0][0].toUpperCase()) {
        result = splitArr.map((item) => item[0].toUpperCase() + item.slice(1)).join('');
    } else {
        result = splitArr.map((item) => item[0].toUpperCase() + item.slice(1)).join('');
        result = result[0].toLowerCase() + result.slice(1);
    }

    return result;
};

console.log(toCamelCase('The_Stealth_Warrior'))  // theStealthWarrior
console.log(toCamelCase('the-stealth-warrior'))  // TheStealthWarrior