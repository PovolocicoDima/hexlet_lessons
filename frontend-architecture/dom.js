const render = (state, formEl, inputEl, resultEl) => {
    formEl.reset();
    inputEl.focus();
    resultEl.textContent = state;
};

const app = () => {
    let state = 0;
    inputEl.focus();

    const formEl = document.querySelector('form');
    const inputEl = document.querySelector('input');
    const resetEl = document.querySelector('button');
    const resultEl = document.querySelector('#result');

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log(data);
        state += parseInt(data.get('number'), 10);
        render(state, formEl, inputEl, resetEl);
    })
};

app();