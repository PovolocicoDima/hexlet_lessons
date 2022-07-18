const render = (element, data) => {
    const div = document.createElement('div');
    const { email, name, comment } = data;
    div.innerHTML = `
        <p>Feedback has been sent</p>
        <div>Email: ${htmlEscape(email)}</div>
        <div>Name: ${htmlEscape(name)}</div>
        <div>Comment: ${htmlEscape(comment)}</div>
    `

    element.replaceWith(div);
}

export default () => {
    const formElement = document.querySelector('.feed-form');

    const handler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        render(formElement, Object.entries(formData));
    }
    formElement.addEventListener('submit', handler);
}