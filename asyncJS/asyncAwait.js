import fs from 'fs/promises';

export const exchange = async (file1, file2) => {
    const reading1 = fs.readFile(file1);
    const reading2 = fs.readFile(file2);

    const [data1, data2] = await Promise.all([reading1, reading2])

    const writing1 = fs.writeFile(file1, data2);
    const writing2 = fs.writeFile(file2, data1);

    await Promise.all([writing1, writing2])
};

exchange('./test.js', './test1.js')