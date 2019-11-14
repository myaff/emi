/**
 * Корзина в шапке
 * @module Basket
 */

function open(selector) {
  if (selector) {
    $(selector).addClass('active').fadeIn(500);
  } else {
    console.error('Selector is required')
  }
};
function close(selector) {
  let target = selector || '.basket-popup.active';
  $(target).fadeOut(300).removeClass('active');
}

/**
 * Инициализация
 */
function init(){
  $('.btn-basket').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($(this).closest('.basket').hasClass('basket--not-empty')) {
      open('#basket-popup');
      $('.basket').removeClass('basket--added');
    }
  });
  $('.btn-basket-clear').on('click', function() {
    // remove products...
    close('#basket-popup');
  })
  $('.basket-popup').on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', function() {
    close();
  });

  $('.btn-add-to-basket').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    open('#basket-notification');
    $('.basket').addClass('basket--added');

    setTimeout(function() {
      close('#basket-notification');
    }, 5000);
  });
}

module.exports = {
  init,
  open,
  close
}