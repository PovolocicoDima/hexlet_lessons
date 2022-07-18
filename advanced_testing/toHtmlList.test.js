// my

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures', filename);


test.each([
    [getFixturePath('list.csv'), getFixturePath('result.html')],
    [getFixturePath('list.json'), getFixturePath('result.html')],
    [getFixturePath('list.yml'), getFixturePath('result.html')],
])('transforms into html from %i', async (path, expected) => {
    expect(toHtmlList(path)).toEqual(fs.readFile(expected))
});

// teacher

const formats = ['csv', 'json', 'yml'];
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

let expected;

beforeAll(async () => {
    expected = await fs.readFile(getFixturePath('result.html'), 'utf-8');
});

test.each(formats)('%s', async (format) => {
    const filePath = getFixturePath(`list.${format}`);
    const actual = await toHtmlList(filePath);
    expect(actual).toEqual(expected.trim());
});