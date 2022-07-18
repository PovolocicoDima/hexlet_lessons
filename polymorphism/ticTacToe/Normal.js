class Normal {
    // BEGIN (write your solution here)
    getNextStep(field) {
        return field.reduceRight((acc, row, i) => {
            const j = row.indexOf(null);
            if (acc.length === 0 && j !== -1) {
                return [i, j];
            }
            return acc;
        }, []);
    }
    // END
}

export default Normal;