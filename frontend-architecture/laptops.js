// BEGIN (write your solution here)
// Решение позволяет легко расширить приложение новыми фильтрами и типами проверок
const laptops = [
    {
        model: 'v1', processor: 'intel', frequency: 1.7, memory: 16,
    },
    {
        model: 'd3', processor: 'intel', frequency: 3.5, memory: 8,
    },
    {
        model: 'd2', processor: 'amd', frequency: 2.5, memory: 16,
    },
];

const predicates = {
    eq: (value) => (el) => String(el) === String(value),
    gte: (value) => (el) => (el) >= Number(value),
    lte: (value) => (el) => (el) <= Number(value),
};

const inputsConfig = {
    processor_eq: 'change',
    memory_eq: 'change',
    frequency_lte: 'input',
    frequency_gte: 'input',
};

const filterItems = (items, query) => {
    // Остаются только изменённые пользователем фильтры
    const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
    // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
    return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
        const [propertyName, predicate] = filterName.split('_');
        const match = predicates[predicate];
        const itemProperty = item[propertyName];
        return match(filterValue)(itemProperty);
    }));
};

const render = (state) => {
    const resultElement = document.querySelector('.result');
    const filtered = filterItems(state.laptops, state.filter);

    if (filtered.length === 0) {
        resultElement.innerHTML = '';
        return;
    }
    // элементы для вставки можно как создать через интерфейс document.createElement,
    // так и собрать строку
    const html = `<ul>${filtered.map((item) => `<li>${item.model}</li>`).join('')}</ul>`;
    resultElement.innerHTML = html;
};

const app = (laptops) => {
    // state на уровне приложения
    const state = {
        laptops,
        filter: {
            processor_eq: null,
            memory_eq: null,
            frequency_lte: null,
            frequency_gte: null,
        },
    };
    // На каждое поле ввода вешается обработчик, изменяющий стейт и вызывающий отрисовку
    Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
        const input = document.querySelector(`[name="${inputName}"]`);
        input.addEventListener(eventName, ({ target }) => {
            state.filter[inputName] = target.value === '' ? null : target.value;
            render(state);
        });
    });
    render(state);
};

app();
  // END