const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.slider__arrow--prev');
const btnNext = document.querySelector('.slider__arrow--next');

const slideWidth = document.querySelector('.slider__item').offsetWidth;
let isMoving = false;

const maxVisibleSlides = 4;
const slides = track.children;

function updateArrowState() {
    const disable = slides.length <= maxVisibleSlides;
    btnPrev.classList.toggle('slider__arrow--disabled', disable);
    btnNext.classList.toggle('slider__arrow--disabled', disable);
}

updateArrowState();

function moveNext() {
    if (isMoving || btnNext.classList.contains('slider__arrow--disabled')) return;
    isMoving = true;

    track.style.transition = 'transform 0.4s ease';
    track.style.transform = `translateX(-${slideWidth}px)`;

    track.addEventListener('transitionend', function handler() {
        track.appendChild(track.firstElementChild);
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        isMoving = false;

        track.removeEventListener('transitionend', handler);
    });
}

function movePrev() {
    if (isMoving || btnPrev.classList.contains('slider__arrow--disabled')) return;
    isMoving = true;

    track.style.transition = 'none';
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transform = `translateX(-${slideWidth}px)`;

    requestAnimationFrame(() => {
        track.style.transition = 'transform 0.4s ease';
        track.style.transform = 'translateX(0)';
    });

    track.addEventListener('transitionend', () => {
        isMoving = false;
    }, { once: true });
}

btnNext.addEventListener('click', moveNext);
btnPrev.addEventListener('click', movePrev);
