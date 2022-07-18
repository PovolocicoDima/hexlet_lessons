/** 

export default (companies) => {
    const state = {
        companies,
        uiState: {
            collapse: [
                { companyId: 1, visibility: 'hidden' },
                { companyId: 2, visibility: 'hidden' },
                { companyId: 3, visibility: 'hidden' },
            ]
        }
    }

    const resultDiv = document.querySelector('div.container');
    const descriptionDiv = document.createElement('div');

    companies.forEach((company) => {
        const { name, id } = company;
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary')
        button.setAttribute('id', id);
        button.textContent = name;
        resultDiv.appendChild(button);
    })

    resultDiv.appendChild(descriptionDiv);

    const buttons = document.querySelectorAll('button');
    const clickHandler = (e) => {
        const result = state.uiState.collapse
            .filter((item) => item.companyId !== e.target.id)
        console.log(result);
        // .forEach((item) => item.visibility === 'hidden');
        state.uiState.collapse[e.target.id - 1].visibility = state.uiState.collapse[e.target.id - 1].visibility === 'show' ? 'hidden' : 'show';
        if (state.uiState.collapse[e.target.id - 1].visibility === 'show') {
            const text = state.companies[e.target.id - 1].description;
            descriptionDiv.textContent = text;
        }
        if (state.uiState.collapse[e.target.id - 1].visibility === 'hidden') {
            descriptionDiv.textContent = ''
        }
        console.log(JSON.stringify(state.uiState.collapse))
    }

    buttons.forEach((button) => button.addEventListener('click', clickHandler));

};
**/

const companies = [
    { id: 1, name: 'Hexlet', description: 'online courses' },
    { id: 2, name: 'Google', description: 'search engine' },
    { id: 3, name: 'Facebook', description: 'social network' },
];

const render = (state, container) => {
    container.innerHTML = '';
    const buttons = state.companies.map(({ id, name }) => {
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn', 'btn-primary');
        button.textContent = name;
        button.addEventListener('click', () => {
            const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
            state.uiState.selectedCompanyId = nextSelectedId;
            render(state, container);
        });
        return button;
    });

    container.append(...buttons);

    if (state.uiState.selectedCompanyId === null) {
        return;
    }

    const outputContainer = document.createElement('div');
    const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
    outputContainer.textContent = selectedCompany.description;
    container.append(outputContainer);
};

export default (companies) => {
    const state = {
        companies,
        uiState: {
            selectedCompanyId: null,
        },
    };

    const container = document.querySelector('.container');

    render(state, container);
};
