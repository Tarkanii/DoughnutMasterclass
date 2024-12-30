const menuHandler = () => {
    const menu = document.querySelector('[data-menu]');
    const menuOpenBtn = document.querySelector('[data-menu-open]');
    const menuCloseBtn = document.querySelector('[data-menu-close]');
    const menuLinks = Array.from(menu.querySelectorAll('a[href^=\\#]'));
    
    menuOpenBtn.addEventListener('click', () => {
        if (!menu.classList.contains('is-open')) {
            menu.classList.add('is-open');
            setTimeout(() => menuCloseBtn.focus(), 100);
        }
    })

    menuOpenBtn.addEventListener('focus', () => {
        if (menu.classList.contains('is-open')) menu.classList.remove('is-open');
    })

    menuCloseBtn.addEventListener('click', () => {
        if (menu.classList.contains('is-open')) menu.classList.remove('is-open');
    })

    Array.from([...menuLinks, menuCloseBtn]).forEach((element) => {
        element.addEventListener('focusout', (e) => {
            if (e.relatedTarget?.classList.contains('header__menu__nav__list__link') || e.relatedTarget?.classList.contains('menu-button-close')) return;

            if (e.relatedTarget === null) {
                setTimeout(() => menuCloseBtn.focus(), 0);
                return;
            }

            menu.classList.remove('is-open');
        })
    });
}

export default menuHandler;