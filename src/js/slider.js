const state = {
    currentSlide: 0,
    slidesAmount: 0
}

const sliderHandler = () => {
    const peopleSlider = document.querySelector('.people-slider');
    const reviewsContainer = document.querySelector('.reviews-container');

    const peopleSliderElements = peopleSlider.querySelectorAll('.people-slider__element');
    const reviewsContainerElements = reviewsContainer.querySelectorAll('.reviews-container__element');

    state.slidesAmount = peopleSliderElements.length;

    peopleSliderElements.forEach((element, index) => element.setAttribute('data-people-index', index));
    reviewsContainerElements.forEach((element, index) => element.setAttribute('data-review-index', index));

    document.querySelector('[data-slider-prev]').addEventListener('click', () => scrollToSlide(state.currentSlide - 1, peopleSlider));
    document.querySelector('[data-slider-next]').addEventListener('click', () => scrollToSlide(state.currentSlide + 1, peopleSlider));

    setSelectedSlide(0);
    sliderFunctionalityHandler(peopleSlider);
}

function sliderFunctionalityHandler(slider) {
    let isGrabbing = false;
    let currentX = null;
    let startX = null;

    // Prevent dragging picture
    slider.querySelectorAll("img").forEach((element) => element.addEventListener("dragstart", (e) => e.preventDefault()));

    // Touch events
    slider.addEventListener("touchstart", (e) => dragStart(e));
    slider.addEventListener("touchmove", (e) => dragMove(e));
    slider.addEventListener("touchend", dragStop);

    // Mouse events
    slider.addEventListener("mousedown", (e) => dragStart(e));
    slider.addEventListener("mousemove", (e) => dragMove(e));
    slider.addEventListener("mouseleave", dragStop);
    slider.addEventListener("mouseup", dragStop);

    function dragStart (e) {
        isGrabbing = true;
        slider.classList.add("grabbing");
        startX = getX(e);
    }

    function dragMove (e) {
        if (!isGrabbing) return;
        currentX = getX(e);
    }

    function dragStop () {
        if (!isGrabbing) return;
        isGrabbing = false;
        slider.classList.remove("grabbing");
        if(currentX === null || startX === null) return;

        if (currentX - startX < 0 && Math.abs(currentX - startX) > 100 && state.currentSlide + 1 < state.slidesAmount) {
            scrollToSlide(state.currentSlide + 1, slider);
        }

        if (currentX - startX > 0 && Math.abs(currentX - startX) > 100 && state.currentSlide - 1 >= 0) {
            scrollToSlide(state.currentSlide - 1, slider);
        }

        currentX = null,
        startX = null;
    }

    function getX (e) {
        return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    }
}

function setSelectedSlide(index) {
    state.currentSlide = index;

    document.querySelectorAll('.people-slider__element.selected').forEach((element) => element.classList.remove('selected'));
    document.querySelectorAll('.reviews-container__element.selected').forEach((element) => element.classList.remove('selected'));

    document.querySelector(`[data-people-index='${index}'`).classList.add('selected');
    setTimeout(() => {
        document.querySelectorAll('.reviews-container__element.selected').forEach((element) => element.classList.remove('selected'));
        document.querySelector(`[data-review-index='${index}'`).classList.add('selected');
    }, 250);

    document.querySelector('.slider-counter__number').innerHTML = `${index + 1}/${state.slidesAmount}`;
}

function scrollToSlide(index, slider) {
    if (index < 0 || index >= state.slidesAmount) return;

    setSelectedSlide(index);
    slider.querySelector(`[data-people-index = '${index}']`).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}


export default sliderHandler;