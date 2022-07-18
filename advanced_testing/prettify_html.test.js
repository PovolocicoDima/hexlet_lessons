// my
const getFixturePath1 = (filename) => `${__dirname}/../__fixtures__/${filename}`;

test('should prettify file', () => {
  const beforePath = getFixturePath1('before.html');
  const tmpTestDir = os.tmpdir();
  fs.copyFile(beforePath, `${tmpTestDir}/test.html`)
  fs.readdir(tmpTestDir, (err, files) => {
    if (err) {
      console.log(`!!!!!!!!!!!!!!!! MY CONSOLE LOG \n ${err}`);
    }
    else {
      files.forEach(file => {
        console.log(file);
      })
    }
  })
  prettifyHTMLFile(`${tmpTestDir}/test.html`);
  const result = fs.readFile(`${tmpTestDir}/test.html`, 'utf-8');
  const after = fs.readFile(getFixturePath('after.html'), 'utf-8');
  expect(result).toEqual(after)
})

// teacher

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

const filename = 'before.html';
const dest = path.join(os.tmpdir(), filename);
const src = getFixturePath(filename);

let expected;

beforeAll(async () => {
    expected = await fs.readFile(getFixturePath('after.html'), 'utf-8');
});

beforeEach(async () => {
    await fs.copyFile(src, dest);
});

test('prettifyHTMLFile', async () => {
    await prettifyHTMLFile(dest);
    const actual = await fs.readFile(dest, 'utf-8');
    expect(actual).toBe(expected);
});