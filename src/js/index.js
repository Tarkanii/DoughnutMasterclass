import '../sass/main.scss';
import menuHandler from './menu';
import readMoreHandler from './read-more';

document.addEventListener('DOMContentLoaded', () => {
    menuHandler();
    readMoreHandler();
})