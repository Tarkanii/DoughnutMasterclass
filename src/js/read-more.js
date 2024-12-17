const readMoreHandler = () => {
    const readMoreButtons = document.querySelectorAll('[data-read-more]');
    readMoreButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-open')) {
                btn.removeAttribute('data-open');
                btn.innerHTML = 'Read more';
            } else {
                btn.setAttribute('data-open', true);
                btn.innerHTML = 'Less';
            }
        })
    })
}

export default readMoreHandler;