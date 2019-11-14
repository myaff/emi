/**
 * Aside
 * @module Aside
 */

function open(selector) {
  if (selector) {
    let target = selector;
    $('html, body').css({'overflow-y': 'hidden'});
    $('.layout').addClass('aside-opened');
    $(target).addClass('active');
  } else {
    console.error('Selector is required');
  }
};

function close(selector) {
  let target = selector || '.aside.active';
  $('html, body').css({'overflow-y': ''});
  $('.layout').removeClass('aside-opened');
  $(target).removeClass('active');
}

function init() {
  $('.btn-aside').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    let target = $(this).attr('href');
    open(target);
  });
  $('.aside').on('click', function(e) {
    e.stopPropagation();
  });
  $(document).on('click', '.layout.aside-opened', function() {
    close();
  });
}

module.exports = {
  init
}