document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper').forEach((slider) => {
        const isBrandSlider = slider.classList.contains('brand-slider');

        new Swiper(slider, {
            slidesPerView: isBrandSlider ? 5 : 4,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: slider.querySelector('.swiper-button-next'),
                prevEl: slider.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: isBrandSlider ? 5 : 4,
                }
            }
        });
    });
});
