test('string should always contain itself', () => {
    fc.assert(
        fc.property(
            fc.string(),
            text => contains(text, text)
        )
    );
});

test('string should always contain its substring', () => {
    fc.assert(
        fc.property(
            fc.string(), fc.string(), fc.string(),
            (a, b, c) => contains(a + b + c, b)
        )
    );
});

// my
test('sort with fc', () => {
    fc.assert(
        fc.property(
            fc.array(fc.integer()), (data) => {
                expect(sort(data)).toBeSorted()
            }
        )
    );
});

// teacher

test('should be sorted', () => {
    fc.assert(
        fc.property(fc.array(fc.integer()), (data) => {
            const result = sort(data);
            expect(result).toBeSorted();
        }),
    );
});

