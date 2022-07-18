// my

let user;

beforeEach(() => {
    user = buildUser();
})

test('should return right object structure', () => {
    const keys = Object.keys(user);
    expect(keys).toStrictEqual(['email', 'firstName', 'lastName'])
});

test('should be different users', () => {
    const newUser = buildUser();
    expect(JSON.stringify(user) == JSON.stringify(newUser)).toBe(false);
});

test('should work parametr settings in function', () => {
    const newUser = buildUser({ test: 'test' });
    const keys = Object.keys(newUser);
    expect(keys).toContain('test');
});
// teacher

test('buildUser fields', () => {
    const user1 = buildUser();
    expect(user1).toEqual(expect.objectContaining({
        email: expect.any(String),
        firstName: expect.any(String),
        lastName: expect.any(String),
    }));
});

test('buildUser random', () => {
    const user1 = buildUser();
    const user2 = buildUser();
    expect(user1).not.toEqual(user2);
});

test('buildUser override', () => {
    const newData1 = {
        email: 'test@email.com',
    };
    const user1 = buildUser(newData1);
    expect(user1).toMatchObject(newData1);
});

