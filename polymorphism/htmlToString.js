const divTag = {
    name: 'div',
    tagType: 'pair',
    body: 'text2',
    id: 'wow',
};
// const html2 = stringify(divTag); // <div id="wow">text2</div>

const emptyDivTag = {
    name: 'div',
    tagType: 'pair',
    body: '',
    id: 'empty',
};
// const html3 = stringify(emptyDivTag); // <div id="empty"></div>

const hrTag = {
    name: 'hr',
    class: 'px-3',
    id: 'myid',
    tagType: 'single',
};
// const html1 = stringify(hrTag); // <hr class="px-3" id="myid">

// my
const htmlToStr = (tag) => {
    const tagKeys = Object.keys(tag);
    let body = '';
    let leftSide = '';
    let rightSide = '';
    let wholeTag = `${leftSide}>${body}${rightSide}`;
    const mapping = {
        name: (tag) => {
            console.log(leftSide);
            leftSide += `<${tag.name}`;
        },
        class: (tag) => {
            console.log(leftSide);
            leftSide += ` class="${tag.class}"`;
        },
        id: (tag) => tag.id,
        tagType: (tag) => {
            if (tag.tagType === 'pair') {
                return tag.name;
            }
        },
        body: (tag) => tag.body,
    };

    tagKeys.forEach((key) => mapping[key](tag) || null);
    return wholeTag
}


console.log(htmlToStr(hrTag));


// teacher 
const excludedAttrs = ['name', 'tagType', 'body'];

const buildAttrs = (tag) => (
    Object.keys(tag)
        .filter((attr) => !excludedAttrs.includes(attr))
        .map((attr) => ` ${attr}="${tag[attr]}"`)
        .join('')
);

const mapping = {
    single: (tag) => {
        const attrs = buildAttrs(tag);
        return `<${tag.name}${attrs}>`;
    },
    pair: (tag) => {
        const attrs = buildAttrs(tag);
        return `<${tag.name}${attrs}>${tag.body}</${tag.name}>`;
    },

    { extend: 'production', host: 'localhost', port: 5000 }
};

const stringify = (tag) => {
    return mapping[tag.tagType](tag);
};

console.log(stringify(divTag))

export default stringify;