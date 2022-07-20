export default (ver1, ver2) => {
    const [major1, minor1] = ver1.split('.');
    const [major2, minor2] = ver2.split('.');
    if (Number(major1) > Number(major2)) {
        return 1;
    } else if (Number(major1) === Number(major2)) {
        if (Number(minor1) > Number(minor2)) {
            return 1;
        } else if (Number(minor1) === Number(minor2)) {
            return 0;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

// teacher

const compareVersion = (first, second) => {
    const [a1, b1] = first.split('.');
    const [a2, b2] = second.split('.');

    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);

    return major === 0 ? minor : major;
};