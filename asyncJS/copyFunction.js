const f = (age, sex) => {
    if (age < 18) {
        return null;
    }

    if (sex === 'male') {
        return 'yes';
    }

    if (sex === 'female') {
        return 'no';
    }
}