/**
 * Фильтр
 * @module Filter
 */

let h = 105;

function calc() {
  let tw = 0;
  let out = false;
  $('.filter-field').each(function() {
    let pw = $(this).parent().outerWidth();
    let sw = $(this).outerWidth() + 24;
    if ((pw > tw && pw > tw + sw) && !$(this).prev().hasClass('out')) {
      tw += sw;
      $(this).removeClass('out');
      out = false;
      expand($(this));
    } else {
      if ($(this).index() === $('.filter-field').length - 1) {
        h = 105 + (this.offsetTop - 12);
      }
      $(this).addClass('out');
      out = true;
    }
  });
  if (!out) {
    h = 105;
  }
}

function collapse() {
  $('.filter-field.out').animate({'opacity': 0}, 300).css({'visibility': 'hidden'}).addClass('collapsed');
  $('.filter').stop().animate({'height': '105px'}).trigger('collapsed');
};
function expand(el = false) {
  if (el) {
    el.stop().css({'visibility': 'visible'}).animate({'opacity': 1}, 100).removeClass('collapsed');
  } else {
    $('.filter').find('.filter-field.collapsed').stop().css({'visibility': 'visible'}).animate({'opacity': 1}, 100).removeClass('collapsed');
    $('.filter').stop().animate({'height': `${h}px`}).trigger('expanded');
  }
}
function open() {
  $('.layout').addClass('filter-opened');
  $('.filter').find('.filter-content').addClass('active');
  $('html, body').css({'overflow-y': 'hidden'});
}
function close() {
  $('html, body').css({'overflow-y': ''});
  $('.filter').find('.filter-content').removeClass('active');
  $('.layout').removeClass('filter-opened');
}

function check() {
  if (Main.DeviceDetection.isMobile()) {
    $('.filter-content').on('click', function(e) {
      e.stopPropagation();
    });
    $(document).on('click', '.layout.filter-opened', function() {
      close();
    });
  } else {
    calc();
    if ($('.filter').outerHeight() > 105 || $('.filter').find('.filter-field.out').length) {
      collapse();
      $('.btn-filter-wrapper').fadeIn();
    } else {
      $('.btn-filter-wrapper').fadeOut();
    }
  }
}

function openFF(ff) {
  let pan = ff.find('.ff-pan');
  let win = ff.find('.ff-win');
  ff.addClass('active');
  if (!Main.DeviceDetection.isMobile()) {
    win.css({'display': 'block'});
    if (win.offset().left + win.outerWidth() >= $(window).width()) {
      let pos = $(window).width() - win.offset().left - win.outerWidth() - 24;
      win.css({'margin-left': `${pos}px`});
    }
    win.animate({'opacity': 1}, 500);
  }
}
function closeFF(ff) {
  let pan = ff.find('.ff-pan');
  let win = ff.find('.ff-win');
  ff.removeClass('active');
  if (!Main.DeviceDetection.isMobile()) {
    win.animate({'opacity': 0}, 300).css({'display': 'none'});
  }
}

function checkFields(ff) {
  let fields = ff.find('input');
  let vals = [];
  fields.each(function() {
    if (this.type === 'checkbox' || this.type === 'radio') {
      if ($(this).prop('checked')) {
        vals.push($(this).val());
      }
    } else {
      if ($(this).data('pretty-val')) {
        vals = $(this).attr('data-pretty-val');
      } else {
        vals = $(this).val();
      }
    }
  });
  if (vals.length) {
    fillResult(ff, vals);
  } else {
    clearResult(ff);
  }
  closeFF(ff);
}
function clearFields(ff) {
  let fields = ff.find('input');
  fields.each(function() {
    if ((this.type === 'checkbox' || this.type === 'radio') && $(this).prop('checked')) {
      $(this).prop('checked', false).change();
    } else {
      if ($(this).hasClass('js-rangeslider')) {
        let irs = $(this).data("ionRangeSlider");
        irs.reset();
      } else {
        $(this).val('');
      }
    }
  });
  clearResult(ff);
  closeFF(ff);
}

function fillResult(ff, vals) {
  let resEl = ff.find('.ff-result');
  let res = '';
  if (Array.isArray(vals)) {
    if (Main.DeviceDetection.isMobile()) {
      for (let i = 0; i < vals.length; i++) {
        res += `<span class="res">${vals[i]}</span>`;
        if (i === vals.length - 1) {
          res += ' '
        } else {
          res += ', '
        }
      }
    } else {
      res = vals.length;
    }
  } else {
    res = vals;
  }
  resEl.html(res).fadeIn();
  ff.addClass('selected');
  ff.closest('.filter').trigger('update');
}
function clearResult(ff) {
  let resEl = ff.find('.ff-result');
  resEl.html('').fadeOut();
  ff.removeClass('selected');
  ff.closest('.filter').trigger('update');
}

function init() {
  check();

  $(window).on('resizeend', function() {
    check();
  });

  // show/hide filter on mobile
  $('.btn-filter').on('click', function(e) {
    if (Main.DeviceDetection.isMobile()) {
      e.stopPropagation();
      open();
    } else {
      expand();
    }
  });
  $('.btn-filter-collapse').on('click', function() {
    collapse();
  });
  // collapse/expand filter on big screens
  $('.filter').on('collapsed', function() {
    $('.btn-filter-collapse-wrapper').stop().fadeOut(100);
    $('.btn-filter-wrapper').stop().fadeIn();
  });
  $('.filter').on('expanded', function() {
    $('.btn-filter-wrapper').stop().fadeOut();
    if ($(this).find('.filter-field.out').length) {
      $('.btn-filter-collapse-wrapper').stop().fadeIn();
    } else {
      $('.btn-filter-collapse-wrapper').stop().fadeOut();
    }
  });
  // recalc collapsing on big screens, output total on mobile
  $('.filter').on('update', function() {
    if (Main.DeviceDetection.isMobile()) {
      let fs = $(this).find('.filter-field.selected').length;
      if (fs) {
        $(this).find('.total-res').text(`(${fs})`);
      } else {
        $(this).find('.total-res').text('');
      }
    } else {
      calc();
      if ($(this).find('.filter-field.out').length) {
        collapse();
      } else {
        expand();
      }
    }
  })

  // show/hide popups
  $('.ff-pan').on('click', function(e) {
    e.stopPropagation();
    let ff = $(this).closest('.filter-field');
    if (ff.siblings('.active').length) {
      closeFF(ff.siblings('.active'));
    }
    openFF(ff)
  });
  $('.ff-win').on('click', function(e) {
    e.stopPropagation();
  });
  $('.ff-back').on('click', function() {
    let ff = $(this).closest('.filter-field');
    closeFF(ff);
  })
  $('.layout').on('click', function() {
    if ($('.filter-field.active').length) {
      closeFF($('.filter-field.active'));
    }
  });

  // filtering
  $('.btn-filter-apply').on('click', function(e) {
    e.preventDefault();
    let ff = $(this).closest('.filter-field');
    checkFields(ff);
  });
  $('.btn-filter-clear').on('click', function(e) {
    e.preventDefault();
    let ff = $(this).closest('.filter-field');
    clearFields(ff);
  });
  $('.btn-filter-add-clear').on('click', function(e) {
    e.preventDefault();
    let ff = $(this).closest('.filter-field');
    if (ff.hasClass('selected')) {
      e.stopPropagation();
      clearFields(ff);
    }
  });
}

module.exports = {
  init
}