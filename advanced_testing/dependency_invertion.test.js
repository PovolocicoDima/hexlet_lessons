// my

test('should returm number of files in directory', async () => {
    const dirPath = getFixturePath('/');
    const mockFunction = () => {
        return true;
    };
    const result = await getFilesCount(dirPath, mockFunction);

    expect(result).toBe(7);
})

// teacher

test('getFilesCount', () => {
    // flat можно не тестировать так как nested покрывает и flat тоже
    const directoryPath = getFixturePath('nested');
    const filesCount = getFilesCount(directoryPath, _.noop);
    expect(filesCount).toBe(4);
});