// teacher

test('getUserMainLanguage', async () => {
    const data = [
        { language: 'ruby' },
        { language: 'php' },
        { language: 'java' },
        { language: 'php' },
        { language: 'js' },
    ];
    nock(/api\.github\.com/).get('/users/linus/repos').reply(200, data);

    const mainLanguage = await getUserMainLanguage('linus');
    expect(mainLanguage).toEqual('php');
});

test('getUserMainLanguage when empty', async () => {
    nock(/api\.github\.com/).get('/users/user-without-repos/repos').reply(200, []);

    const mainLanguage = await getUserMainLanguage('user-without-repos');
    expect(mainLanguage).toBeNull();
});