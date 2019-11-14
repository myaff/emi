/**
 * Корзина
 * @module Cart
 */

function init() {
  $('.js-cart-size').on('change', function() {
    let val = $(this).val() ? $(this).val() : $(this).text();
    let product = $(this).closest('.cart-product');
    if (this.tagName === 'SELECT') {
      val = $(this.selectedOptions[0]).text();
    }
    product.find('.js-cart-size-res').text(val).trigger('change');
  });
  $('.js-cart-sum').on('change', function() {
    let val = $(this).val() ? $(this).val() : $(this).text();
    let product = $(this).closest('.cart-product');
    product.find('.js-cart-sum-res').text(val).trigger('change');
  });
  $('.btn-cart-product-delete').on('click', function() {
    $(this).closest('.cart-product').trigger('deleted');
  });

}

module.exports = {
  init
}