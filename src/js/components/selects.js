/**
 * Подключение Selects
 * @module Selects
 * https://select2.org/configuration/options-api
 */

function addIcon (state) {
  if (!$(state.element).data('icon')) {
    return state.text;
  }

  var $state = $(
    `<div class="inner">
      <svg class="icon"><use xlink:href="#${$(state.element).data('icon')}" /></svg>
      <span class="text">${state.text}</span>
    </div>`
  );
  return $state;
}

function clipValue (state) {
  if (state.text.includes('(') && state.text.includes(')')) {
    return state.text.slice(0, state.text.indexOf('('));
  } else {
    return state.text;
  }
}

function init() {

  $('.js-select').select2({
    width: 'style',
    minimumResultsForSearch: -1
  });
  $('.js-select.js-size').select2({
    width: 'style',
    minimumResultsForSearch: -1,
    templateSelection: clipValue
  });
  $('.js-sort').select2({
    width: 'style',
    minimumResultsForSearch: -1,
    templateSelection: addIcon,
    templateResult: addIcon,
    dropdownParent: $('.js-sort').closest('.field')
  });
}

module.exports = {
  init
}