// my

test('file not fount', () => {
    expect(() => {
        read('/undefined')
    }).toThrow();
});

test('path to directory instead of file path', () => {
    expect(() => {
        read('/etc')
    }).toThrow();
});

// teacher

test('read', () => {
    expect(() => read('/undefined')).toThrow();
    expect(() => read('/etc')).toThrow();
});