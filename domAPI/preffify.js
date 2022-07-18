const alert = () => {
    const button = document.getElementById('alert-generator');
    const alertArea = document.querySelector('.alerts');
    let count = 0;
    button.addEventListener('click', () => {
        count += 1;
        const divEl = document.createElement('div');
        divEl.classList.add('alert', 'alert-primary');
        divEl.textContent = `Alert ${count}`
        alertArea.prepend(divEl);
    })
}

alert();