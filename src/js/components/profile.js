/**
 * Профиль пользователя
 * @module Profile
 */

function fill(section) {
  let fillingForm = section.find('.section-filling form')[0];
  let result = section.find('.section-result');
  $(fillingForm.elements).each(function(i, item) {
    if ($(item).val() && result.find(`.${item.name}`).length){
      if (item.type === 'checkbox' || item.type === 'radio') {
        if (item.checked) {
          result.find(`.${item.name}`).text($(item).val());
        }
      } else {
        result.find(`.${item.name}`).text($(item).val());
      }
    }
  });
  $(section).trigger('filled');
}

function init() {
  $('.btn-order-details').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.profile-order').find('.details').slideToggle(500);
  });

  $('.btn-profile-info-change').on('click', function(e) {
    e.preventDefault();
    let section = $(this).closest('.profile-info-section');
    let filling = section.find('.section-filling');
    let result = section.find('.section-result');
    result.slideUp(500);
    filling.slideDown(500);
  });
  $('.btn-profile-info-save').on('click', function(e) {
    e.preventDefault();
    let section = $(this).closest('.profile-info-section');
    fill(section);
  });
  $('.profile-info-section').on('filled', function(e) {
    e.preventDefault();
    let filling = $(this).find('.section-filling');
    let result = $(this).find('.section-result');
    filling.slideUp(500);
    result.slideDown(500);
  });
}

module.exports = {
  init
}
