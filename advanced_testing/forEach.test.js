test('forEach', () => {
    const result = [];
    const numbers = [1, 2, 3];
    numbers.forEach(number => result.push(number));
    expect(result).toEqual(numbers);
})