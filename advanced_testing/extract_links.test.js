import fs from 'fs';
import path from 'path';

test('extractLinks', async () => {
    const html = await fs.readFile(`${__dirname}/htmlWithLinks.html`, 'utf-8');

    const links = extractLinks(html);
    expect(links).toEqual(['/resumes/1', '/users/6']);
})

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');