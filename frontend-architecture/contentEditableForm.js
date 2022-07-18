const render = (state, element) => {
    const elementName = element.dataset.editableTarget;
    element.innerHTML = '';

    const buildText = () => {
        if (state.value === '') {
            const i = document.createElement('i');
            i.textContent = elementName;
            return i;
        }

        return document.createTextNode(state.value);
    };

    const buildForm = () => {
        const form = document.createElement('form');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', elementName);
        input.setAttribute('value', state.value);
        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Save');
        form.append(input, submit);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const value = formData.get(elementName).trim();
            state.value = value;
            state.mode = 'text';
            render(state, element);
        });

        return { form, input };
    };

    switch (state.mode) {
        case 'text': {
            const text = buildText();
            element.append(text);
            break;
        }
        case 'form': {
            const { form, input } = buildForm();
            element.append(form);
            input.select();
            break;
        }
        default:
            // https://ru.hexlet.io/blog/posts/sovershennyy-kod-defolty-v-svitchah
            throw new Error(`Unknown mode: ${state.mode}`);
    }
};

const app = () => {
    const elements = document.querySelectorAll('[data-editable-target]');
    // у каждого элемента свой стейт. Можно добавлять новые элементы с data-editabe-target в HTML,
    // не меняя код
    elements.forEach((element) => {
        const state = {
            // состояние приложения определено в виде состояний конечного автомата вместо флагов
            mode: 'text',
            value: '',
        };

        element.addEventListener('click', () => {
            if (state.mode === 'text') {
                state.mode = 'form';
                render(state, element);
            }
        });

        render(state, element);
    });
};
app();

/*
const render = (state, divNameHandler, divEmailHandler) => {  

  const container = document.querySelector('.container');
  const divName = document.querySelector('div[data-editable-target="name"]');
  const divEmail = document.querySelector('div[data-editable-target="email"]');


  const createForm = (value) => {
    const form = document.createElement('form');
    const textInput = document.createElement('input');
    const submitInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('name', `${value}`);
    textInput.setAttribute('value', '');
    submitInput.setAttribute('type', 'submit')
    submitInput.setAttribute('value', 'save')
    form.append(textInput, submitInput);
    return form;
  }

  // console.log(JSON.stringify(state, null, ' '))
  
  if (state.name.editable === false) {
    return;
  }

  if (state.name.editable === true) {
    const nameDiv = document.querySelector('div[data-editable-target="name"]')
    const form = createForm('name');
    nameDiv.innerHTML = form;
  }

  if (state.email.editable === false) {
    return;
  }

  if (state.email.editable === true) {
  }
};


const app = () => {
  const state = {
    name: {
      editable: false,
    },
    email: {
      editable: false,
    },
  }

  const divName = document.querySelector('div[data-editable-target="name"]');
  const divEmail = document.querySelector('div[data-editable-target="email"]');

  const divNameHandler = divName.addEventListener('click', (e) => {
    state.name.editable = true;
    render(state)
  });

  const divEmailHandler = divEmail.addEventListener('click', (e) => {
    state.email.editable = true;
    render(state)
  });

  render(state, divNameHandler, divEmailHandler)
}

export default app;

*/