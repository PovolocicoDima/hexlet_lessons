const tabs = () => {
    const navLinks = document.querySelectorAll('button[data-bs-target]')
    const tabs = [...document.getElementsByClassName('tab-pane')];
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const nav = link.closest('.nav');
            const activeElement = nav.querySelector('.active');
            const dataTarget = link.dataset.bsTarget.substr(1);
            activeElement.classList.remove('active');
            link.classList.add('active')

            tabs.forEach((tab) => {
                if (link.classList.contains('active') && (dataTarget === tab.id)) {
                    const tabContent = document.querySelector('.tab-content');
                    const activeElement = tabContent.querySelector('.active');
                    activeElement.classList.remove('active');
                    tab.classList.add('active');
                }
            })
        })
    })
}

tabs();


const handle = (e, container) => {
    const targetTab = e.target;
    if (targetTab.classList.contains('active')) {
        return;
    }

    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    targetTab.classList.add('active');
    targetTabContent.classList.add('active');

    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
};

const navs = document.querySelectorAll('.nav');
navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
        tab.addEventListener('click', (event) => handle(event, nav));
    });
});