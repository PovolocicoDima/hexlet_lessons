
const reverse = str => {
    return str.length < 2 ? str : reverse(str.slice(1)) + str[0];
}


export default reverse;
