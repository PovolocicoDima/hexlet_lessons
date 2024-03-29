const renderTasks = (state, elements) => {
    elements.tasksContainer.innerHTML = '';

    const filteredTasks = state.tasks.filter(({ listId }) => listId === state.activeListId);

    if (filteredTasks.length === 0) {
        return;
    }

    const ulForTasks = document.createElement('ul');

    filteredTasks.forEach(({ name }) => {
        const li = document.createElement('li');
        li.textContent = name;
        ulForTasks.append(li);
    });

    elements.tasksContainer.append(ulForTasks);
};

const renderLists = (state, elements) => {
    elements.listsContainer.innerHTML = '';
    const ulForLists = document.createElement('ul');

    state.lists.forEach(({ id, name }) => {
        const li = document.createElement('li');
        let channelNameElement;

        if (id === state.activeListId) {
            channelNameElement = document.createElement('b');
            channelNameElement.textContent = name;
        } else {
            channelNameElement = document.createElement('a');
            channelNameElement.setAttribute('href', `#${name.toLowerCase()}`);
            channelNameElement.textContent = name;
            channelNameElement.addEventListener('click', (e) => {
                e.preventDefault();
                state.activeListId = id;
                renderLists(state, elements);
                renderTasks(state, elements);
            });
        }

        li.append(channelNameElement);
        ulForLists.append(li);
    });

    elements.listsContainer.append(ulForLists);
};

export default () => {
    const defaultChannelId = uniqueId();
    const state = {
        activeListId: defaultChannelId,
        lists: [{ id: defaultChannelId, name: 'General' }],
        tasks: [],
    };

    const elements = {
        listsContainer: document.querySelector('[data-container="lists"]'),
        tasksContainer: document.querySelector('[data-container="tasks"]'),
    };

    const newListForm = document.querySelector('[data-container="new-list-form"]');
    const newTaskForm = document.querySelector('[data-container="new-task-form"]');

    newListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const listName = formData.get('name');
        const list = { id: uniqueId(), name: listName.trim() };
        form.reset();
        form.focus();
        state.lists.push(list);
        renderLists(state, elements);
    });

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const taskName = formData.get('name');
        const task = { id: uniqueId(), name: taskName.trim(), listId: state.activeListId };
        form.reset();
        form.focus();
        state.tasks.push(task);
        renderTasks(state, elements);
    });

    renderLists(state, elements);
    renderTasks(state, elements);
};

/*

import uniqueId from 'lodash/uniqueId.js';

// BEGIN (write your solution here)
const render = (lists, tasks) => {
    const containerList = document.querySelector('div[data-container="lists"]');
    const containerTasks = document.querySelector('div[data-container="tasks"]');
    const activeList = lists.find((list) => list.active);
    const activeListId = activeList.id;
    const activeTasks = tasks.filter((task) => task.listId === activeListId);
    containerList.innerHTML = '';
    containerTasks.innerHTML = '';

    if (lists.length > 0) {
        const ulListEl = document.createElement('ul');
        lists.forEach((list) => {
            let liEl = `<li><a href="#${list.name}">${list.name}</a></li>`;
            if (list.active === true) {
                liEl = `<li><b>${list.name}</b></li>`
            }
            ulListEl.innerHTML += liEl;
        });
        containerList.appendChild(ulListEl);
    }

    const containerLinks = containerList.querySelectorAll('li a');

    containerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nextListItem = lists.find((item) => {
                return item['name'] === e.target.textContent;
            })
            activeList.active = false
            nextListItem.active = true;
            render(lists, tasks);
        })
    });

    if (activeTasks.length > 0) {
        const ulTaskEl = document.createElement('ul');
        activeTasks.forEach((task) => {
            let liEl = `<li>${task.name}</li>`;
            ulTaskEl.innerHTML += liEl;
        });
        containerTasks.appendChild(ulTaskEl);
    }
};

const app = () => {
    let lists = [
        {
            id: uniqueId(),
            name: 'General',
            active: true,
        }
    ];
    let tasks = [

    ];

    const formList = document.querySelector('form[data-container="new-list-form"]');
    const inputList = document.getElementById('new-list-name');
    const formTasks = document.querySelector('form[data-container="new-task-form"]');
    const inputTasks = document.getElementById('new-task-name');

    formList.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const value = formData.get('name').trim();
        const item = {
            id: uniqueId(),
            name: value,
            active: false,
        };
        lists = [...lists, item];
        formList.reset();
        inputList.focus();
        render(lists, tasks);
    })

    formTasks.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const value = formData.get('name').trim();
        const activeList = lists.find((list) => list.active);
        const item = {
            id: uniqueId(),
            listId: activeList.id,
            name: value,
        };
        tasks = [...tasks, item];
        formTasks.reset();
        inputTasks.focus();
        render(lists, tasks);
    })

    render(lists, tasks);
};

export default app;

*/