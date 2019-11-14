/**
 * Карусель
 * @module Carousel
 * https://idangero.us/swiper/api/
 */

/**
 * Инициализация карусели
 */
function init(){
  $('.swiper-products').each(function() {
    let container = $(this).find('.swiper-container');
    let prev = $(this).find('.swiper-button-prev');
    let next = $(this).find('.swiper-button-next');

    var productsSwiper = new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 33
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        }
      }
    });
  });

  $('.swiper-categories').each(function() {
    let container = $(this).find('.swiper-container');
    let prev = $(this).find('.swiper-button-prev');
    let next = $(this).find('.swiper-button-next');

    var categoriesSwiper = new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        1024: {
          slidesPerView: 6,
          spaceBetween: 32
        },
        768: {
          spaceBetween: 24
        }
      }
    });
  });

  $('.swiper-baner').each(function() {
    let container = $(this).find('.swiper-container');
    let prev = $(this).find('.swiper-button-prev');
    let next = $(this).find('.swiper-button-next');

    var categoriesSwiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      }
    });
  });

  $('.swiper-kit').each(function() {
    let container = $(this).find('.swiper-container');
    let prev = $(this).find('.swiper-button-prev');
    let next = $(this).find('.swiper-button-next');

    var kitSwiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 32
        }
      }
    });
  });

  $('.swiper-lookbook-kit').each(function() {
    let container = $(this).find('.swiper-container');

    var kitSwiper = new Swiper(container, {
      slidesPerView: 'auto',
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32
        }
      }
    });
  });

  $('.swiper-detail').each(function() {
    let bigContainer = $(this).find('.swiper-detail-big').find('.swiper-container');
    let thumbsContainer = $(this).find('.swiper-detail-thumbs').find('.swiper-container');
    let pagination = $(this).find('.swiper-pagination');

    var detailThumbsSwiper = new Swiper(thumbsContainer, {
      slidesPerView: 4,
      spaceBetween: 13,
      direction: 'vertical',
      lazy: true,
      breakpoints: {
        1024: {
          spaceBetween: 24
        }
      }
    });
    var detailBigSwiper = new Swiper(bigContainer, {
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      preloadImages: false,
      lazy: true,
      thumbs: {
        swiper: detailThumbsSwiper
      },
      pagination: {
        el: pagination
      }
    });
  });
};

module.exports = {init};