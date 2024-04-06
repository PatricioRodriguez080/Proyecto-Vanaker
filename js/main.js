// swiper destacados //

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Swiper clientes //

const swiperr = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true
    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    }
});

// Boton flotante wpp //

window.onscroll = function(){
    if (document.documentElement.scrollTop > 180) {
        document.querySelector('.wpp-btn').classList.add('aparecer');
    }else{
        document.querySelector('.wpp-btn').classList.remove('aparecer');
    }
}