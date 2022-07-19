import generate from './pascalsTriangle';

test('Pascal\'s Triangle', () => {
    expect(generate(0)).toEqual([1]);
    expect(generate(1)).toEqual([1, 1]);
    expect(generate(2)).toEqual([1, 2, 1]);
    expect(generate(3)).toEqual([1, 3, 3, 1]);
    expect(generate(4)).toEqual([1, 4, 6, 4, 1]);
    expect(generate(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
    expect(generate(12)).toEqual([1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1]);
});
