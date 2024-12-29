import '../sass/main.scss';
import menuHandler from './menu';
import readMoreHandler from './read-more';
import sliderHandler from './slider';

document.addEventListener('DOMContentLoaded', () => {
    menuHandler();
    readMoreHandler();
    sliderHandler();
})