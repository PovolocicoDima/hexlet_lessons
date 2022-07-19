export default (str) => {
    const arrOfStr = str.trim().split(' ');
    const lastItemLength = arrOfStr[arrOfStr.length - 1].length;
    return lastItemLength;
}