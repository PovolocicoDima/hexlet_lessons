// @ts-check

import 'whatwg-fetch';

export default () => {
    // BEGIN (write your solution here)
    const inputs = document.querySelectorAll('.form-group > input');

    inputs.forEach((input) => {
        input.addEventListener('input', (e) => {
            e.preventDefault();
            const dataAutocompliteUrl = e.target.dataset.autocomplete;
            const dataAutocompliteName = e.target.dataset.autocompleteName;
            const fullUrl = new URL(dataAutocompliteUrl, window.location.origin);
            const output = document.querySelector(`ul[data-autocomplete-name=${dataAutocompliteName}]`)
            fullUrl.searchParams.append('search', e.target.value)
            const response = fetch(fullUrl)
                .then((response) => response.json())
                .then(data => {
                    output.innerHTML = ''
                    if (data.length > 0) {
                        for (let item of data) {
                            const li = document.createElement('li');
                            li.textContent = item;
                            output.append(li);
                        }
                    }
                    if (data.length === 0) {
                        const li = document.createElement('li');
                        li.textContent = 'Nothing';
                        output.append(li);
                    }
                })
                .catch((e) => console.log(e));
        }, true)
    })
    // END
};

const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
        const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
        const url = new URL(route, window.location.origin);
        url.searchParams.append('search', e.target.value);
        const response = await fetch(url);
        const items = await response.json();
        const options = items.length === 0 ? ['Nothing'] : items;
        const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
        list.innerHTML = listHTML;
    });
});
