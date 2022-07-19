// @ts-check
import invertCase from './invertCase.js';

test('should work', () => {
    expect(invertCase('Hello, World!')).toBe('hELLO, wORLD!');
    expect(invertCase('I loVe JS')).toBe('i LOvE js');
});
