/**
 * Оформление заказа
 * @module Order
 */

function stepDone(step) {
  let filling = step.find('.section-filling');
  let result = step.find('.section-result');
  filling.slideUp(500);
  result.slideDown(500);
  step.addClass('done');
  let stepNext = step.next('.order-step');
  if (stepNext.hasClass('disabled')) {
    stepActive(stepNext);
  }
}

function stepActive(step) {
  let filling = step.find('.section-filling');
  filling.slideDown(500);
  step.removeClass('disabled');
}

function stepChange(step) {
  let filling = step.find('.section-filling');
  let result = step.find('.section-result');
  result.slideUp(500);
  filling.slideDown(500);
}

function stepFill(step) {
  let fillingForm = step.find('.section-filling form')[0];
  let result = step.find('.section-result');
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
  $(step).trigger('filled');
}

function init() {
  $('.btn-order-step-save').on('click', function(e) {
    e.preventDefault();
    // validation here...
    let step = $(this).closest('.order-step');
    stepFill(step);
  });

  $('.btn-order-step-change').on('click', function(e) {
    e.preventDefault();
    let step = $(this).closest('.order-step');
    stepChange(step);
  })

  $('.order-step').on('filled', function() {
    stepDone($(this));
  });

  $('.delivery-ctrl input').on('change', function() {
    let ctrl = $(this).closest('.delivery-variant');
    let content = ctrl.find('.delivery-content');
    content.slideDown(500);
    ctrl.siblings().find('.delivery-content').slideUp(500);
    $('.delivery-btn').slideDown(300);
  });
  $('.payment-ctrl input').on('change', function() {
    $('.order-btn').slideDown(300);
  });

  $('.delivery-shop').on('click', function() {
    $(this).siblings('.delivery-shop').removeClass('selected').find('.details').slideUp(500);
    $(this).toggleClass('selected');
    $(this).find('.details').slideToggle(500);
  });

  $('.delivery-location-select').on('change', function() {
    let container = $(this).closest('.delivery-shops');
    // let mapContainer = container.find('.delivery-map');
    // zoom to city here...
    // ... or not here
    let list = container.find('.delivery-shop');
    if ($(this).val()) {
      let val = $(this).val();
      list.each(function() {
        if ($(this).data('location') === val) {
          $(this).slideDown(500);
        } else {
          $(this).slideUp(500);
        }
      })
    }
  })
}

module.exports = {
  init
}
