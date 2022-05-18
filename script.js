document.addEventListener("DOMContentLoaded", function() {
    window.setTimeout(function() {
        $('#preloader').hide()
    }, 4750); //4750 time for complete gif
});

let searchForm = document.querySelector('.SignInForm');

document.querySelector('#signin-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
    searchForm.classList.remove('active');
}

const swiperBooks = new Swiper("#book-slider", {
    loop: true,
    slidesPerView: 3,
});

const swiper1 = new Swiper(".mySwiperFeaturedBooks", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 4
        }
    }
});

const swiper2 = new Swiper(".newArrivalsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        }
    }
});

const swiper3 = new Swiper(".clientsReviewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        }
    }
});

const swiper4 = new Swiper(".OurBlogsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        }
    }
});