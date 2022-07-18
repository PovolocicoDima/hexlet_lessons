const lastNames = users.map((user) => {
    if (user.gender === 'female') {
        return user.maidenName;
    }

    return user.lastName;
})

const mapping = {
    female: (user) => user.maidenName,
    male: (user) => user.lastName,
};

const lastNamesPro = users.map((user) => mapping[user.gender](user));

// another

const mappingData = {
    yml: yaml.load,
    json: json.parse,
};

const parseData = (type, data) => mappingData[type](data);