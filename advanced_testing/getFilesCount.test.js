// my

test('getFilesCount', async () => {
    const pathToDir = getFixturePath('nested');
    const myMockLog = jest.fn();
    await getFilesCount(pathToDir, myMockLog);
    expect(myMockLog).toHaveBeenCalledTimes(1);
});

test('getFilesCount', async () => {
    const pathToDir = getFixturePath('nested');
    const myMockLog = jest.fn();
    await getFilesCount(pathToDir, myMockLog);
    expect(myMockLog).toHaveBeenCalledWith('Go!');
});

// teacher 

test('getFilesCount', () => {
    const directoryPath = getFixturePath('nested');
    const mock = jest.fn();
    getFilesCount(directoryPath, mock);
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('Go!');
});