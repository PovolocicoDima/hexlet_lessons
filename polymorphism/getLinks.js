const tags = [
    { name: 'img', src: 'hexlet.io/assets/logo.png' },
    { name: 'div' },
    { name: 'link', href: 'hexlet.io/assets/style.css' },
    { name: 'h1' },
];

// my
const getLinks1 = (tags) => {
    const required_tags = {
        img: {
            attribute: 'src'
        },
        a: {
            attribute: 'href'
        },
        link: {
            attribute: 'href'
        },
    };

    const result = [];

    tags.forEach((tag) => {
        if (required_tags[tag.name]) {
            result.push(tag[required_tags[tag.name].attribute])
        }
    });

    return result;
}

// teacher

const mapping = {
    a: 'href',
    img: 'src',
    link: 'href',
};

const getLinks = (tags) => {
    const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
    const paths = filteredTags.map((tag) => tag[mapping[tag.name]]);

    return paths;
};