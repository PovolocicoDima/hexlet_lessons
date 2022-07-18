const normalize = (data) => data
    .map(({ name, country }) => ({ city: name.trim().toLowerCase(), country: country.trim().toLowerCase() }))
    .map(({ city, country }) => [country, city])
    .sort()
    .reduce((acc, [country, city]) => {
        const citiesAcc = acc[country] ?? [];
        const cities = citiesAcc.concat(city);
        const uniqueCities = new Set(cities);
        console.log(`citiesAcc ===== ${citiesAcc}`);
        console.log(`cities ====== ${cities}`);
        return { ...acc, [country]: [...uniqueCities] }
    }, {})

const countries = [
    { name: 'Miami', country: 'usa' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Moscow ', country: ' Russia' },
];

normalize(countries)

// console.log(normalize(countries));