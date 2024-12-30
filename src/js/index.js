import '../sass/main.scss';

import formsHandler from './forms';
import menuHandler from './menu';
import readMoreHandler from './read-more';
import scrollHandler from './scroll';
import sliderHandler from './slider';

document.addEventListener('DOMContentLoaded', () => {
    menuHandler();
    readMoreHandler();
    sliderHandler();
    formsHandler();
    scrollHandler();
})