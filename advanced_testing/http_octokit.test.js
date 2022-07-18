// my

class OctokitFake1 {
    constructor(data) {
        this.data = data;
    }

    repos = {
        listForUser: () => {
            return Promise.resolve({ data: this.data });
        }
    }
}

test('should return main languages of repos', async () => {
    const data = [{ language: 'php' }, { language: 'java' }, { language: 'php' }];
    const client = new OctokitFake(data);
    const username = 'test';
    const popularLanguage = await getUserMainLanguage(username, client);
    expect(popularLanguage).toEqual('php');
})

test('should return null', async () => {
    const data = [];
    const client = new OctokitFake(data);
    const username = 'test';
    const languages = await getUserMainLanguage(username, client);
    expect(languages).toEqual(null);
})

// teacher

export default class OctokitFake {
    constructor(data) {
        this.data = data;
    }

    repos = {
        listForUser: () => (
            Promise.resolve({ data: this.data }) // так как метод асинхронный
        ),
    }
}

test('getUserMainLanguage', async () => {
    const data = [
        { language: 'ruby' },
        { language: 'php' },
        { language: 'java' },
        { language: 'php' },
        { language: 'js' },
    ];
    const client = new OctokitFake(data);
    const mainLanguage = await getUserMainLanguage('linus', client);
    expect(mainLanguage).toEqual('php');
});

test('getUserMainLanguage when empty', async () => {
    const client = new OctokitFake([]);
    const mainLanguage = await getUserMainLanguage('user-without-repos', client);
    expect(mainLanguage).toBeNull();
});