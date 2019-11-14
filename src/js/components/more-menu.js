/**
 * Модуль дополнительного меню на мобиле
 * @module MoreMenu
 */

function open(el) {
  if (el) {
    el.fadeIn().addClass('open').trigger('opened');
    $('html, body').css({'overflow-y': 'hidden'});
    $('.layout').addClass('more-menu-opened');
  } else {
    console.error('element is required')
  }
}
function close(el) {
  if (el) {
    el.removeClass('open').delay(500).fadeOut().trigger('opened');
    $('html, body').css({'overflow-y': 'hidden'});
    $('.layout').removeClass('more-menu-opened');
  } else {
    console.error('element is required')
  }
}

function show(el) {
  if (el) {
    el.addClass('open').trigger('shown');
  } else {
    console.error('element is required')
  }
}
function hide(el) {
  if (el) {
    el.removeClass('open').trigger('hidden');
  } else {
    console.error('element is required')
  }
}

function openMw(el) {
  if (el) {
    hide(el.closest('.more-menu-win'));
    el.fadeIn().addClass('open').trigger('opened');
  } else {
    console.error('element is required');
  }
}
function closeMw(el) {
  if (el) {
    el.removeClass('open').delay(500).fadeOut().trigger('opened');
    show(el.closest('.more-menu-win'));
  } else {
    console.error('element is required');
  }
}

function fill(el) {
  if (el) {
    let ma = el.closest('.mm-action');
    let mr = ma.find('.mm-res');
    let val;
    if (ma.find('input').length) {
      val = ma.find('input').val();
    } else {
      val = el.find('.val').text();
    }
    mr.text(val).trigger('change');
  } else {
    console.error('element is required');
  }
}

function init() {
  $('.btn-more-menu').on('click', function(e) {
    e.stopPropagation();
    let mm = $(this).closest('.more-menu').find('.more-menu-win');
    open(mm);
  });
  $('.more-menu-win').on('click', function(e) {
    e.stopPropagation();
  });
  $('.more-menu-win').on('click-outside', function() {
    close($(this));
  });
  $('.layout').on('click', function() {
    if ($(this).find('.mm-win.open').length) {
      $(this).find('.mm-win.open').trigger('click-outside');
    } else if ($(this).find('.more-menu-win.open').length) {
      $(this).find('.more-menu-win.open').trigger('click-outside');
    }
  });

  $('.mm-pan').on('click', function() {
    let mw = $(this).closest('.mm-action').find('.mm-win');
    if (mw.length) {
      openMw(mw);
    }
  });
  $('.mm-win').on('click-outside', function(e) {
    e.stopPropagation();
    closeMw($(this));
  });
  $('.mm-apply').on('click', function() {
    let mw = $(this).closest('.mm-win');
    fill($(this));
    closeMw(mw);
  });
  $('.more-menu__delete').on('click', function() {
    close($(this).closest('.more-menu-win'))
  })
}

module.exports = {
  init
}