import yup from 'yup';

const genres = [
    'drama', 'horror', 'fantasy', 'classic',
];


const test = (books) => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        author: yup.string().required(),
        pagesCount: yup.number().positive(),
        link: yup.string().url().min(1),
        genre: yup.string().oneOf(genres),
    })

    const result = books.filter(book => !schema.isValidSync(book))
    return result;
}


const books1 = [
    {
        name: 'besi',
        author: 'dostoevski',
        pagesCount: 100,
        genre: 'drama',
        link: 'https://some.ru',
    },
    {
        name: 'book',
        author: 'author',
    },
    {
        name: 'book 2',
        author: 'author 2',
        genre: 'fiction',
        pagesCount: '50 страниц', // должно быть числом
    },
    {
        name: 'book 3',
        author: 'author 3',
        genre: 'non fiction',
        pagesCount: -5,
    },
];

console.log(test(books1));