import i18next from 'i18next';
// Просто пример. Структура может быть любой.
import ru from './locales/ru.js';

await i18next.init({
    lng: 'ru',
    debug: true,
    resources: {
        ru,
    },
});