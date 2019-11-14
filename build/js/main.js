var Main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/kenzo/build/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var DeviceDetection = __webpack_require__(1);
	var Helpers = __webpack_require__(2);
	var Carousel = __webpack_require__(3);
	var Forms = __webpack_require__(4);
	var Popups = __webpack_require__(5);
	var Tabs = __webpack_require__(6);
	var MainMenu = __webpack_require__(7);
	var Aside = __webpack_require__(8);
	var Basket = __webpack_require__(9);
	var Order = __webpack_require__(10);
	var Selects = __webpack_require__(11);
	var Scrollbar = __webpack_require__(12);
	var Accordion = __webpack_require__(13);
	var Profile = __webpack_require__(14);
	var Modals = __webpack_require__(15);
	var Filter = __webpack_require__(16);
	var MoreMenu = __webpack_require__(17);
	var Cart = __webpack_require__(18);

	$(document).ready(function () {

	  DeviceDetection.run();
	  Helpers.init();
	  //Share.init();
	  Carousel.init();
	  Tabs.init();
	  Accordion.init();
	  MainMenu.init();
	  Aside.init();
	  Basket.init();
	  Scrollbar.init();
	  Forms.init();
	  Selects.init();
	  Order.init();
	  Profile.init();
	  Modals.init();
	  Filter.init();
	  MoreMenu.init();
	  Cart.init();

	  $.afterlag(function () {
	    $('html').addClass('is-loaded');
	  });

	  //Popups.init();


	  if (window.innerWidth > document.body.clientWidth && !$('html').hasClass('fp-enabled') && !DeviceDetection.isTouch()) {
	    $('.layout').css({ 'padding-right': Helpers.getNativeScrollbarWidth() + 'px' });
	  }
	});

	/**
	 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
	 * @example
	 * Main.Form.isFormValid();
	 */
	module.exports = {
	  DeviceDetection: DeviceDetection,
	  Helpers: Helpers,
	  Carousel: Carousel,
	  Forms: Forms,
	  Selects: Selects,
	  Popups: Popups,
	  Tabs: Tabs,
	  Accordion: Accordion,
	  MainMenu: MainMenu,
	  Aside: Aside,
	  Basket: Basket,
	  Scrollbar: Scrollbar,
	  Order: Order,
	  Profile: Profile,
	  Modals: Modals,
	  Filter: Filter,
	  MoreMenu: MoreMenu,
	  Cart: Cart
		};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var breakpoints = {
	  sm: 767,
	  md: 1024,
	  lg: 1280,
	  xl: 1600
	};

	function isPortrait() {
	  return $(window).width() < $(window).height();
	};
	function isLandscape() {
	  return $(window).width() > $(window).height();
	};
	function isMobile() {
	  return $(window).width() <= breakpoints.sm;
	};
	function isTablet() {
	  return $(window).width() > breakpoints.sm && $(window).width() <= breakpoints.md;
	};
	function isDesktopExt() {
	  return $(window).width() >= breakpoints.md;
	};
	function isDesktop() {
	  return $(window).width() > breakpoints.md;
	};
	function isTouch() {
	  return 'ontouchstart' in window || navigator.maxTouchPoints;
	};
	function isMobileVersion() {
	  return !!~window.location.href.indexOf("/mobile/");
	};
	function isIE11() {
	  return !!window.MSInputMethodContext && !!document.documentMode;
	};
	var isWebp = false;

	function run() {
	  if (isTouch()) {
	    $('html').removeClass('no-touch').addClass('touch');
	  } else {
	    $('html').removeClass('touch').addClass('no-touch');
	  }

	  if (isIE11()) {
	    $('html').addClass('ie11');
	  } else {
	    $('html').addClass('no-ie11');
	  }
	};

	module.exports = {
	  run: run,
	  isTouch: isTouch,
	  isMobile: isMobile,
	  isTablet: isTablet,
	  isDesktop: isDesktop,
	  isDesktopExt: isDesktopExt,
	  isMobileVersion: isMobileVersion,
	  isPortrait: isPortrait,
	  isLandscape: isLandscape,
	  isIE11: isIE11
		};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Helpers
	 * @module Helpers
	 */

	// Add script asynh
	function addScript(url) {
	  var tag = document.createElement("script");
	  tag.src = url;
	  var firstScriptTag = document.getElementsByTagName("script")[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	(function () {

	  // проверяем поддержку
	  if (!Element.prototype.closest) {

	    // реализуем
	    Element.prototype.closest = function (css) {
	      var node = this;

	      while (node) {
	        if (node.matches(css)) return node;else node = node.parentElement;
	      }
	      return null;
	    };
	  }
	})();

	(function () {

	  // проверяем поддержку
	  if (!Element.prototype.matches) {

	    // определяем свойство
	    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
	  }
	})();

	/**
	 * Calculate scrollbar width in element
	 * - if the width is 0 it means the scrollbar is floated/overlayed
	 * - accepts "container" paremeter because ie & edge can have different
	 *   scrollbar behaviors for different elements using '-ms-overflow-style'
	 */
	function getNativeScrollbarWidth(container) {
	  container = container || document.body;

	  var fullWidth = 0;
	  var barWidth = 0;

	  var wrapper = document.createElement('div');
	  var child = document.createElement('div');

	  wrapper.style.position = 'absolute';
	  wrapper.style.pointerEvents = 'none';
	  wrapper.style.bottom = '0';
	  wrapper.style.right = '0';
	  wrapper.style.width = '100px';
	  wrapper.style.overflow = 'hidden';

	  wrapper.appendChild(child);
	  container.appendChild(wrapper);

	  fullWidth = child.offsetWidth;
	  wrapper.style.overflowY = 'scroll';
	  barWidth = fullWidth - child.offsetWidth;

	  container.removeChild(wrapper);

	  return barWidth;
	}

	var timer = void 0;
	var timeout = false;
	var delta = 200;
	function resizeEnd() {
	  if (new Date() - timer < delta) {
	    setTimeout(resizeEnd, delta);
	  } else {
	    timeout = false;
	    $(window).trigger('resizeend');
	  }
	}

	function toggleClassIf(el, cond, toggledClass) {
	  if (cond) {
	    el.addClass(toggledClass);
	  } else {
	    el.removeClass(toggledClass);
	  }
	}

	/**
	 * Функция добавляет к элементу класс, если страница прокручена больше, чем на указанное значение, 
	 * и убирает класс, если значение меньше
	 * @param {object} el - элемент, с которым взаимодействуем
	 * @param {mixed} [scrollValue=0] - значение прокрутки, на котором меняем css-класс, ожидаемое значение - число или ключевое слово 'this'. Если передано 'this', подставляется положение el.offset().top минус половина высоты экрана
	 * @param {string} [toggledClass=scrolled] - css-класс, который переключаем
	 */
	function toggleElementClassOnScroll(el) {
	  var scrollValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var toggledClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'scrolled';

	  if (el.length == 0) {
	    //console.error("Необходимо передать объект, с которым вы хотите взаимодействовать");
	    return false;
	  }

	  if (scrollValue == 'this') {
	    scrollValue = el.offset().top - $(window).outerHeight() / 2;
	  }

	  $(window).on('scroll', function (e) {
	    if ($(window).scrollTop() > scrollValue) {
	      el.addClass(toggledClass);
	    } else {
	      el.removeClass(toggledClass);
	    }
	  });
	};

	function setScrollpad(els) {
	  if ($('.layout').outerHeight() > window.outerHeight) {
	    els.css({ 'padding-right': getNativeScrollbarWidth() + 'px' });
	  } else {
	    els.css({ 'padding-right': '0px' });
	  }
	}

	function removeHash() {
	  history.pushState("", document.title, window.location.pathname + window.location.search);
	}

	/**
	 * инициализация событий для переключателей классов
	 * @example
	 * Helpers.init();
	 */
	function init() {

	  toggleElementClassOnScroll($('.header'), 50);

	  $(window).on('resize', function () {
	    timer = new Date();
	    if (timeout === false) {
	      timeout = true;
	      setTimeout(resizeEnd, delta);
	    }
	  });

	  $(window).scroll($.debounce(250, true, function () {
	    $('html').addClass('is-scrolling');
	  }));
	  $(window).scroll($.debounce(250, function () {
	    $('html').removeClass('is-scrolling');
	  }));
	}

	module.exports = {
	  init: init,
	  getNativeScrollbarWidth: getNativeScrollbarWidth,
	  toggleClassIf: toggleClassIf,
	  toggleElementClassOnScroll: toggleElementClassOnScroll,
	  addScript: addScript,
	  removeHash: removeHash
		};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Карусель
	 * @module Carousel
	 * https://idangero.us/swiper/api/
	 */

	/**
	 * Инициализация карусели
	 */
	function init() {
	  $('.swiper-products').each(function () {
	    var container = $(this).find('.swiper-container');
	    var prev = $(this).find('.swiper-button-prev');
	    var next = $(this).find('.swiper-button-next');

	    var productsSwiper = new Swiper(container, {
	      slidesPerView: 'auto',
	      spaceBetween: 20,
	      loop: true,
	      navigation: {
	        nextEl: next,
	        prevEl: prev
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

	  $('.swiper-categories').each(function () {
	    var container = $(this).find('.swiper-container');
	    var prev = $(this).find('.swiper-button-prev');
	    var next = $(this).find('.swiper-button-next');

	    var categoriesSwiper = new Swiper(container, {
	      slidesPerView: 'auto',
	      spaceBetween: 20,
	      loop: true,
	      navigation: {
	        nextEl: next,
	        prevEl: prev
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

	  $('.swiper-baner').each(function () {
	    var container = $(this).find('.swiper-container');
	    var prev = $(this).find('.swiper-button-prev');
	    var next = $(this).find('.swiper-button-next');

	    var categoriesSwiper = new Swiper(container, {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: true,
	      navigation: {
	        nextEl: next,
	        prevEl: prev
	      }
	    });
	  });

	  $('.swiper-kit').each(function () {
	    var container = $(this).find('.swiper-container');
	    var prev = $(this).find('.swiper-button-prev');
	    var next = $(this).find('.swiper-button-next');

	    var kitSwiper = new Swiper(container, {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      navigation: {
	        nextEl: next,
	        prevEl: prev
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

	  $('.swiper-lookbook-kit').each(function () {
	    var container = $(this).find('.swiper-container');

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

	  $('.swiper-detail').each(function () {
	    var bigContainer = $(this).find('.swiper-detail-big').find('.swiper-container');
	    var thumbsContainer = $(this).find('.swiper-detail-thumbs').find('.swiper-container');
	    var pagination = $(this).find('.swiper-pagination');

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

	module.exports = { init: init };

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Модуль для работы placeholder в элементах формы (.field)
	 * @module Input
	 */

	/**
	 * Установить фокус
	 * @private
	 * @param {object} input
	 */
	function focusLabel(input) {
	    input.closest('.field').addClass("has-focus");
	}

	/**
	 * Убрать фокус
	 * @private
	 * @param {object} input
	 */
	function blurLabel(input) {
	    var wrapper = input.closest('.field');
	    wrapper.removeClass("has-focus");
	}

	/**
	 * Проверить инпут на наличие value
	 * @private
	 * @param {object} input
	 */
	function checkInput(input) {
	    var wrapper = input.closest('.field');
	    if (input.val().length > 0) wrapper.addClass("has-value");else wrapper.removeClass("has-value");
	}

	// popup field
	function openPf(pf) {
	    if (pf) {
	        var win = pf.find('.pf-win');
	        pf.addClass('open');
	        win.fadeIn(100);
	        pf.trigger('opened');
	    } else {
	        console.error('pf is required');
	    }
	}
	function closePf(pf) {
	    if (pf) {
	        var win = pf.find('.pf-win');
	        pf.removeClass('open');
	        win.fadeOut(100);
	        pf.trigger('closed');
	    } else {
	        console.error('pf is required');
	    }
	}

	/**
	 * инициализация событий для инпута
	 * @example
	 * Input.init();
	 */
	function init() {

	    // text-inputs
	    var inputs = $('.field__input[type="text"], .field__input[type="email"], .field__input[type="password"], .field__input[type="tel"], .field__input[type="search"]');
	    var placeholders = $('.field__placeholder');

	    placeholders.click(function () {
	        $(this).closest('.field').find('.field__input').focus();
	    });

	    inputs.each(function (i, item) {
	        checkInput($(item));
	    });

	    inputs.focus(function () {
	        focusLabel($(this));
	    });

	    inputs.blur(function () {
	        blurLabel($(this));
	        checkInput($(this));
	    });

	    $('input[type="tel"]').inputmask("+7(999) 999 9999");
	    $('input[type="tel"]').on('mouseenter', function (e) {
	        e.preventDefault();
	    });

	    $('.btn-search').on('click', function (e) {
	        e.preventDefault();
	        $('#search').focus();
	    });

	    // flow textarea
	    var flow = $('.flow-textarea');
	    flow.on('keydown', function () {
	        $(this).change();
	    });

	    flow.on('change', function () {
	        setTimeout(function (self) {
	            var flowEx = $(self).siblings('.flow-textarea-example');
	            flowEx.html($(self).val().replace(/\r?\n/g, '<br/>'));
	            if (flow.outerHeight() !== flowEx.outerHeight()) {
	                flow.stop().animate({ 'height': flowEx.outerHeight() }, 300);
	            }
	        }, 10, this);
	    });

	    // checkboxes, radios
	    var radios = $('.field__input[type="radio"]');
	    var checkboxes = $('.field__input[type="checkbox"]');

	    radios.on('change', function () {
	        $(this).closest('.field').addClass('is-checked');
	        $('[name="' + $(this).attr('name') + '"]:not(#' + $(this).attr('id') + ')').closest('.field').removeClass('is-checked');
	    });
	    checkboxes.on('change', function () {
	        if ($(this).prop('checked')) {
	            $(this).closest('.field').addClass('is-checked');
	        } else {
	            $(this).closest('.field').removeClass('is-checked');
	        }
	    });

	    // input file
	    $('input[type="file"]').on('change', function () {
	        var sel = $(this).closest('.field').find('.selected');
	        if (this.files.length === 1) {
	            $(this).closest('.field').addClass('has-value');
	            sel.text(this.files[0].name);
	        } else {
	            sel.text('');
	            $(this).closest('.field').removeClass('has-value');
	        }
	    });

	    // input range
	    $('.js-rangeslider').ionRangeSlider({
	        type: 'double',
	        skin: 'emi',
	        hide_min_max: true,
	        onChange: function onChange(data) {
	            var postfix = data.input.data('postfix');
	            var pretty_val = '\u043E\u0442 ' + (data.from_pretty + postfix) + ' \u0434\u043E ' + (data.to_pretty + postfix);
	            data.input.attr('data-pretty-val', pretty_val);
	        }
	    });

	    // input increment
	    $('.field--increment .btn-minus').on('click', function () {
	        var inp = $(this).closest('.field--increment').find('input[type="num"]')[0];
	        var $inp = $(inp);
	        var val = $inp.val();
	        var min = inp.min.length ? parseInt(inp.min) : false;
	        if (min || min === 0) {
	            $inp.val(--val > min ? val-- : min);
	        } else {
	            $inp.val(val);
	        }
	        $inp.change();
	    });
	    $('.field--increment .btn-plus').on('click', function () {
	        var inp = $(this).closest('.field--increment').find('input[type="num"]')[0];
	        var $inp = $(inp);
	        var val = $inp.val();
	        var max = inp.max.length ? parseInt(inp.max) : false;
	        if (max) {
	            $inp.val(++val <= max ? val : max);
	        } else {
	            $inp.val(++val);
	        }
	        $inp.change();
	    });

	    // popup field
	    $('.pf-ctrl').on('click', function (e) {
	        var pf = $(this).closest('.popup-field');
	        if (pf.hasClass('open')) {
	            closePf(pf);
	        } else {
	            openPf(pf);
	        }
	    });
	    $('.popup-field').on('click', function (e) {
	        e.stopPropagation();
	    });
	    $('.popup-field').on('click-outside', function () {
	        closePf($(this));
	    });
	    $('.popup-field').on('closed', function () {
	        var val = $(this).find('input').val();
	        var res = $(this).find('.pf-res');
	        res.text(val);
	    });
	    $('.layout').on('click', function () {
	        $(this).find('.popup-field.open').trigger('click-outside');
	    });
	}

	module.exports = { init: init };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Переключение классов по различным событиям
	 * @module Popups
	 */

	/* Popups */
	function openPopup(popupID) {
	  if (popupID) {
	    var popup = $(popupID);
	    var win = popup.find('.popup__window');
	    popup.fadeIn(500);
	    if (Main.DeviceDetection.isPortrait()) {
	      $('html, body').css('overflow', 'hidden');
	    }
	    $('html').addClass('popup-opened');
	    win.fadeIn(500);
	    popup.trigger('popupopened');
	    $(window).trigger('popupopened');
	  } else {
	    console.error('Which popup?');
	  }
	}

	function closePopup(popupID) {
	  if (popupID) {
	    var popup = $(popupID);
	    var win = popup.find('.popup__window');
	    win.fadeOut(500);
	    popup.fadeOut(500);
	    $('html').removeClass('popup-opened');
	    if (Main.DeviceDetection.isPortrait()) {
	      $('html, body').css('overflow', 'visible');
	    }
	    popup.trigger('popupclosed');
	    $(window).trigger('popupclosed');
	  } else {
	    console.error('Which popup?');
	  }
	  Main.Helpers.removeHash();
	}

	function init() {

	  $('.btn-close-popup').on('click', function () {
	    var popup = !!$(this).data('target') ? $($(this).data('target')) : $(this).closest('.popup').attr('id');
	    closePopup('#' + popup);
	  });

	  $('.popup').on('click', function () {
	    if (!$(this).hasClass('unclosed')) {
	      closePopup('#' + $(this).attr('id'));
	    }
	  });

	  $('.popup__window, .popup .mCSB_scrollTools').on('click', function (e) {
	    e.stopPropagation();
	  });

	  $('.btn-popup').on('click', function (e) {
	    var target = $(this).data('target') === 'self' ? $(this).parent() : $($(this).data('target'));
	    e.preventDefault();
	    openPopup(target);
	  });
	}

	module.exports = {
	  init: init,
	  openPopup: openPopup,
	  closePopup: closePopup
		};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Tabs
	 * @module Tabs
	 */

	function set(active) {
	  if (active) {
	    var tabs = active.closest('.tabs');
	    var tab = active.data('tab');
	    tabs.find('.active').removeClass('active');
	    tabs.find('.tab-ctrl[data-tab="' + tab + '"], .tab__section[data-tab="' + tab + '"]').addClass('active');
	  } else {
	    console.error('Which tab?');
	  }
	}

	function init() {

	  $('.tabs').each(function () {
	    var active = $(this).find('.tab-ctrl.active').length ? $(this).find('.tab-ctrl.active') : $(this).find('.tab-ctrl').eq(0);
	    set(active);
	  });

	  $('.tabs .tab-ctrl').click(function () {
	    if (!$(this).hasClass('active')) {
	      set($(this));
	    }
	  });
	}

	module.exports = {
	  init: init,
	  set: set
		};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Основная навигация
	 * @module MainMenu
	 */

	function open(target) {
	  if ($('.deeper').hasClass('active')) {
	    $('.deeper__nav.active').removeClass('active');
	    $(target).addClass('active');
	  } else {
	    $('.deeper').addClass('active');
	    $(target).addClass('active');
	  }
	  $('.layout').addClass('menu-opened');
	}

	function closeDeeper() {
	  $('.deeper').removeClass('active');
	  $('.deeper__nav.active').removeClass('active');
	}

	function close() {
	  closeDeeper();
	  $('.main-nav').removeClass('active');
	  $('.layout').removeClass('menu-opened');
	  if (Main.DeviceDetection.isMobile()) {
	    $('html, body').css({ 'overflow-y': '' });
	  }
	}

	/**
	 * Инициализация
	 */
	function init() {
	  $('.main-nav .multilevel').on('click', function (e) {
	    e.preventDefault();
	    var target = $(this).attr('href');
	    open(target);
	  });
	  $('.main-nav').on('click', function (e) {
	    e.stopPropagation();
	  });
	  $(document).on('click', '.layout.menu-opened', function () {
	    close();
	  });
	  $('.js-menu--burger').on('click', function (e) {
	    e.stopPropagation();
	    $('.main-nav').addClass('active');
	    $('.layout').addClass('menu-opened');
	    if (Main.DeviceDetection.isMobile()) {
	      $('html, body').css({ 'overflow-y': 'hidden' });
	    }
	  });
	  $('.js-menu--back').on('click', function (e) {
	    e.preventDefault();
	    closeDeeper();
	  });
	}

	module.exports = {
	  init: init,
	  close: close,
	  closeDeeper: closeDeeper
		};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Aside
	 * @module Aside
	 */

	function open(selector) {
	  if (selector) {
	    var target = selector;
	    $('html, body').css({ 'overflow-y': 'hidden' });
	    $('.layout').addClass('aside-opened');
	    $(target).addClass('active');
	  } else {
	    console.error('Selector is required');
	  }
	};

	function close(selector) {
	  var target = selector || '.aside.active';
	  $('html, body').css({ 'overflow-y': '' });
	  $('.layout').removeClass('aside-opened');
	  $(target).removeClass('active');
	}

	function init() {
	  $('.btn-aside').on('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var target = $(this).attr('href');
	    open(target);
	  });
	  $('.aside').on('click', function (e) {
	    e.stopPropagation();
	  });
	  $(document).on('click', '.layout.aside-opened', function () {
	    close();
	  });
	}

	module.exports = {
	  init: init
		};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Корзина в шапке
	 * @module Basket
	 */

	function open(selector) {
	  if (selector) {
	    $(selector).addClass('active').fadeIn(500);
	  } else {
	    console.error('Selector is required');
	  }
	};
	function close(selector) {
	  var target = selector || '.basket-popup.active';
	  $(target).fadeOut(300).removeClass('active');
	}

	/**
	 * Инициализация
	 */
	function init() {
	  $('.btn-basket').on('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    if ($(this).closest('.basket').hasClass('basket--not-empty')) {
	      open('#basket-popup');
	      $('.basket').removeClass('basket--added');
	    }
	  });
	  $('.btn-basket-clear').on('click', function () {
	    // remove products...
	    close('#basket-popup');
	  });
	  $('.basket-popup').on('click', function (e) {
	    e.stopPropagation();
	  });
	  $(document).on('click', function () {
	    close();
	  });

	  $('.btn-add-to-basket').on('click', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    open('#basket-notification');
	    $('.basket').addClass('basket--added');

	    setTimeout(function () {
	      close('#basket-notification');
	    }, 5000);
	  });
	}

	module.exports = {
	  init: init,
	  open: open,
	  close: close
		};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Оформление заказа
	 * @module Order
	 */

	function stepDone(step) {
	  var filling = step.find('.section-filling');
	  var result = step.find('.section-result');
	  filling.slideUp(500);
	  result.slideDown(500);
	  step.addClass('done');
	  var stepNext = step.next('.order-step');
	  if (stepNext.hasClass('disabled')) {
	    stepActive(stepNext);
	  }
	}

	function stepActive(step) {
	  var filling = step.find('.section-filling');
	  filling.slideDown(500);
	  step.removeClass('disabled');
	}

	function stepChange(step) {
	  var filling = step.find('.section-filling');
	  var result = step.find('.section-result');
	  result.slideUp(500);
	  filling.slideDown(500);
	}

	function stepFill(step) {
	  var fillingForm = step.find('.section-filling form')[0];
	  var result = step.find('.section-result');
	  $(fillingForm.elements).each(function (i, item) {
	    if ($(item).val() && result.find('.' + item.name).length) {
	      if (item.type === 'checkbox' || item.type === 'radio') {
	        if (item.checked) {
	          result.find('.' + item.name).text($(item).val());
	        }
	      } else {
	        result.find('.' + item.name).text($(item).val());
	      }
	    }
	  });
	  $(step).trigger('filled');
	}

	function init() {
	  $('.btn-order-step-save').on('click', function (e) {
	    e.preventDefault();
	    // validation here...
	    var step = $(this).closest('.order-step');
	    stepFill(step);
	  });

	  $('.btn-order-step-change').on('click', function (e) {
	    e.preventDefault();
	    var step = $(this).closest('.order-step');
	    stepChange(step);
	  });

	  $('.order-step').on('filled', function () {
	    stepDone($(this));
	  });

	  $('.delivery-ctrl input').on('change', function () {
	    var ctrl = $(this).closest('.delivery-variant');
	    var content = ctrl.find('.delivery-content');
	    content.slideDown(500);
	    ctrl.siblings().find('.delivery-content').slideUp(500);
	    $('.delivery-btn').slideDown(300);
	  });
	  $('.payment-ctrl input').on('change', function () {
	    $('.order-btn').slideDown(300);
	  });

	  $('.delivery-shop').on('click', function () {
	    $(this).siblings('.delivery-shop').removeClass('selected').find('.details').slideUp(500);
	    $(this).toggleClass('selected');
	    $(this).find('.details').slideToggle(500);
	  });

	  $('.delivery-location-select').on('change', function () {
	    var container = $(this).closest('.delivery-shops');
	    // let mapContainer = container.find('.delivery-map');
	    // zoom to city here...
	    // ... or not here
	    var list = container.find('.delivery-shop');
	    if ($(this).val()) {
	      var val = $(this).val();
	      list.each(function () {
	        if ($(this).data('location') === val) {
	          $(this).slideDown(500);
	        } else {
	          $(this).slideUp(500);
	        }
	      });
	    }
	  });
	}

	module.exports = {
	  init: init
		};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Подключение Selects
	 * @module Selects
	 * https://select2.org/configuration/options-api
	 */

	function addIcon(state) {
	  if (!$(state.element).data('icon')) {
	    return state.text;
	  }

	  var $state = $('<div class="inner">\n      <svg class="icon"><use xlink:href="#' + $(state.element).data('icon') + '" /></svg>\n      <span class="text">' + state.text + '</span>\n    </div>');
	  return $state;
	}

	function clipValue(state) {
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
	  init: init
		};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Переключение классов по различным событиям
	 * @module Scrollbar
	 */

	function calcHeight(el) {
	  var s = el[0].offsetTop + el[0].offsetParent.offsetTop;
	  return $(window).height() - s;
	}

	function init() {

	  $(".custom-scroll").mCustomScrollbar({
	    theme: 'minimal'
	  });
	  if (Main.DeviceDetection.isIE11()) {
	    //$('.ie-unclear-height').css({'height': '571px'});
	    //$('.ie-unclear-height').css({'height': calcHeight($('.ie-unclear-height')) + 'px'});
	  }
	}

	module.exports = { init: init };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * инициализация событий для кастомного селекта
	 * @example
	 * Accordion.init();
	 */

	function init() {

	  $('.accordion').each(function () {
	    if ($(this).hasClass('active')) {
	      $(this).find('.accordion__content').slideDown(500);
	    }
	  });

	  $('.accordion__panel').on('click', function () {
	    $(this).closest('.accordion').siblings('.accordion').removeClass('active');
	    $(this).closest('.accordion').siblings('.accordion').find('.accordion__content').slideUp(500);
	    $(this).closest('.accordion').toggleClass('active');
	    $(this).siblings('.accordion__content').slideToggle(500);
	  });

	  if (Main.DeviceDetection.isMobile()) {
	    $('.accordion-nav').each(function () {
	      var unit = $(this).find('.current').outerHeight();
	      $(this).css({ 'height': unit + 'px' });
	    });
	    $('.accordion-nav .current a').on('click', function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	    });
	    $('.accordion-nav .current').on('click', function (e) {
	      e.preventDefault();
	      var unit = $(this).outerHeight();
	      var accordion = $(this).closest('.accordion-nav');
	      var h = unit * accordion.find('.nav__item').length;
	      if (accordion.hasClass('open')) {
	        accordion.removeClass('open').animate({ 'height': unit + 'px' }, 500);
	      } else {
	        accordion.addClass('open').animate({ 'height': h + 'px' }, 500);
	      }
	    });
	  }
	}

	module.exports = { init: init };

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Профиль пользователя
	 * @module Profile
	 */

	function fill(section) {
	  var fillingForm = section.find('.section-filling form')[0];
	  var result = section.find('.section-result');
	  $(fillingForm.elements).each(function (i, item) {
	    if ($(item).val() && result.find('.' + item.name).length) {
	      if (item.type === 'checkbox' || item.type === 'radio') {
	        if (item.checked) {
	          result.find('.' + item.name).text($(item).val());
	        }
	      } else {
	        result.find('.' + item.name).text($(item).val());
	      }
	    }
	  });
	  $(section).trigger('filled');
	}

	function init() {
	  $('.btn-order-details').on('click', function (e) {
	    e.preventDefault();
	    $(this).closest('.profile-order').find('.details').slideToggle(500);
	  });

	  $('.btn-profile-info-change').on('click', function (e) {
	    e.preventDefault();
	    var section = $(this).closest('.profile-info-section');
	    var filling = section.find('.section-filling');
	    var result = section.find('.section-result');
	    result.slideUp(500);
	    filling.slideDown(500);
	  });
	  $('.btn-profile-info-save').on('click', function (e) {
	    e.preventDefault();
	    var section = $(this).closest('.profile-info-section');
	    fill(section);
	  });
	  $('.profile-info-section').on('filled', function (e) {
	    e.preventDefault();
	    var filling = $(this).find('.section-filling');
	    var result = $(this).find('.section-result');
	    filling.slideUp(500);
	    result.slideDown(500);
	  });
	}

	module.exports = {
	  init: init
		};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Модальные окна
	 * @module Modals
	 */

	var state = {
	  current: null,
	  last: null
	};

	function open(modalID) {
	  if (modalID) {
	    state.current = modalID;
	    var modal = $(modalID);
	    var win = modal.find('.modal__window');
	    modal.fadeIn(500);
	    $('html, body').css('overflow', 'hidden');
	    $('html').addClass('modal-opened');
	    win.fadeIn(500);
	    modal.trigger('modalopened');
	    $(window).trigger('modalopened');
	  } else {
	    console.error('Which modal?');
	  }
	}

	function close(modalID) {
	  if (modalID) {
	    var modal = $(modalID);
	    var win = modal.find('.modal__window');
	    win.fadeOut(500);
	    modal.fadeOut(500);
	    $('html').removeClass('modal-opened');
	    $('html, body').css('overflow', '');
	    modal.trigger('modalclosed');
	    $(window).trigger('modalclosed');
	  } else {
	    console.error('Which modal?');
	  }
	  Main.Helpers.removeHash();
	  state.last = modalID;
	}

	function init() {

	  if (window.location.hash && $(window.location.hash).hasClass('modal')) {
	    open(window.location.hash);
	  }

	  $('.btn-close-modal').on('click', function () {
	    var modal = !!$(this).data('target') ? $($(this).data('target')) : $(this).closest('.modal').attr('id');
	    close('#' + modal);
	  });

	  $('.modal').on('click', function () {
	    if (!$(this).hasClass('unclosed')) {
	      close('#' + $(this).attr('id'));
	    }
	  });

	  $('.modal__window, .modal .mCSB_scrollTools').on('click', function (e) {
	    e.stopPropagation();
	  });

	  $('.btn-modal').on('click', function (e) {
	    e.preventDefault();
	    var target = $(this).data('target');
	    open(target);
	  });
	  $('.btn-modal-alt').on('click', function (e) {
	    e.preventDefault();
	    var target = $(this).data('target');
	    var modal = $(this).closest('.modal').attr('id');
	    window.location.hash = target;
	    open(target);
	    close('#' + modal);
	  });

	  $('.btn-modal-back').on('click', function (e) {
	    e.preventDefault();
	    if (state.last) {
	      open(state.last);
	    }
	    close($(this).closest('.modal'));
	    state.last = null;
	  });
	}

	module.exports = {
	  init: init,
	  open: open,
	  close: close
		};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Фильтр
	 * @module Filter
	 */

	var h = 105;

	function calc() {
	  var tw = 0;
	  var out = false;
	  $('.filter-field').each(function () {
	    var pw = $(this).parent().outerWidth();
	    var sw = $(this).outerWidth() + 24;
	    if (pw > tw && pw > tw + sw && !$(this).prev().hasClass('out')) {
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
	  $('.filter-field.out').animate({ 'opacity': 0 }, 300).css({ 'visibility': 'hidden' }).addClass('collapsed');
	  $('.filter').stop().animate({ 'height': '105px' }).trigger('collapsed');
	};
	function expand() {
	  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	  if (el) {
	    el.stop().css({ 'visibility': 'visible' }).animate({ 'opacity': 1 }, 100).removeClass('collapsed');
	  } else {
	    $('.filter').find('.filter-field.collapsed').stop().css({ 'visibility': 'visible' }).animate({ 'opacity': 1 }, 100).removeClass('collapsed');
	    $('.filter').stop().animate({ 'height': h + 'px' }).trigger('expanded');
	  }
	}
	function open() {
	  $('.layout').addClass('filter-opened');
	  $('.filter').find('.filter-content').addClass('active');
	  $('html, body').css({ 'overflow-y': 'hidden' });
	}
	function close() {
	  $('html, body').css({ 'overflow-y': '' });
	  $('.filter').find('.filter-content').removeClass('active');
	  $('.layout').removeClass('filter-opened');
	}

	function check() {
	  if (Main.DeviceDetection.isMobile()) {
	    $('.filter-content').on('click', function (e) {
	      e.stopPropagation();
	    });
	    $(document).on('click', '.layout.filter-opened', function () {
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
	  var pan = ff.find('.ff-pan');
	  var win = ff.find('.ff-win');
	  ff.addClass('active');
	  if (!Main.DeviceDetection.isMobile()) {
	    win.css({ 'display': 'block' });
	    if (win.offset().left + win.outerWidth() >= $(window).width()) {
	      var pos = $(window).width() - win.offset().left - win.outerWidth() - 24;
	      win.css({ 'margin-left': pos + 'px' });
	    }
	    win.animate({ 'opacity': 1 }, 500);
	  }
	}
	function closeFF(ff) {
	  var pan = ff.find('.ff-pan');
	  var win = ff.find('.ff-win');
	  ff.removeClass('active');
	  if (!Main.DeviceDetection.isMobile()) {
	    win.animate({ 'opacity': 0 }, 300).css({ 'display': 'none' });
	  }
	}

	function checkFields(ff) {
	  var fields = ff.find('input');
	  var vals = [];
	  fields.each(function () {
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
	  var fields = ff.find('input');
	  fields.each(function () {
	    if ((this.type === 'checkbox' || this.type === 'radio') && $(this).prop('checked')) {
	      $(this).prop('checked', false).change();
	    } else {
	      if ($(this).hasClass('js-rangeslider')) {
	        var irs = $(this).data("ionRangeSlider");
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
	  var resEl = ff.find('.ff-result');
	  var res = '';
	  if (Array.isArray(vals)) {
	    if (Main.DeviceDetection.isMobile()) {
	      for (var i = 0; i < vals.length; i++) {
	        res += '<span class="res">' + vals[i] + '</span>';
	        if (i === vals.length - 1) {
	          res += ' ';
	        } else {
	          res += ', ';
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
	  var resEl = ff.find('.ff-result');
	  resEl.html('').fadeOut();
	  ff.removeClass('selected');
	  ff.closest('.filter').trigger('update');
	}

	function init() {
	  check();

	  $(window).on('resizeend', function () {
	    check();
	  });

	  // show/hide filter on mobile
	  $('.btn-filter').on('click', function (e) {
	    if (Main.DeviceDetection.isMobile()) {
	      e.stopPropagation();
	      open();
	    } else {
	      expand();
	    }
	  });
	  $('.btn-filter-collapse').on('click', function () {
	    collapse();
	  });
	  // collapse/expand filter on big screens
	  $('.filter').on('collapsed', function () {
	    $('.btn-filter-collapse-wrapper').stop().fadeOut(100);
	    $('.btn-filter-wrapper').stop().fadeIn();
	  });
	  $('.filter').on('expanded', function () {
	    $('.btn-filter-wrapper').stop().fadeOut();
	    if ($(this).find('.filter-field.out').length) {
	      $('.btn-filter-collapse-wrapper').stop().fadeIn();
	    } else {
	      $('.btn-filter-collapse-wrapper').stop().fadeOut();
	    }
	  });
	  // recalc collapsing on big screens, output total on mobile
	  $('.filter').on('update', function () {
	    if (Main.DeviceDetection.isMobile()) {
	      var fs = $(this).find('.filter-field.selected').length;
	      if (fs) {
	        $(this).find('.total-res').text('(' + fs + ')');
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
	  });

	  // show/hide popups
	  $('.ff-pan').on('click', function (e) {
	    e.stopPropagation();
	    var ff = $(this).closest('.filter-field');
	    if (ff.siblings('.active').length) {
	      closeFF(ff.siblings('.active'));
	    }
	    openFF(ff);
	  });
	  $('.ff-win').on('click', function (e) {
	    e.stopPropagation();
	  });
	  $('.ff-back').on('click', function () {
	    var ff = $(this).closest('.filter-field');
	    closeFF(ff);
	  });
	  $('.layout').on('click', function () {
	    if ($('.filter-field.active').length) {
	      closeFF($('.filter-field.active'));
	    }
	  });

	  // filtering
	  $('.btn-filter-apply').on('click', function (e) {
	    e.preventDefault();
	    var ff = $(this).closest('.filter-field');
	    checkFields(ff);
	  });
	  $('.btn-filter-clear').on('click', function (e) {
	    e.preventDefault();
	    var ff = $(this).closest('.filter-field');
	    clearFields(ff);
	  });
	  $('.btn-filter-add-clear').on('click', function (e) {
	    e.preventDefault();
	    var ff = $(this).closest('.filter-field');
	    if (ff.hasClass('selected')) {
	      e.stopPropagation();
	      clearFields(ff);
	    }
	  });
	}

	module.exports = {
	  init: init
		};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Модуль дополнительного меню на мобиле
	 * @module MoreMenu
	 */

	function open(el) {
	  if (el) {
	    el.fadeIn().addClass('open').trigger('opened');
	    $('html, body').css({ 'overflow-y': 'hidden' });
	    $('.layout').addClass('more-menu-opened');
	  } else {
	    console.error('element is required');
	  }
	}
	function close(el) {
	  if (el) {
	    el.removeClass('open').delay(500).fadeOut().trigger('opened');
	    $('html, body').css({ 'overflow-y': 'hidden' });
	    $('.layout').removeClass('more-menu-opened');
	  } else {
	    console.error('element is required');
	  }
	}

	function show(el) {
	  if (el) {
	    el.addClass('open').trigger('shown');
	  } else {
	    console.error('element is required');
	  }
	}
	function hide(el) {
	  if (el) {
	    el.removeClass('open').trigger('hidden');
	  } else {
	    console.error('element is required');
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
	    var ma = el.closest('.mm-action');
	    var mr = ma.find('.mm-res');
	    var val = void 0;
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
	  $('.btn-more-menu').on('click', function (e) {
	    e.stopPropagation();
	    var mm = $(this).closest('.more-menu').find('.more-menu-win');
	    open(mm);
	  });
	  $('.more-menu-win').on('click', function (e) {
	    e.stopPropagation();
	  });
	  $('.more-menu-win').on('click-outside', function () {
	    close($(this));
	  });
	  $('.layout').on('click', function () {
	    if ($(this).find('.mm-win.open').length) {
	      $(this).find('.mm-win.open').trigger('click-outside');
	    } else if ($(this).find('.more-menu-win.open').length) {
	      $(this).find('.more-menu-win.open').trigger('click-outside');
	    }
	  });

	  $('.mm-pan').on('click', function () {
	    var mw = $(this).closest('.mm-action').find('.mm-win');
	    if (mw.length) {
	      openMw(mw);
	    }
	  });
	  $('.mm-win').on('click-outside', function (e) {
	    e.stopPropagation();
	    closeMw($(this));
	  });
	  $('.mm-apply').on('click', function () {
	    var mw = $(this).closest('.mm-win');
	    fill($(this));
	    closeMw(mw);
	  });
	  $('.more-menu__delete').on('click', function () {
	    close($(this).closest('.more-menu-win'));
	  });
	}

	module.exports = {
	  init: init
		};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Корзина
	 * @module Cart
	 */

	function init() {
	  $('.js-cart-size').on('change', function () {
	    var val = $(this).val() ? $(this).val() : $(this).text();
	    var product = $(this).closest('.cart-product');
	    if (this.tagName === 'SELECT') {
	      val = $(this.selectedOptions[0]).text();
	    }
	    product.find('.js-cart-size-res').text(val).trigger('change');
	  });
	  $('.js-cart-sum').on('change', function () {
	    var val = $(this).val() ? $(this).val() : $(this).text();
	    var product = $(this).closest('.cart-product');
	    product.find('.js-cart-sum-res').text(val).trigger('change');
	  });
	  $('.btn-cart-product-delete').on('click', function () {
	    $(this).closest('.cart-product').trigger('deleted');
	  });
	}

	module.exports = {
	  init: init
		};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOGY2YWQ4Yjg4NDBhNjFlYWRjMSIsIndlYnBhY2s6Ly8vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvcG9wdXBzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy90YWJzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9tYWluLW1lbnUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FzaWRlLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9iYXNrZXQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL29yZGVyLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9zZWxlY3RzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWxzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL21vcmUtbWVudS5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvY2FydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIva2Vuem8vYnVpbGQvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzhmNmFkOGI4ODQwYTYxZWFkYzEiLCJjb25zdCBEZXZpY2VEZXRlY3Rpb24gPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb25cIik7XHJcbmNvbnN0IEhlbHBlcnMgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2hlbHBlcnNcIik7XHJcbmNvbnN0IENhcm91c2VsID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJvdXNlbFwiKTtcclxuY29uc3QgRm9ybXMgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Zvcm1zXCIpO1xyXG5jb25zdCBQb3B1cHMgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3BvcHVwc1wiKTtcclxuY29uc3QgVGFicyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy90YWJzJyk7XHJcbmNvbnN0IE1haW5NZW51ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL21haW4tbWVudScpO1xyXG5jb25zdCBBc2lkZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hc2lkZScpO1xyXG5jb25zdCBCYXNrZXQgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvYmFza2V0Jyk7XHJcbmNvbnN0IE9yZGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL29yZGVyJyk7XHJcbmNvbnN0IFNlbGVjdHMgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2VsZWN0cycpO1xyXG5jb25zdCBTY3JvbGxiYXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc2Nyb2xsYmFyJyk7XHJcbmNvbnN0IEFjY29yZGlvbiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9hY2NvcmRpb24nKTtcclxuY29uc3QgUHJvZmlsZSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9wcm9maWxlJyk7XHJcbmNvbnN0IE1vZGFscyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb2RhbHMnKTtcclxuY29uc3QgRmlsdGVyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2ZpbHRlcicpO1xyXG5jb25zdCBNb3JlTWVudSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9tb3JlLW1lbnUnKTtcclxuY29uc3QgQ2FydCA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9jYXJ0JylcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgRGV2aWNlRGV0ZWN0aW9uLnJ1bigpO1xyXG4gIEhlbHBlcnMuaW5pdCgpO1xyXG4gIC8vU2hhcmUuaW5pdCgpO1xyXG4gIENhcm91c2VsLmluaXQoKTtcclxuICBUYWJzLmluaXQoKTtcclxuICBBY2NvcmRpb24uaW5pdCgpO1xyXG4gIE1haW5NZW51LmluaXQoKTtcclxuICBBc2lkZS5pbml0KCk7XHJcbiAgQmFza2V0LmluaXQoKTtcclxuICBTY3JvbGxiYXIuaW5pdCgpO1xyXG4gIEZvcm1zLmluaXQoKTtcclxuICBTZWxlY3RzLmluaXQoKTtcclxuICBPcmRlci5pbml0KCk7XHJcbiAgUHJvZmlsZS5pbml0KCk7XHJcbiAgTW9kYWxzLmluaXQoKTtcclxuICBGaWx0ZXIuaW5pdCgpO1xyXG4gIE1vcmVNZW51LmluaXQoKTtcclxuICBDYXJ0LmluaXQoKTtcclxuICBcclxuICAkLmFmdGVybGFnKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLWxvYWRlZCcpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vUG9wdXBzLmluaXQoKTtcclxuICBcclxuICBcclxuICBpZiAoKHdpbmRvdy5pbm5lcldpZHRoID4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCkgJiYgISQoJ2h0bWwnKS5oYXNDbGFzcygnZnAtZW5hYmxlZCcpICYmICFEZXZpY2VEZXRlY3Rpb24uaXNUb3VjaCgpKSB7XHJcbiAgICAkKCcubGF5b3V0JykuY3NzKHsncGFkZGluZy1yaWdodCc6IEhlbHBlcnMuZ2V0TmF0aXZlU2Nyb2xsYmFyV2lkdGgoKSArICdweCd9KTtcclxuICB9XHJcbiAgXHJcbn0pO1xyXG5cclxuXHJcbi8qKlxyXG4gKiDQodC/0LjRgdC+0Log0Y3QutGB0L/QvtGA0YLQuNGA0YPQtdC80YvRhSDQvNC+0LTRg9C70LXQuSwg0YfRgtC+0LHRiyDQuNC80LXRgtGMINC6INC90LjQvCDQtNC+0YHRgtGD0L8g0LjQt9Cy0L3QtVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBNYWluLkZvcm0uaXNGb3JtVmFsaWQoKTtcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIERldmljZURldGVjdGlvbixcclxuICBIZWxwZXJzLFxyXG4gIENhcm91c2VsLFxyXG4gIEZvcm1zLFxyXG4gIFNlbGVjdHMsXHJcbiAgUG9wdXBzLFxyXG4gIFRhYnMsXHJcbiAgQWNjb3JkaW9uLFxyXG4gIE1haW5NZW51LFxyXG4gIEFzaWRlLFxyXG4gIEJhc2tldCxcclxuICBTY3JvbGxiYXIsXHJcbiAgT3JkZXIsXHJcbiAgUHJvZmlsZSxcclxuICBNb2RhbHMsXHJcbiAgRmlsdGVyLFxyXG4gIE1vcmVNZW51LFxyXG4gIENhcnRcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21haW4uanMiLCJsZXQgYnJlYWtwb2ludHMgPSB7XHJcbiAgc206IDc2NyxcclxuICBtZDogMTAyNCxcclxuICBsZzogMTI4MCxcclxuICB4bDogMTYwMFxyXG59O1xyXG5cclxuZnVuY3Rpb24gaXNQb3J0cmFpdCgpIHtcclxuICByZXR1cm4gKCQod2luZG93KS53aWR0aCgpIDwgJCh3aW5kb3cpLmhlaWdodCgpKTtcclxufTtcclxuZnVuY3Rpb24gaXNMYW5kc2NhcGUoKSB7XHJcbiAgcmV0dXJuICgkKHdpbmRvdykud2lkdGgoKSA+ICQod2luZG93KS5oZWlnaHQoKSk7XHJcbn07XHJcbmZ1bmN0aW9uIGlzTW9iaWxlKCl7XHJcbiAgcmV0dXJuICgkKHdpbmRvdykud2lkdGgoKSA8PSBicmVha3BvaW50cy5zbSk7XHJcbn07XHJcbmZ1bmN0aW9uIGlzVGFibGV0KCl7XHJcbiAgcmV0dXJuICgkKHdpbmRvdykud2lkdGgoKSA+IGJyZWFrcG9pbnRzLnNtICYmICQod2luZG93KS53aWR0aCgpIDw9IGJyZWFrcG9pbnRzLm1kKVxyXG59O1xyXG5mdW5jdGlvbiBpc0Rlc2t0b3BFeHQoKXtcclxuICByZXR1cm4gKCQod2luZG93KS53aWR0aCgpID49IGJyZWFrcG9pbnRzLm1kKVxyXG59O1xyXG5mdW5jdGlvbiBpc0Rlc2t0b3AoKXtcclxuICByZXR1cm4gKCQod2luZG93KS53aWR0aCgpID4gYnJlYWtwb2ludHMubWQpXHJcbn07XHJcbmZ1bmN0aW9uIGlzVG91Y2goKXtcclxuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcclxufTtcclxuZnVuY3Rpb24gaXNNb2JpbGVWZXJzaW9uKCl7XHJcbiAgcmV0dXJuICEhfndpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCIvbW9iaWxlL1wiKTtcclxufTtcclxuZnVuY3Rpb24gaXNJRTExKCkge1xyXG4gIHJldHVybiAhIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcclxufTtcclxubGV0IGlzV2VicCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gcnVuKCl7XHJcbiAgaWYoaXNUb3VjaCgpKXtcclxuICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tdG91Y2gnKS5hZGRDbGFzcygndG91Y2gnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCd0b3VjaCcpLmFkZENsYXNzKCduby10b3VjaCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzSUUxMSgpKSB7XHJcbiAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2llMTEnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCduby1pZTExJyk7XHJcbiAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgcnVuLFxyXG4gIGlzVG91Y2gsXHJcbiAgaXNNb2JpbGUsXHJcbiAgaXNUYWJsZXQsXHJcbiAgaXNEZXNrdG9wLFxyXG4gIGlzRGVza3RvcEV4dCxcclxuICBpc01vYmlsZVZlcnNpb24sXHJcbiAgaXNQb3J0cmFpdCxcclxuICBpc0xhbmRzY2FwZSxcclxuICBpc0lFMTFcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvZGV2aWNlLWRldGVjdGlvbi5qcyIsIi8qKlxyXG4gKiBIZWxwZXJzXHJcbiAqIEBtb2R1bGUgSGVscGVyc1xyXG4gKi9cclxuXHJcbi8vIEFkZCBzY3JpcHQgYXN5bmhcclxuZnVuY3Rpb24gYWRkU2NyaXB0ICh1cmwpIHtcclxuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICB0YWcuc3JjID0gdXJsO1xyXG4gIHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xyXG4gIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xyXG59XHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcblxyXG4gIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQv9C+0LTQtNC10YDQttC60YNcclxuICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcclxuXHJcbiAgICAvLyDRgNC10LDQu9C40LfRg9C10LxcclxuICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihjc3MpIHtcclxuICAgICAgdmFyIG5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgd2hpbGUgKG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZS5tYXRjaGVzKGNzcykpIHJldHVybiBub2RlO1xyXG4gICAgICAgIGVsc2Ugbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INC/0L7QtNC00LXRgNC20LrRg1xyXG4gIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG5cclxuICAgIC8vINC+0L/RgNC10LTQtdC70Y/QtdC8INGB0LLQvtC50YHRgtCy0L5cclxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcclxuICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxyXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgc2Nyb2xsYmFyIHdpZHRoIGluIGVsZW1lbnRcclxuICogLSBpZiB0aGUgd2lkdGggaXMgMCBpdCBtZWFucyB0aGUgc2Nyb2xsYmFyIGlzIGZsb2F0ZWQvb3ZlcmxheWVkXHJcbiAqIC0gYWNjZXB0cyBcImNvbnRhaW5lclwiIHBhcmVtZXRlciBiZWNhdXNlIGllICYgZWRnZSBjYW4gaGF2ZSBkaWZmZXJlbnRcclxuICogICBzY3JvbGxiYXIgYmVoYXZpb3JzIGZvciBkaWZmZXJlbnQgZWxlbWVudHMgdXNpbmcgJy1tcy1vdmVyZmxvdy1zdHlsZSdcclxuICovXHJcbmZ1bmN0aW9uIGdldE5hdGl2ZVNjcm9sbGJhcldpZHRoIChjb250YWluZXIpIHtcclxuICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQuYm9keTtcclxuXHJcbiAgbGV0IGZ1bGxXaWR0aCA9IDA7XHJcbiAgbGV0IGJhcldpZHRoID0gMDtcclxuXHJcbiAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBsZXQgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgd3JhcHBlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gIHdyYXBwZXIuc3R5bGUuYm90dG9tID0gJzAnO1xyXG4gIHdyYXBwZXIuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgd3JhcHBlci5zdHlsZS53aWR0aCA9ICcxMDBweCc7XHJcbiAgd3JhcHBlci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcblxyXG4gIGZ1bGxXaWR0aCA9IGNoaWxkLm9mZnNldFdpZHRoO1xyXG4gIHdyYXBwZXIuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgYmFyV2lkdGggPSBmdWxsV2lkdGggLSBjaGlsZC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gYmFyV2lkdGg7XHJcbn1cclxuXHJcbmxldCB0aW1lcjtcclxubGV0IHRpbWVvdXQgPSBmYWxzZTtcclxubGV0IGRlbHRhID0gMjAwO1xyXG5mdW5jdGlvbiByZXNpemVFbmQoKSB7XHJcbiAgaWYgKG5ldyBEYXRlKCkgLSB0aW1lciA8IGRlbHRhKSB7XHJcbiAgICBzZXRUaW1lb3V0KHJlc2l6ZUVuZCwgZGVsdGEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lb3V0ID0gZmFsc2U7XHJcbiAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplZW5kJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzc0lmKGVsLCBjb25kLCB0b2dnbGVkQ2xhc3Mpe1xyXG5cdGlmKGNvbmQpe1xyXG5cdFx0ZWwuYWRkQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvRj9C10YIg0Log0Y3Qu9C10LzQtdC90YLRgyDQutC70LDRgdGBLCDQtdGB0LvQuCDRgdGC0YDQsNC90LjRhtCwINC/0YDQvtC60YDRg9GH0LXQvdCwINCx0L7Qu9GM0YjQtSwg0YfQtdC8INC90LAg0YPQutCw0LfQsNC90L3QvtC1INC30L3QsNGH0LXQvdC40LUsIFxyXG4gKiDQuCDRg9Cx0LjRgNCw0LXRgiDQutC70LDRgdGBLCDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC80LXQvdGM0YjQtVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZWwgLSDRjdC70LXQvNC10L3Rgiwg0YEg0LrQvtGC0L7RgNGL0Lwg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0YPQtdC8XHJcbiAqIEBwYXJhbSB7bWl4ZWR9IFtzY3JvbGxWYWx1ZT0wXSAtINC30L3QsNGH0LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4LCDQvdCwINC60L7RgtC+0YDQvtC8INC80LXQvdGP0LXQvCBjc3Mt0LrQu9Cw0YHRgSwg0L7QttC40LTQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUgLSDRh9C40YHQu9C+INC40LvQuCDQutC70Y7Rh9C10LLQvtC1INGB0LvQvtCy0L4gJ3RoaXMnLiDQldGB0LvQuCDQv9C10YDQtdC00LDQvdC+ICd0aGlzJywg0L/QvtC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0L/QvtC70L7QttC10L3QuNC1IGVsLm9mZnNldCgpLnRvcCDQvNC40L3Rg9GBINC/0L7Qu9C+0LLQuNC90LAg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RvZ2dsZWRDbGFzcz1zY3JvbGxlZF0gLSBjc3Mt0LrQu9Cw0YHRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvFxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlRWxlbWVudENsYXNzT25TY3JvbGwoZWwsIHNjcm9sbFZhbHVlID0gMCwgdG9nZ2xlZENsYXNzID0gJ3Njcm9sbGVkJyl7XHJcblx0aWYoZWwubGVuZ3RoID09IDApIHtcclxuXHRcdC8vY29uc29sZS5lcnJvcihcItCd0LXQvtCx0YXQvtC00LjQvNC+INC/0LXRgNC10LTQsNGC0Ywg0L7QsdGK0LXQutGCLCDRgSDQutC+0YLQvtGA0YvQvCDQstGLINGF0L7RgtC40YLQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQvtCy0LDRgtGMXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRpZihzY3JvbGxWYWx1ZSA9PSAndGhpcycpIHtcclxuXHRcdHNjcm9sbFZhbHVlID0gZWwub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgLyAyO1xyXG5cdH1cclxuXHRcclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVmFsdWUpe1xyXG5cdFx0XHRlbC5hZGRDbGFzcyh0b2dnbGVkQ2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFNjcm9sbHBhZChlbHMpIHtcclxuICBpZiAoJCgnLmxheW91dCcpLm91dGVySGVpZ2h0KCkgPiB3aW5kb3cub3V0ZXJIZWlnaHQpIHtcclxuICAgIGVscy5jc3MoeydwYWRkaW5nLXJpZ2h0JzogZ2V0TmF0aXZlU2Nyb2xsYmFyV2lkdGgoKSArICdweCd9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxzLmNzcyh7J3BhZGRpbmctcmlnaHQnOiAnMHB4J30pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlSGFzaCAoKSB7IFxyXG4gIGhpc3RvcnkucHVzaFN0YXRlKFwiXCIsIGRvY3VtZW50LnRpdGxlLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INC00LvRjyDQv9C10YDQtdC60LvRjtGH0LDRgtC10LvQtdC5INC60LvQsNGB0YHQvtCyXHJcbiAqIEBleGFtcGxlXHJcbiAqIEhlbHBlcnMuaW5pdCgpO1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gIFxyXG4gIHRvZ2dsZUVsZW1lbnRDbGFzc09uU2Nyb2xsKCQoJy5oZWFkZXInKSwgNTApO1xyXG4gIFxyXG4gICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdGltZXIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgaWYgKHRpbWVvdXQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRpbWVvdXQgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KHJlc2l6ZUVuZCwgZGVsdGEpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKHdpbmRvdykuc2Nyb2xsKCQuZGVib3VuY2UoMjUwLCB0cnVlLCBmdW5jdGlvbigpIHtcclxuICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnaXMtc2Nyb2xsaW5nJyk7XHJcbiAgfSkpO1xyXG4gICQod2luZG93KS5zY3JvbGwoJC5kZWJvdW5jZSgyNTAsIGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdpcy1zY3JvbGxpbmcnKTtcclxuICB9KSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGluaXQsXHJcbiAgZ2V0TmF0aXZlU2Nyb2xsYmFyV2lkdGgsXHJcbiAgdG9nZ2xlQ2xhc3NJZixcclxuICB0b2dnbGVFbGVtZW50Q2xhc3NPblNjcm9sbCxcclxuICBhZGRTY3JpcHQsXHJcbiAgcmVtb3ZlSGFzaFxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9oZWxwZXJzLmpzIiwiLyoqXHJcbiAqINCa0LDRgNGD0YHQtdC70YxcclxuICogQG1vZHVsZSBDYXJvdXNlbFxyXG4gKiBodHRwczovL2lkYW5nZXJvLnVzL3N3aXBlci9hcGkvXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC60LDRgNGD0YHQtdC70LhcclxuICovXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICAkKCcuc3dpcGVyLXByb2R1Y3RzJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgcHJldiA9ICQodGhpcykuZmluZCgnLnN3aXBlci1idXR0b24tcHJldicpO1xyXG4gICAgbGV0IG5leHQgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItYnV0dG9uLW5leHQnKTtcclxuXHJcbiAgICB2YXIgcHJvZHVjdHNTd2lwZXIgPSBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IG5leHQsXHJcbiAgICAgICAgcHJldkVsOiBwcmV2LFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDMzXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICBzcGFjZUJldHdlZW46IDI0XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLnN3aXBlci1jYXRlZ29yaWVzJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgcHJldiA9ICQodGhpcykuZmluZCgnLnN3aXBlci1idXR0b24tcHJldicpO1xyXG4gICAgbGV0IG5leHQgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItYnV0dG9uLW5leHQnKTtcclxuXHJcbiAgICB2YXIgY2F0ZWdvcmllc1N3aXBlciA9IG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogbmV4dCxcclxuICAgICAgICBwcmV2RWw6IHByZXYsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zd2lwZXItYmFuZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9ICQodGhpcykuZmluZCgnLnN3aXBlci1jb250YWluZXInKTtcclxuICAgIGxldCBwcmV2ID0gJCh0aGlzKS5maW5kKCcuc3dpcGVyLWJ1dHRvbi1wcmV2Jyk7XHJcbiAgICBsZXQgbmV4dCA9ICQodGhpcykuZmluZCgnLnN3aXBlci1idXR0b24tbmV4dCcpO1xyXG5cclxuICAgIHZhciBjYXRlZ29yaWVzU3dpcGVyID0gbmV3IFN3aXBlcihjb250YWluZXIsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBuZXh0LFxyXG4gICAgICAgIHByZXZFbDogcHJldixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zd2lwZXIta2l0JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIGxldCBjb250YWluZXIgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgICBsZXQgcHJldiA9ICQodGhpcykuZmluZCgnLnN3aXBlci1idXR0b24tcHJldicpO1xyXG4gICAgbGV0IG5leHQgPSAkKHRoaXMpLmZpbmQoJy5zd2lwZXItYnV0dG9uLW5leHQnKTtcclxuXHJcbiAgICB2YXIga2l0U3dpcGVyID0gbmV3IFN3aXBlcihjb250YWluZXIsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBuZXh0LFxyXG4gICAgICAgIHByZXZFbDogcHJldixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjRcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuc3dpcGVyLWxvb2tib29rLWtpdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gJCh0aGlzKS5maW5kKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHZhciBraXRTd2lwZXIgPSBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuc3dpcGVyLWRldGFpbCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgYmlnQ29udGFpbmVyID0gJCh0aGlzKS5maW5kKCcuc3dpcGVyLWRldGFpbC1iaWcnKS5maW5kKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IHRodW1ic0NvbnRhaW5lciA9ICQodGhpcykuZmluZCgnLnN3aXBlci1kZXRhaWwtdGh1bWJzJykuZmluZCgnLnN3aXBlci1jb250YWluZXInKTtcclxuICAgIGxldCBwYWdpbmF0aW9uID0gJCh0aGlzKS5maW5kKCcuc3dpcGVyLXBhZ2luYXRpb24nKTtcclxuXHJcbiAgICB2YXIgZGV0YWlsVGh1bWJzU3dpcGVyID0gbmV3IFN3aXBlcih0aHVtYnNDb250YWluZXIsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMyxcclxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgICBsYXp5OiB0cnVlLFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmFyIGRldGFpbEJpZ1N3aXBlciA9IG5ldyBTd2lwZXIoYmlnQ29udGFpbmVyLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMCxcclxuICAgICAgc2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcbiAgICAgIGVmZmVjdDogJ2ZhZGUnLFxyXG4gICAgICBmYWRlRWZmZWN0OiB7XHJcbiAgICAgICAgY3Jvc3NGYWRlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG4gICAgICBsYXp5OiB0cnVlLFxyXG4gICAgICB0aHVtYnM6IHtcclxuICAgICAgICBzd2lwZXI6IGRldGFpbFRodW1ic1N3aXBlclxyXG4gICAgICB9LFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IHBhZ2luYXRpb25cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCIvKipcclxuICog0JzQvtC00YPQu9GMINC00LvRjyDRgNCw0LHQvtGC0YsgcGxhY2Vob2xkZXIg0LIg0Y3Qu9C10LzQtdC90YLQsNGFINGE0L7RgNC80YsgKC5maWVsZClcclxuICogQG1vZHVsZSBJbnB1dFxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICog0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0YTQvtC60YPRgVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIGZvY3VzTGFiZWwoaW5wdXQpe1xyXG4gICAgaW5wdXQuY2xvc2VzdCgnLmZpZWxkJykuYWRkQ2xhc3MoXCJoYXMtZm9jdXNcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQo9Cx0YDQsNGC0Ywg0YTQvtC60YPRgVxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIGJsdXJMYWJlbChpbnB1dCl7XHJcbiAgICB2YXIgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJy5maWVsZCcpO1xyXG4gICAgd3JhcHBlci5yZW1vdmVDbGFzcyhcImhhcy1mb2N1c1wiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINCf0YDQvtCy0LXRgNC40YLRjCDQuNC90L/Rg9GCINC90LAg0L3QsNC70LjRh9C40LUgdmFsdWVcclxuICogQHByaXZhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja0lucHV0KGlucHV0KXtcclxuICAgIHZhciB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnLmZpZWxkJyk7XHJcbiAgICBpZiAoaW5wdXQudmFsKCkubGVuZ3RoID4gMClcclxuICAgICAgICB3cmFwcGVyLmFkZENsYXNzKFwiaGFzLXZhbHVlXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2xhc3MoXCJoYXMtdmFsdWVcIik7XHJcbn1cclxuXHJcbi8vIHBvcHVwIGZpZWxkXHJcbmZ1bmN0aW9uIG9wZW5QZihwZikge1xyXG4gICAgaWYgKHBmKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHBmLmZpbmQoJy5wZi13aW4nKTtcclxuICAgICAgICBwZi5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgIHdpbi5mYWRlSW4oMTAwKTtcclxuICAgICAgICBwZi50cmlnZ2VyKCdvcGVuZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGYgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbG9zZVBmKHBmKSB7XHJcbiAgICBpZiAocGYpIHtcclxuICAgICAgICBsZXQgd2luID0gcGYuZmluZCgnLnBmLXdpbicpO1xyXG4gICAgICAgIHBmLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgd2luLmZhZGVPdXQoMTAwKTtcclxuICAgICAgICBwZi50cmlnZ2VyKCdjbG9zZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGYgaXMgcmVxdWlyZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INC00LvRjyDQuNC90L/Rg9GC0LBcclxuICogQGV4YW1wbGVcclxuICogSW5wdXQuaW5pdCgpO1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgIC8vIHRleHQtaW5wdXRzXHJcbiAgICBsZXQgaW5wdXRzID0gJCgnLmZpZWxkX19pbnB1dFt0eXBlPVwidGV4dFwiXSwgLmZpZWxkX19pbnB1dFt0eXBlPVwiZW1haWxcIl0sIC5maWVsZF9faW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCAuZmllbGRfX2lucHV0W3R5cGU9XCJ0ZWxcIl0sIC5maWVsZF9faW5wdXRbdHlwZT1cInNlYXJjaFwiXScpO1xyXG4gICAgbGV0IHBsYWNlaG9sZGVycyA9ICQoJy5maWVsZF9fcGxhY2Vob2xkZXInKTtcclxuICAgIFxyXG4gICAgcGxhY2Vob2xkZXJzLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLmZpZWxkJykuZmluZCgnLmZpZWxkX19pbnB1dCcpLmZvY3VzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dHMuZWFjaChmdW5jdGlvbihpLCBpdGVtKSB7XHJcbiAgICAgICAgY2hlY2tJbnB1dCgkKGl0ZW0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0cy5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvY3VzTGFiZWwoJCh0aGlzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dHMuYmx1cihmdW5jdGlvbigpe1xyXG4gICAgICAgIGJsdXJMYWJlbCgkKHRoaXMpKTtcclxuICAgICAgICBjaGVja0lucHV0KCQodGhpcykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnaW5wdXRbdHlwZT1cInRlbFwiXScpLmlucHV0bWFzayhcIis3KDk5OSkgOTk5IDk5OTlcIik7XHJcbiAgICAkKCdpbnB1dFt0eXBlPVwidGVsXCJdJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKCcuYnRuLXNlYXJjaCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCcjc2VhcmNoJykuZm9jdXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZsb3cgdGV4dGFyZWFcclxuICAgIGxldCBmbG93ID0gJCgnLmZsb3ctdGV4dGFyZWEnKTtcclxuICAgIGZsb3cub24oJ2tleWRvd24nLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykuY2hhbmdlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmbG93Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oc2VsZil7XHJcbiAgICAgICAgICAgIGxldCBmbG93RXggPSAkKHNlbGYpLnNpYmxpbmdzKCcuZmxvdy10ZXh0YXJlYS1leGFtcGxlJyk7XHJcbiAgICAgICAgICAgIGZsb3dFeC5odG1sKCQoc2VsZikudmFsKCkucmVwbGFjZSgvXFxyP1xcbi9nLCc8YnIvPicpKTtcclxuICAgICAgICAgICAgaWYgKGZsb3cub3V0ZXJIZWlnaHQoKSAhPT0gZmxvd0V4Lm91dGVySGVpZ2h0KCkpIHtcclxuICAgICAgICAgICAgICAgIGZsb3cuc3RvcCgpLmFuaW1hdGUoeydoZWlnaHQnOiBmbG93RXgub3V0ZXJIZWlnaHQoKX0sIDMwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMCwgdGhpcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjaGVja2JveGVzLCByYWRpb3NcclxuICAgIGxldCByYWRpb3MgPSAkKCcuZmllbGRfX2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgbGV0IGNoZWNrYm94ZXMgPSAkKCcuZmllbGRfX2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cclxuICAgIHJhZGlvcy5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmllbGQnKS5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xyXG4gICAgICAgICQoYFtuYW1lPVwiJHskKHRoaXMpLmF0dHIoJ25hbWUnKX1cIl06bm90KCMkeyQodGhpcykuYXR0cignaWQnKX0pYCkuY2xvc2VzdCgnLmZpZWxkJykucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcclxuICAgIH0pXHJcbiAgICBjaGVja2JveGVzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmllbGQnKS5hZGRDbGFzcygnaXMtY2hlY2tlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZpZWxkJykucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGlucHV0IGZpbGVcclxuICAgICQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWwgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWVsZCcpLmZpbmQoJy5zZWxlY3RlZCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5maWVsZCcpLmFkZENsYXNzKCdoYXMtdmFsdWUnKTtcclxuICAgICAgICAgICAgc2VsLnRleHQodGhpcy5maWxlc1swXS5uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWwudGV4dCgnJyk7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZpZWxkJykucmVtb3ZlQ2xhc3MoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlucHV0IHJhbmdlXHJcbiAgICAkKCcuanMtcmFuZ2VzbGlkZXInKS5pb25SYW5nZVNsaWRlcih7XHJcbiAgICAgICAgdHlwZTogJ2RvdWJsZScsXHJcbiAgICAgICAgc2tpbjogJ2VtaScsXHJcbiAgICAgICAgaGlkZV9taW5fbWF4OiB0cnVlLFxyXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zdGZpeCA9IGRhdGEuaW5wdXQuZGF0YSgncG9zdGZpeCcpO1xyXG4gICAgICAgICAgICBsZXQgcHJldHR5X3ZhbCA9IGDQvtGCICR7ZGF0YS5mcm9tX3ByZXR0eStwb3N0Zml4fSDQtNC+ICR7ZGF0YS50b19wcmV0dHkrcG9zdGZpeH1gXHJcbiAgICAgICAgICAgIGRhdGEuaW5wdXQuYXR0cignZGF0YS1wcmV0dHktdmFsJywgcHJldHR5X3ZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW5wdXQgaW5jcmVtZW50XHJcbiAgICAkKCcuZmllbGQtLWluY3JlbWVudCAuYnRuLW1pbnVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlucCA9ICQodGhpcykuY2xvc2VzdCgnLmZpZWxkLS1pbmNyZW1lbnQnKS5maW5kKCdpbnB1dFt0eXBlPVwibnVtXCJdJylbMF07XHJcbiAgICAgICAgbGV0ICRpbnAgPSAkKGlucCk7XHJcbiAgICAgICAgbGV0IHZhbCA9ICRpbnAudmFsKCk7XHJcbiAgICAgICAgbGV0IG1pbiA9IGlucC5taW4ubGVuZ3RoID8gcGFyc2VJbnQoaW5wLm1pbikgOiBmYWxzZTtcclxuICAgICAgICBpZiAoKG1pbiB8fCBtaW4gPT09IDApKSB7XHJcbiAgICAgICAgICAgICRpbnAudmFsKCgtLXZhbCA+IG1pbikgPyB2YWwtLSA6IG1pbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGlucC52YWwodmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJGlucC5jaGFuZ2UoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLmZpZWxkLS1pbmNyZW1lbnQgLmJ0bi1wbHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IGlucCA9ICQodGhpcykuY2xvc2VzdCgnLmZpZWxkLS1pbmNyZW1lbnQnKS5maW5kKCdpbnB1dFt0eXBlPVwibnVtXCJdJylbMF07XHJcbiAgICAgICAgbGV0ICRpbnAgPSAkKGlucCk7XHJcbiAgICAgICAgbGV0IHZhbCA9ICRpbnAudmFsKCk7XHJcbiAgICAgICAgbGV0IG1heCA9IGlucC5tYXgubGVuZ3RoID8gcGFyc2VJbnQoaW5wLm1heCkgOiBmYWxzZTtcclxuICAgICAgICBpZiAobWF4KSB7XHJcbiAgICAgICAgICAgICRpbnAudmFsKCgrK3ZhbCA8PSBtYXgpID8gdmFsIDogbWF4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkaW5wLnZhbCgrK3ZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRpbnAuY2hhbmdlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBwb3B1cCBmaWVsZFxyXG4gICAgJCgnLnBmLWN0cmwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgbGV0IHBmID0gJCh0aGlzKS5jbG9zZXN0KCcucG9wdXAtZmllbGQnKTtcclxuICAgICAgICBpZiAocGYuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICBjbG9zZVBmKHBmKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcGVuUGYocGYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLnBvcHVwLWZpZWxkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5wb3B1cC1maWVsZCcpLm9uKCdjbGljay1vdXRzaWRlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2xvc2VQZigkKHRoaXMpKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnBvcHVwLWZpZWxkJykub24oJ2Nsb3NlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB2YWwgPSAkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCk7XHJcbiAgICAgICAgbGV0IHJlcyA9ICQodGhpcykuZmluZCgnLnBmLXJlcycpO1xyXG4gICAgICAgIHJlcy50ZXh0KHZhbCk7XHJcbiAgICB9KVxyXG4gICAgJCgnLmxheW91dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnBvcHVwLWZpZWxkLm9wZW4nKS50cmlnZ2VyKCdjbGljay1vdXRzaWRlJyk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIi8qKlxyXG4gKiDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0L/QviDRgNCw0LfQu9C40YfQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvFxyXG4gKiBAbW9kdWxlIFBvcHVwc1xyXG4gKi9cclxuXHJcbi8qIFBvcHVwcyAqL1xyXG5mdW5jdGlvbiBvcGVuUG9wdXAocG9wdXBJRCkge1xyXG4gIGlmIChwb3B1cElEKSB7XHJcbiAgICBsZXQgcG9wdXAgPSAkKHBvcHVwSUQpO1xyXG4gICAgbGV0IHdpbiA9IHBvcHVwLmZpbmQoJy5wb3B1cF9fd2luZG93Jyk7XHJcbiAgICBwb3B1cC5mYWRlSW4oNTAwKTtcclxuICAgIGlmIChNYWluLkRldmljZURldGVjdGlvbi5pc1BvcnRyYWl0KCkpIHtcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ3BvcHVwLW9wZW5lZCcpO1xyXG4gICAgd2luLmZhZGVJbig1MDApO1xyXG4gICAgcG9wdXAudHJpZ2dlcigncG9wdXBvcGVuZWQnKTtcclxuICAgICQod2luZG93KS50cmlnZ2VyKCdwb3B1cG9wZW5lZCcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdXaGljaCBwb3B1cD8nKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXBJRCkge1xyXG4gIGlmIChwb3B1cElEKSB7XHJcbiAgICBsZXQgcG9wdXAgPSAkKHBvcHVwSUQpO1xyXG4gICAgbGV0IHdpbiA9IHBvcHVwLmZpbmQoJy5wb3B1cF9fd2luZG93Jyk7XHJcbiAgICB3aW4uZmFkZU91dCg1MDApO1xyXG4gICAgcG9wdXAuZmFkZU91dCg1MDApO1xyXG4gICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdwb3B1cC1vcGVuZWQnKTtcclxuICAgIGlmIChNYWluLkRldmljZURldGVjdGlvbi5pc1BvcnRyYWl0KCkpIHtcclxuICAgICAgJCgnaHRtbCwgYm9keScpLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xyXG4gICAgfVxyXG4gICAgcG9wdXAudHJpZ2dlcigncG9wdXBjbG9zZWQnKVxyXG4gICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3BvcHVwY2xvc2VkJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1doaWNoIHBvcHVwPycpO1xyXG4gIH1cclxuICBNYWluLkhlbHBlcnMucmVtb3ZlSGFzaCgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgXHJcbiAgJCgnLmJ0bi1jbG9zZS1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcG9wdXAgPSAhISQodGhpcykuZGF0YSgndGFyZ2V0JykgPyAkKCQodGhpcykuZGF0YSgndGFyZ2V0JykpIDogJCh0aGlzKS5jbG9zZXN0KCcucG9wdXAnKS5hdHRyKCdpZCcpO1xyXG4gICAgY2xvc2VQb3B1cChgIyR7cG9wdXB9YCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCd1bmNsb3NlZCcpKSB7XHJcbiAgICAgIGNsb3NlUG9wdXAoYCMkeyQodGhpcykuYXR0cignaWQnKX1gKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnBvcHVwX193aW5kb3csIC5wb3B1cCAubUNTQl9zY3JvbGxUb29scycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5idG4tcG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSA9PT0gJ3NlbGYnID8gJCh0aGlzKS5wYXJlbnQoKSA6ICQoJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBvcGVuUG9wdXAodGFyZ2V0KTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGluaXQsXHJcbiAgb3BlblBvcHVwLFxyXG4gIGNsb3NlUG9wdXBcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcG9wdXBzLmpzIiwiLyoqXG4gKiBUYWJzXG4gKiBAbW9kdWxlIFRhYnNcbiAqL1xuXG5mdW5jdGlvbiBzZXQoYWN0aXZlKSB7XG4gIGlmIChhY3RpdmUpIHtcbiAgICBsZXQgdGFicyA9IGFjdGl2ZS5jbG9zZXN0KCcudGFicycpO1xuICAgIGxldCB0YWIgPSBhY3RpdmUuZGF0YSgndGFiJyk7XG4gICAgdGFicy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIHRhYnMuZmluZChgLnRhYi1jdHJsW2RhdGEtdGFiPVwiJHt0YWJ9XCJdLCAudGFiX19zZWN0aW9uW2RhdGEtdGFiPVwiJHt0YWJ9XCJdYCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1doaWNoIHRhYj8nKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgJCgnLnRhYnMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGxldCBhY3RpdmUgPSAkKHRoaXMpLmZpbmQoJy50YWItY3RybC5hY3RpdmUnKS5sZW5ndGggPyAkKHRoaXMpLmZpbmQoJy50YWItY3RybC5hY3RpdmUnKSA6ICQodGhpcykuZmluZCgnLnRhYi1jdHJsJykuZXEoMCk7XG4gICAgc2V0KGFjdGl2ZSk7XG4gIH0pO1xuXG4gICQoJy50YWJzIC50YWItY3RybCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgaWYoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXtcbiAgICAgIHNldCgkKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdCxcbiAgc2V0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL3RhYnMuanMiLCIvKipcbiAqINCe0YHQvdC+0LLQvdCw0Y8g0L3QsNCy0LjQs9Cw0YbQuNGPXG4gKiBAbW9kdWxlIE1haW5NZW51XG4gKi9cblxuZnVuY3Rpb24gb3Blbih0YXJnZXQpIHtcbiAgaWYgKCQoJy5kZWVwZXInKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAkKCcuZGVlcGVyX19uYXYuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGFyZ2V0KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnLmRlZXBlcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKHRhcmdldCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG4gICQoJy5sYXlvdXQnKS5hZGRDbGFzcygnbWVudS1vcGVuZWQnKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZWVwZXIoKSB7XG4gICQoJy5kZWVwZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQoJy5kZWVwZXJfX25hdi5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKCkge1xuICBjbG9zZURlZXBlcigpO1xuICAkKCcubWFpbi1uYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICQoJy5sYXlvdXQnKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuZWQnKTtcbiAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICAkKCdodG1sLCBib2R5JykuY3NzKHsnb3ZlcmZsb3cteSc6ICcnfSk7XG4gIH1cbn1cblxuLyoqXG4gKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xuICovXG5mdW5jdGlvbiBpbml0KCl7XG4gICQoJy5tYWluLW5hdiAubXVsdGlsZXZlbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgIG9wZW4odGFyZ2V0KTtcbiAgfSk7XG4gICQoJy5tYWluLW5hdicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5sYXlvdXQubWVudS1vcGVuZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZSgpO1xuICB9KTtcbiAgJCgnLmpzLW1lbnUtLWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoJy5tYWluLW5hdicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcubGF5b3V0JykuYWRkQ2xhc3MoJ21lbnUtb3BlbmVkJyk7XG4gICAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5jc3MoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KTtcbiAgICB9XG4gIH0pO1xuICAkKCcuanMtbWVudS0tYmFjaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VEZWVwZXIoKTtcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXQsXG4gIGNsb3NlLFxuICBjbG9zZURlZXBlclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9tYWluLW1lbnUuanMiLCIvKipcbiAqIEFzaWRlXG4gKiBAbW9kdWxlIEFzaWRlXG4gKi9cblxuZnVuY3Rpb24gb3BlbihzZWxlY3Rvcikge1xuICBpZiAoc2VsZWN0b3IpIHtcbiAgICBsZXQgdGFyZ2V0ID0gc2VsZWN0b3I7XG4gICAgJCgnaHRtbCwgYm9keScpLmNzcyh7J292ZXJmbG93LXknOiAnaGlkZGVuJ30pO1xuICAgICQoJy5sYXlvdXQnKS5hZGRDbGFzcygnYXNpZGUtb3BlbmVkJyk7XG4gICAgJCh0YXJnZXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdTZWxlY3RvciBpcyByZXF1aXJlZCcpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjbG9zZShzZWxlY3Rvcikge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0b3IgfHwgJy5hc2lkZS5hY3RpdmUnO1xuICAkKCdodG1sLCBib2R5JykuY3NzKHsnb3ZlcmZsb3cteSc6ICcnfSk7XG4gICQoJy5sYXlvdXQnKS5yZW1vdmVDbGFzcygnYXNpZGUtb3BlbmVkJyk7XG4gICQodGFyZ2V0KS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICQoJy5idG4tYXNpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgIG9wZW4odGFyZ2V0KTtcbiAgfSk7XG4gICQoJy5hc2lkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5sYXlvdXQuYXNpZGUtb3BlbmVkJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FzaWRlLmpzIiwiLyoqXG4gKiDQmtC+0YDQt9C40L3QsCDQsiDRiNCw0L/QutC1XG4gKiBAbW9kdWxlIEJhc2tldFxuICovXG5cbmZ1bmN0aW9uIG9wZW4oc2VsZWN0b3IpIHtcbiAgaWYgKHNlbGVjdG9yKSB7XG4gICAgJChzZWxlY3RvcikuYWRkQ2xhc3MoJ2FjdGl2ZScpLmZhZGVJbig1MDApO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1NlbGVjdG9yIGlzIHJlcXVpcmVkJylcbiAgfVxufTtcbmZ1bmN0aW9uIGNsb3NlKHNlbGVjdG9yKSB7XG4gIGxldCB0YXJnZXQgPSBzZWxlY3RvciB8fCAnLmJhc2tldC1wb3B1cC5hY3RpdmUnO1xuICAkKHRhcmdldCkuZmFkZU91dCgzMDApLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbn1cblxuLyoqXG4gKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xuICovXG5mdW5jdGlvbiBpbml0KCl7XG4gICQoJy5idG4tYmFza2V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICgkKHRoaXMpLmNsb3Nlc3QoJy5iYXNrZXQnKS5oYXNDbGFzcygnYmFza2V0LS1ub3QtZW1wdHknKSkge1xuICAgICAgb3BlbignI2Jhc2tldC1wb3B1cCcpO1xuICAgICAgJCgnLmJhc2tldCcpLnJlbW92ZUNsYXNzKCdiYXNrZXQtLWFkZGVkJyk7XG4gICAgfVxuICB9KTtcbiAgJCgnLmJ0bi1iYXNrZXQtY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyByZW1vdmUgcHJvZHVjdHMuLi5cbiAgICBjbG9zZSgnI2Jhc2tldC1wb3B1cCcpO1xuICB9KVxuICAkKCcuYmFza2V0LXBvcHVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjbG9zZSgpO1xuICB9KTtcblxuICAkKCcuYnRuLWFkZC10by1iYXNrZXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb3BlbignI2Jhc2tldC1ub3RpZmljYXRpb24nKTtcbiAgICAkKCcuYmFza2V0JykuYWRkQ2xhc3MoJ2Jhc2tldC0tYWRkZWQnKTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjbG9zZSgnI2Jhc2tldC1ub3RpZmljYXRpb24nKTtcbiAgICB9LCA1MDAwKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0LFxuICBvcGVuLFxuICBjbG9zZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9iYXNrZXQuanMiLCIvKipcbiAqINCe0YTQvtGA0LzQu9C10L3QuNC1INC30LDQutCw0LfQsFxuICogQG1vZHVsZSBPcmRlclxuICovXG5cbmZ1bmN0aW9uIHN0ZXBEb25lKHN0ZXApIHtcbiAgbGV0IGZpbGxpbmcgPSBzdGVwLmZpbmQoJy5zZWN0aW9uLWZpbGxpbmcnKTtcbiAgbGV0IHJlc3VsdCA9IHN0ZXAuZmluZCgnLnNlY3Rpb24tcmVzdWx0Jyk7XG4gIGZpbGxpbmcuc2xpZGVVcCg1MDApO1xuICByZXN1bHQuc2xpZGVEb3duKDUwMCk7XG4gIHN0ZXAuYWRkQ2xhc3MoJ2RvbmUnKTtcbiAgbGV0IHN0ZXBOZXh0ID0gc3RlcC5uZXh0KCcub3JkZXItc3RlcCcpO1xuICBpZiAoc3RlcE5leHQuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICBzdGVwQWN0aXZlKHN0ZXBOZXh0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGVwQWN0aXZlKHN0ZXApIHtcbiAgbGV0IGZpbGxpbmcgPSBzdGVwLmZpbmQoJy5zZWN0aW9uLWZpbGxpbmcnKTtcbiAgZmlsbGluZy5zbGlkZURvd24oNTAwKTtcbiAgc3RlcC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbn1cblxuZnVuY3Rpb24gc3RlcENoYW5nZShzdGVwKSB7XG4gIGxldCBmaWxsaW5nID0gc3RlcC5maW5kKCcuc2VjdGlvbi1maWxsaW5nJyk7XG4gIGxldCByZXN1bHQgPSBzdGVwLmZpbmQoJy5zZWN0aW9uLXJlc3VsdCcpO1xuICByZXN1bHQuc2xpZGVVcCg1MDApO1xuICBmaWxsaW5nLnNsaWRlRG93big1MDApO1xufVxuXG5mdW5jdGlvbiBzdGVwRmlsbChzdGVwKSB7XG4gIGxldCBmaWxsaW5nRm9ybSA9IHN0ZXAuZmluZCgnLnNlY3Rpb24tZmlsbGluZyBmb3JtJylbMF07XG4gIGxldCByZXN1bHQgPSBzdGVwLmZpbmQoJy5zZWN0aW9uLXJlc3VsdCcpO1xuICAkKGZpbGxpbmdGb3JtLmVsZW1lbnRzKS5lYWNoKGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICBpZiAoJChpdGVtKS52YWwoKSAmJiByZXN1bHQuZmluZChgLiR7aXRlbS5uYW1lfWApLmxlbmd0aCl7XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnIHx8IGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgcmVzdWx0LmZpbmQoYC4ke2l0ZW0ubmFtZX1gKS50ZXh0KCQoaXRlbSkudmFsKCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQuZmluZChgLiR7aXRlbS5uYW1lfWApLnRleHQoJChpdGVtKS52YWwoKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgJChzdGVwKS50cmlnZ2VyKCdmaWxsZWQnKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgJCgnLmJ0bi1vcmRlci1zdGVwLXNhdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHZhbGlkYXRpb24gaGVyZS4uLlxuICAgIGxldCBzdGVwID0gJCh0aGlzKS5jbG9zZXN0KCcub3JkZXItc3RlcCcpO1xuICAgIHN0ZXBGaWxsKHN0ZXApO1xuICB9KTtcblxuICAkKCcuYnRuLW9yZGVyLXN0ZXAtY2hhbmdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3RlcCA9ICQodGhpcykuY2xvc2VzdCgnLm9yZGVyLXN0ZXAnKTtcbiAgICBzdGVwQ2hhbmdlKHN0ZXApO1xuICB9KVxuXG4gICQoJy5vcmRlci1zdGVwJykub24oJ2ZpbGxlZCcsIGZ1bmN0aW9uKCkge1xuICAgIHN0ZXBEb25lKCQodGhpcykpO1xuICB9KTtcblxuICAkKCcuZGVsaXZlcnktY3RybCBpbnB1dCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgY3RybCA9ICQodGhpcykuY2xvc2VzdCgnLmRlbGl2ZXJ5LXZhcmlhbnQnKTtcbiAgICBsZXQgY29udGVudCA9IGN0cmwuZmluZCgnLmRlbGl2ZXJ5LWNvbnRlbnQnKTtcbiAgICBjb250ZW50LnNsaWRlRG93big1MDApO1xuICAgIGN0cmwuc2libGluZ3MoKS5maW5kKCcuZGVsaXZlcnktY29udGVudCcpLnNsaWRlVXAoNTAwKTtcbiAgICAkKCcuZGVsaXZlcnktYnRuJykuc2xpZGVEb3duKDMwMCk7XG4gIH0pO1xuICAkKCcucGF5bWVudC1jdHJsIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5vcmRlci1idG4nKS5zbGlkZURvd24oMzAwKTtcbiAgfSk7XG5cbiAgJCgnLmRlbGl2ZXJ5LXNob3AnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZGVsaXZlcnktc2hvcCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpLmZpbmQoJy5kZXRhaWxzJykuc2xpZGVVcCg1MDApO1xuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgJCh0aGlzKS5maW5kKCcuZGV0YWlscycpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gIH0pO1xuXG4gICQoJy5kZWxpdmVyeS1sb2NhdGlvbi1zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9ICQodGhpcykuY2xvc2VzdCgnLmRlbGl2ZXJ5LXNob3BzJyk7XG4gICAgLy8gbGV0IG1hcENvbnRhaW5lciA9IGNvbnRhaW5lci5maW5kKCcuZGVsaXZlcnktbWFwJyk7XG4gICAgLy8gem9vbSB0byBjaXR5IGhlcmUuLi5cbiAgICAvLyAuLi4gb3Igbm90IGhlcmVcbiAgICBsZXQgbGlzdCA9IGNvbnRhaW5lci5maW5kKCcuZGVsaXZlcnktc2hvcCcpO1xuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XG4gICAgICBsZXQgdmFsID0gJCh0aGlzKS52YWwoKTtcbiAgICAgIGxpc3QuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQodGhpcykuZGF0YSgnbG9jYXRpb24nKSA9PT0gdmFsKSB7XG4gICAgICAgICAgJCh0aGlzKS5zbGlkZURvd24oNTAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoNTAwKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvb3JkZXIuanMiLCIvKipcbiAqINCf0L7QtNC60LvRjtGH0LXQvdC40LUgU2VsZWN0c1xuICogQG1vZHVsZSBTZWxlY3RzXG4gKiBodHRwczovL3NlbGVjdDIub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9ucy1hcGlcbiAqL1xuXG5mdW5jdGlvbiBhZGRJY29uIChzdGF0ZSkge1xuICBpZiAoISQoc3RhdGUuZWxlbWVudCkuZGF0YSgnaWNvbicpKSB7XG4gICAgcmV0dXJuIHN0YXRlLnRleHQ7XG4gIH1cblxuICB2YXIgJHN0YXRlID0gJChcbiAgICBgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMkeyQoc3RhdGUuZWxlbWVudCkuZGF0YSgnaWNvbicpfVwiIC8+PC9zdmc+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj4ke3N0YXRlLnRleHR9PC9zcGFuPlxuICAgIDwvZGl2PmBcbiAgKTtcbiAgcmV0dXJuICRzdGF0ZTtcbn1cblxuZnVuY3Rpb24gY2xpcFZhbHVlIChzdGF0ZSkge1xuICBpZiAoc3RhdGUudGV4dC5pbmNsdWRlcygnKCcpICYmIHN0YXRlLnRleHQuaW5jbHVkZXMoJyknKSkge1xuICAgIHJldHVybiBzdGF0ZS50ZXh0LnNsaWNlKDAsIHN0YXRlLnRleHQuaW5kZXhPZignKCcpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RhdGUudGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gICQoJy5qcy1zZWxlY3QnKS5zZWxlY3QyKHtcbiAgICB3aWR0aDogJ3N0eWxlJyxcbiAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogLTFcbiAgfSk7XG4gICQoJy5qcy1zZWxlY3QuanMtc2l6ZScpLnNlbGVjdDIoe1xuICAgIHdpZHRoOiAnc3R5bGUnLFxuICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcbiAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogY2xpcFZhbHVlXG4gIH0pO1xuICAkKCcuanMtc29ydCcpLnNlbGVjdDIoe1xuICAgIHdpZHRoOiAnc3R5bGUnLFxuICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiAtMSxcbiAgICB0ZW1wbGF0ZVNlbGVjdGlvbjogYWRkSWNvbixcbiAgICB0ZW1wbGF0ZVJlc3VsdDogYWRkSWNvbixcbiAgICBkcm9wZG93blBhcmVudDogJCgnLmpzLXNvcnQnKS5jbG9zZXN0KCcuZmllbGQnKVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0cy5qcyIsIi8qKlxyXG4gKiDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0L/QviDRgNCw0LfQu9C40YfQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvFxyXG4gKiBAbW9kdWxlIFNjcm9sbGJhclxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGNhbGNIZWlnaHQoZWwpIHtcclxuICBsZXQgcyA9IGVsWzBdLm9mZnNldFRvcCArIGVsWzBdLm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XHJcbiAgcmV0dXJuICQod2luZG93KS5oZWlnaHQoKSAtIHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG5cclxuICAkKFwiLmN1c3RvbS1zY3JvbGxcIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICB0aGVtZTogJ21pbmltYWwnXHJcbiAgfSk7XHJcbiAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzSUUxMSgpKSB7XHJcbiAgICAvLyQoJy5pZS11bmNsZWFyLWhlaWdodCcpLmNzcyh7J2hlaWdodCc6ICc1NzFweCd9KTtcclxuICAgIC8vJCgnLmllLXVuY2xlYXItaGVpZ2h0JykuY3NzKHsnaGVpZ2h0JzogY2FsY0hlaWdodCgkKCcuaWUtdW5jbGVhci1oZWlnaHQnKSkgKyAncHgnfSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsYmFyLmpzIiwiLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDRgdC10LvQtdC60YLQsFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBBY2NvcmRpb24uaW5pdCgpO1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgJCgnLmFjY29yZGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVEb3duKDUwMCk7XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgJCgnLmFjY29yZGlvbl9fcGFuZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KCcuYWNjb3JkaW9uJykuc2libGluZ3MoJy5hY2NvcmRpb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy5hY2NvcmRpb24nKS5zaWJsaW5ncygnLmFjY29yZGlvbicpLmZpbmQoJy5hY2NvcmRpb25fX2NvbnRlbnQnKS5zbGlkZVVwKDUwMCk7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoJy5hY2NvcmRpb24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuYWNjb3JkaW9uX19jb250ZW50Jykuc2xpZGVUb2dnbGUoNTAwKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcclxuICAgICQoJy5hY2NvcmRpb24tbmF2JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHVuaXQgPSAkKHRoaXMpLmZpbmQoJy5jdXJyZW50Jykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgJCh0aGlzKS5jc3MoeydoZWlnaHQnOiBgJHt1bml0fXB4YH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKCcuYWNjb3JkaW9uLW5hdiAuY3VycmVudCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5hY2NvcmRpb24tbmF2IC5jdXJyZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCB1bml0ID0gJCh0aGlzKS5vdXRlckhlaWdodCgpO1xyXG4gICAgICBsZXQgYWNjb3JkaW9uID0gJCh0aGlzKS5jbG9zZXN0KCcuYWNjb3JkaW9uLW5hdicpO1xyXG4gICAgICBsZXQgaCA9IHVuaXQgKiBhY2NvcmRpb24uZmluZCgnLm5hdl9faXRlbScpLmxlbmd0aDtcclxuICAgICAgaWYgKGFjY29yZGlvbi5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgYWNjb3JkaW9uLnJlbW92ZUNsYXNzKCdvcGVuJykuYW5pbWF0ZSh7J2hlaWdodCc6IGAke3VuaXR9cHhgfSwgNTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY2NvcmRpb24uYWRkQ2xhc3MoJ29wZW4nKS5hbmltYXRlKHsnaGVpZ2h0JzogYCR7aH1weGB9LCA1MDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIi8qKlxuICog0J/RgNC+0YTQuNC70Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXG4gKiBAbW9kdWxlIFByb2ZpbGVcbiAqL1xuXG5mdW5jdGlvbiBmaWxsKHNlY3Rpb24pIHtcbiAgbGV0IGZpbGxpbmdGb3JtID0gc2VjdGlvbi5maW5kKCcuc2VjdGlvbi1maWxsaW5nIGZvcm0nKVswXTtcbiAgbGV0IHJlc3VsdCA9IHNlY3Rpb24uZmluZCgnLnNlY3Rpb24tcmVzdWx0Jyk7XG4gICQoZmlsbGluZ0Zvcm0uZWxlbWVudHMpLmVhY2goZnVuY3Rpb24oaSwgaXRlbSkge1xuICAgIGlmICgkKGl0ZW0pLnZhbCgpICYmIHJlc3VsdC5maW5kKGAuJHtpdGVtLm5hbWV9YCkubGVuZ3RoKXtcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcgfHwgaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgICByZXN1bHQuZmluZChgLiR7aXRlbS5uYW1lfWApLnRleHQoJChpdGVtKS52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5maW5kKGAuJHtpdGVtLm5hbWV9YCkudGV4dCgkKGl0ZW0pLnZhbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAkKHNlY3Rpb24pLnRyaWdnZXIoJ2ZpbGxlZCcpO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICAkKCcuYnRuLW9yZGVyLWRldGFpbHMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuY2xvc2VzdCgnLnByb2ZpbGUtb3JkZXInKS5maW5kKCcuZGV0YWlscycpLnNsaWRlVG9nZ2xlKDUwMCk7XG4gIH0pO1xuXG4gICQoJy5idG4tcHJvZmlsZS1pbmZvLWNoYW5nZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHNlY3Rpb24gPSAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9maWxlLWluZm8tc2VjdGlvbicpO1xuICAgIGxldCBmaWxsaW5nID0gc2VjdGlvbi5maW5kKCcuc2VjdGlvbi1maWxsaW5nJyk7XG4gICAgbGV0IHJlc3VsdCA9IHNlY3Rpb24uZmluZCgnLnNlY3Rpb24tcmVzdWx0Jyk7XG4gICAgcmVzdWx0LnNsaWRlVXAoNTAwKTtcbiAgICBmaWxsaW5nLnNsaWRlRG93big1MDApO1xuICB9KTtcbiAgJCgnLmJ0bi1wcm9maWxlLWluZm8tc2F2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHNlY3Rpb24gPSAkKHRoaXMpLmNsb3Nlc3QoJy5wcm9maWxlLWluZm8tc2VjdGlvbicpO1xuICAgIGZpbGwoc2VjdGlvbik7XG4gIH0pO1xuICAkKCcucHJvZmlsZS1pbmZvLXNlY3Rpb24nKS5vbignZmlsbGVkJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZmlsbGluZyA9ICQodGhpcykuZmluZCgnLnNlY3Rpb24tZmlsbGluZycpO1xuICAgIGxldCByZXN1bHQgPSAkKHRoaXMpLmZpbmQoJy5zZWN0aW9uLXJlc3VsdCcpO1xuICAgIGZpbGxpbmcuc2xpZGVVcCg1MDApO1xuICAgIHJlc3VsdC5zbGlkZURvd24oNTAwKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvcHJvZmlsZS5qcyIsIi8qKlxyXG4gKiDQnNC+0LTQsNC70YzQvdGL0LUg0L7QutC90LBcclxuICogQG1vZHVsZSBNb2RhbHNcclxuICovXHJcblxyXG5sZXQgc3RhdGUgPSB7XHJcbiAgY3VycmVudDogbnVsbCxcclxuICBsYXN0OiBudWxsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBvcGVuKG1vZGFsSUQpIHtcclxuICBpZiAobW9kYWxJRCkge1xyXG4gICAgc3RhdGUuY3VycmVudCA9IG1vZGFsSUQ7XHJcbiAgICBsZXQgbW9kYWwgPSAkKG1vZGFsSUQpO1xyXG4gICAgbGV0IHdpbiA9IG1vZGFsLmZpbmQoJy5tb2RhbF9fd2luZG93Jyk7XHJcbiAgICBtb2RhbC5mYWRlSW4oNTAwKTtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCdtb2RhbC1vcGVuZWQnKTtcclxuICAgIHdpbi5mYWRlSW4oNTAwKTtcclxuICAgIG1vZGFsLnRyaWdnZXIoJ21vZGFsb3BlbmVkJyk7XHJcbiAgICAkKHdpbmRvdykudHJpZ2dlcignbW9kYWxvcGVuZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignV2hpY2ggbW9kYWw/Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZShtb2RhbElEKSB7XHJcbiAgaWYgKG1vZGFsSUQpIHtcclxuICAgIGxldCBtb2RhbCA9ICQobW9kYWxJRCk7XHJcbiAgICBsZXQgd2luID0gbW9kYWwuZmluZCgnLm1vZGFsX193aW5kb3cnKTtcclxuICAgIHdpbi5mYWRlT3V0KDUwMCk7XHJcbiAgICBtb2RhbC5mYWRlT3V0KDUwMCk7XHJcbiAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ21vZGFsLW9wZW5lZCcpO1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnJyk7XHJcbiAgICBtb2RhbC50cmlnZ2VyKCdtb2RhbGNsb3NlZCcpXHJcbiAgICAkKHdpbmRvdykudHJpZ2dlcignbW9kYWxjbG9zZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcignV2hpY2ggbW9kYWw/Jyk7XHJcbiAgfVxyXG4gIE1haW4uSGVscGVycy5yZW1vdmVIYXNoKCk7XHJcbiAgc3RhdGUubGFzdCA9IG1vZGFsSUQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmICQod2luZG93LmxvY2F0aW9uLmhhc2gpLmhhc0NsYXNzKCdtb2RhbCcpKSB7XHJcbiAgICBvcGVuKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcclxuICB9XHJcbiAgXHJcbiAgJCgnLmJ0bi1jbG9zZS1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbW9kYWwgPSAhISQodGhpcykuZGF0YSgndGFyZ2V0JykgPyAkKCQodGhpcykuZGF0YSgndGFyZ2V0JykpIDogJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKS5hdHRyKCdpZCcpO1xyXG4gICAgY2xvc2UoYCMke21vZGFsfWApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygndW5jbG9zZWQnKSkge1xyXG4gICAgICBjbG9zZShgIyR7JCh0aGlzKS5hdHRyKCdpZCcpfWApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcubW9kYWxfX3dpbmRvdywgLm1vZGFsIC5tQ1NCX3Njcm9sbFRvb2xzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmJ0bi1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpO1xyXG4gICAgb3Blbih0YXJnZXQpO1xyXG4gIH0pO1xyXG4gICQoJy5idG4tbW9kYWwtYWx0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XHJcbiAgICBsZXQgbW9kYWwgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbCcpLmF0dHIoJ2lkJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHRhcmdldDtcclxuICAgIG9wZW4odGFyZ2V0KTtcclxuICAgIGNsb3NlKGAjJHttb2RhbH1gKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmJ0bi1tb2RhbC1iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICBpZiAoc3RhdGUubGFzdCkge1xyXG4gICAgIG9wZW4oc3RhdGUubGFzdCk7XHJcbiAgIH1cclxuICAgY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKSk7XHJcbiAgIHN0YXRlLmxhc3QgPSBudWxsO1xyXG4gIH0pO1xyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgaW5pdCxcclxuICBvcGVuLFxyXG4gIGNsb3NlXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL21vZGFscy5qcyIsIi8qKlxuICog0KTQuNC70YzRgtGAXG4gKiBAbW9kdWxlIEZpbHRlclxuICovXG5cbmxldCBoID0gMTA1O1xuXG5mdW5jdGlvbiBjYWxjKCkge1xuICBsZXQgdHcgPSAwO1xuICBsZXQgb3V0ID0gZmFsc2U7XG4gICQoJy5maWx0ZXItZmllbGQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGxldCBwdyA9ICQodGhpcykucGFyZW50KCkub3V0ZXJXaWR0aCgpO1xuICAgIGxldCBzdyA9ICQodGhpcykub3V0ZXJXaWR0aCgpICsgMjQ7XG4gICAgaWYgKChwdyA+IHR3ICYmIHB3ID4gdHcgKyBzdykgJiYgISQodGhpcykucHJldigpLmhhc0NsYXNzKCdvdXQnKSkge1xuICAgICAgdHcgKz0gc3c7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvdXQnKTtcbiAgICAgIG91dCA9IGZhbHNlO1xuICAgICAgZXhwYW5kKCQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzKS5pbmRleCgpID09PSAkKCcuZmlsdGVyLWZpZWxkJykubGVuZ3RoIC0gMSkge1xuICAgICAgICBoID0gMTA1ICsgKHRoaXMub2Zmc2V0VG9wIC0gMTIpO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3V0Jyk7XG4gICAgICBvdXQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIGlmICghb3V0KSB7XG4gICAgaCA9IDEwNTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2xsYXBzZSgpIHtcbiAgJCgnLmZpbHRlci1maWVsZC5vdXQnKS5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAzMDApLmNzcyh7J3Zpc2liaWxpdHknOiAnaGlkZGVuJ30pLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgJCgnLmZpbHRlcicpLnN0b3AoKS5hbmltYXRlKHsnaGVpZ2h0JzogJzEwNXB4J30pLnRyaWdnZXIoJ2NvbGxhcHNlZCcpO1xufTtcbmZ1bmN0aW9uIGV4cGFuZChlbCA9IGZhbHNlKSB7XG4gIGlmIChlbCkge1xuICAgIGVsLnN0b3AoKS5jc3Moeyd2aXNpYmlsaXR5JzogJ3Zpc2libGUnfSkuYW5pbWF0ZSh7J29wYWNpdHknOiAxfSwgMTAwKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gIH0gZWxzZSB7XG4gICAgJCgnLmZpbHRlcicpLmZpbmQoJy5maWx0ZXItZmllbGQuY29sbGFwc2VkJykuc3RvcCgpLmNzcyh7J3Zpc2liaWxpdHknOiAndmlzaWJsZSd9KS5hbmltYXRlKHsnb3BhY2l0eSc6IDF9LCAxMDApLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAkKCcuZmlsdGVyJykuc3RvcCgpLmFuaW1hdGUoeydoZWlnaHQnOiBgJHtofXB4YH0pLnRyaWdnZXIoJ2V4cGFuZGVkJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9wZW4oKSB7XG4gICQoJy5sYXlvdXQnKS5hZGRDbGFzcygnZmlsdGVyLW9wZW5lZCcpO1xuICAkKCcuZmlsdGVyJykuZmluZCgnLmZpbHRlci1jb250ZW50JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCdodG1sLCBib2R5JykuY3NzKHsnb3ZlcmZsb3cteSc6ICdoaWRkZW4nfSk7XG59XG5mdW5jdGlvbiBjbG9zZSgpIHtcbiAgJCgnaHRtbCwgYm9keScpLmNzcyh7J292ZXJmbG93LXknOiAnJ30pO1xuICAkKCcuZmlsdGVyJykuZmluZCgnLmZpbHRlci1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKCcubGF5b3V0JykucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1vcGVuZWQnKTtcbn1cblxuZnVuY3Rpb24gY2hlY2soKSB7XG4gIGlmIChNYWluLkRldmljZURldGVjdGlvbi5pc01vYmlsZSgpKSB7XG4gICAgJCgnLmZpbHRlci1jb250ZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmxheW91dC5maWx0ZXItb3BlbmVkJywgZnVuY3Rpb24oKSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNhbGMoKTtcbiAgICBpZiAoJCgnLmZpbHRlcicpLm91dGVySGVpZ2h0KCkgPiAxMDUgfHwgJCgnLmZpbHRlcicpLmZpbmQoJy5maWx0ZXItZmllbGQub3V0JykubGVuZ3RoKSB7XG4gICAgICBjb2xsYXBzZSgpO1xuICAgICAgJCgnLmJ0bi1maWx0ZXItd3JhcHBlcicpLmZhZGVJbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcuYnRuLWZpbHRlci13cmFwcGVyJykuZmFkZU91dCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuRkYoZmYpIHtcbiAgbGV0IHBhbiA9IGZmLmZpbmQoJy5mZi1wYW4nKTtcbiAgbGV0IHdpbiA9IGZmLmZpbmQoJy5mZi13aW4nKTtcbiAgZmYuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICBpZiAoIU1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICB3aW4uY3NzKHsnZGlzcGxheSc6ICdibG9jayd9KTtcbiAgICBpZiAod2luLm9mZnNldCgpLmxlZnQgKyB3aW4ub3V0ZXJXaWR0aCgpID49ICQod2luZG93KS53aWR0aCgpKSB7XG4gICAgICBsZXQgcG9zID0gJCh3aW5kb3cpLndpZHRoKCkgLSB3aW4ub2Zmc2V0KCkubGVmdCAtIHdpbi5vdXRlcldpZHRoKCkgLSAyNDtcbiAgICAgIHdpbi5jc3MoeydtYXJnaW4tbGVmdCc6IGAke3Bvc31weGB9KTtcbiAgICB9XG4gICAgd2luLmFuaW1hdGUoeydvcGFjaXR5JzogMX0sIDUwMCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNsb3NlRkYoZmYpIHtcbiAgbGV0IHBhbiA9IGZmLmZpbmQoJy5mZi1wYW4nKTtcbiAgbGV0IHdpbiA9IGZmLmZpbmQoJy5mZi13aW4nKTtcbiAgZmYucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICBpZiAoIU1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICB3aW4uYW5pbWF0ZSh7J29wYWNpdHknOiAwfSwgMzAwKS5jc3MoeydkaXNwbGF5JzogJ25vbmUnfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGaWVsZHMoZmYpIHtcbiAgbGV0IGZpZWxkcyA9IGZmLmZpbmQoJ2lucHV0Jyk7XG4gIGxldCB2YWxzID0gW107XG4gIGZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgdGhpcy50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICBpZiAoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgdmFscy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzKS5kYXRhKCdwcmV0dHktdmFsJykpIHtcbiAgICAgICAgdmFscyA9ICQodGhpcykuYXR0cignZGF0YS1wcmV0dHktdmFsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAodmFscy5sZW5ndGgpIHtcbiAgICBmaWxsUmVzdWx0KGZmLCB2YWxzKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhclJlc3VsdChmZik7XG4gIH1cbiAgY2xvc2VGRihmZik7XG59XG5mdW5jdGlvbiBjbGVhckZpZWxkcyhmZikge1xuICBsZXQgZmllbGRzID0gZmYuZmluZCgnaW5wdXQnKTtcbiAgZmllbGRzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLnR5cGUgPT09ICdjaGVja2JveCcgfHwgdGhpcy50eXBlID09PSAncmFkaW8nKSAmJiAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtcmFuZ2VzbGlkZXInKSkge1xuICAgICAgICBsZXQgaXJzID0gJCh0aGlzKS5kYXRhKFwiaW9uUmFuZ2VTbGlkZXJcIik7XG4gICAgICAgIGlycy5yZXNldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS52YWwoJycpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGNsZWFyUmVzdWx0KGZmKTtcbiAgY2xvc2VGRihmZik7XG59XG5cbmZ1bmN0aW9uIGZpbGxSZXN1bHQoZmYsIHZhbHMpIHtcbiAgbGV0IHJlc0VsID0gZmYuZmluZCgnLmZmLXJlc3VsdCcpO1xuICBsZXQgcmVzID0gJyc7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHMpKSB7XG4gICAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMgKz0gYDxzcGFuIGNsYXNzPVwicmVzXCI+JHt2YWxzW2ldfTwvc3Bhbj5gO1xuICAgICAgICBpZiAoaSA9PT0gdmFscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmVzICs9ICcgJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyArPSAnLCAnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gdmFscy5sZW5ndGg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcyA9IHZhbHM7XG4gIH1cbiAgcmVzRWwuaHRtbChyZXMpLmZhZGVJbigpO1xuICBmZi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgZmYuY2xvc2VzdCgnLmZpbHRlcicpLnRyaWdnZXIoJ3VwZGF0ZScpO1xufVxuZnVuY3Rpb24gY2xlYXJSZXN1bHQoZmYpIHtcbiAgbGV0IHJlc0VsID0gZmYuZmluZCgnLmZmLXJlc3VsdCcpO1xuICByZXNFbC5odG1sKCcnKS5mYWRlT3V0KCk7XG4gIGZmLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICBmZi5jbG9zZXN0KCcuZmlsdGVyJykudHJpZ2dlcigndXBkYXRlJyk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNoZWNrKCk7XG5cbiAgJCh3aW5kb3cpLm9uKCdyZXNpemVlbmQnLCBmdW5jdGlvbigpIHtcbiAgICBjaGVjaygpO1xuICB9KTtcblxuICAvLyBzaG93L2hpZGUgZmlsdGVyIG9uIG1vYmlsZVxuICAkKCcuYnRuLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoTWFpbi5EZXZpY2VEZXRlY3Rpb24uaXNNb2JpbGUoKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9wZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwYW5kKCk7XG4gICAgfVxuICB9KTtcbiAgJCgnLmJ0bi1maWx0ZXItY29sbGFwc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb2xsYXBzZSgpO1xuICB9KTtcbiAgLy8gY29sbGFwc2UvZXhwYW5kIGZpbHRlciBvbiBiaWcgc2NyZWVuc1xuICAkKCcuZmlsdGVyJykub24oJ2NvbGxhcHNlZCcsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5idG4tZmlsdGVyLWNvbGxhcHNlLXdyYXBwZXInKS5zdG9wKCkuZmFkZU91dCgxMDApO1xuICAgICQoJy5idG4tZmlsdGVyLXdyYXBwZXInKS5zdG9wKCkuZmFkZUluKCk7XG4gIH0pO1xuICAkKCcuZmlsdGVyJykub24oJ2V4cGFuZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJ0bi1maWx0ZXItd3JhcHBlcicpLnN0b3AoKS5mYWRlT3V0KCk7XG4gICAgaWYgKCQodGhpcykuZmluZCgnLmZpbHRlci1maWVsZC5vdXQnKS5sZW5ndGgpIHtcbiAgICAgICQoJy5idG4tZmlsdGVyLWNvbGxhcHNlLXdyYXBwZXInKS5zdG9wKCkuZmFkZUluKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5idG4tZmlsdGVyLWNvbGxhcHNlLXdyYXBwZXInKS5zdG9wKCkuZmFkZU91dCgpO1xuICAgIH1cbiAgfSk7XG4gIC8vIHJlY2FsYyBjb2xsYXBzaW5nIG9uIGJpZyBzY3JlZW5zLCBvdXRwdXQgdG90YWwgb24gbW9iaWxlXG4gICQoJy5maWx0ZXInKS5vbigndXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKE1haW4uRGV2aWNlRGV0ZWN0aW9uLmlzTW9iaWxlKCkpIHtcbiAgICAgIGxldCBmcyA9ICQodGhpcykuZmluZCgnLmZpbHRlci1maWVsZC5zZWxlY3RlZCcpLmxlbmd0aDtcbiAgICAgIGlmIChmcykge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy50b3RhbC1yZXMnKS50ZXh0KGAoJHtmc30pYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy50b3RhbC1yZXMnKS50ZXh0KCcnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2FsYygpO1xuICAgICAgaWYgKCQodGhpcykuZmluZCgnLmZpbHRlci1maWVsZC5vdXQnKS5sZW5ndGgpIHtcbiAgICAgICAgY29sbGFwc2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV4cGFuZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvLyBzaG93L2hpZGUgcG9wdXBzXG4gICQoJy5mZi1wYW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgZmYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXItZmllbGQnKTtcbiAgICBpZiAoZmYuc2libGluZ3MoJy5hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAgIGNsb3NlRkYoZmYuc2libGluZ3MoJy5hY3RpdmUnKSk7XG4gICAgfVxuICAgIG9wZW5GRihmZilcbiAgfSk7XG4gICQoJy5mZi13aW4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG4gICQoJy5mZi1iYWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGZmID0gJCh0aGlzKS5jbG9zZXN0KCcuZmlsdGVyLWZpZWxkJyk7XG4gICAgY2xvc2VGRihmZik7XG4gIH0pXG4gICQoJy5sYXlvdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLmZpbHRlci1maWVsZC5hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAgIGNsb3NlRkYoJCgnLmZpbHRlci1maWVsZC5hY3RpdmUnKSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBmaWx0ZXJpbmdcbiAgJCgnLmJ0bi1maWx0ZXItYXBwbHknKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmZiA9ICQodGhpcykuY2xvc2VzdCgnLmZpbHRlci1maWVsZCcpO1xuICAgIGNoZWNrRmllbGRzKGZmKTtcbiAgfSk7XG4gICQoJy5idG4tZmlsdGVyLWNsZWFyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZmYgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXItZmllbGQnKTtcbiAgICBjbGVhckZpZWxkcyhmZik7XG4gIH0pO1xuICAkKCcuYnRuLWZpbHRlci1hZGQtY2xlYXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBmZiA9ICQodGhpcykuY2xvc2VzdCgnLmZpbHRlci1maWVsZCcpO1xuICAgIGlmIChmZi5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNsZWFyRmllbGRzKGZmKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9maWx0ZXIuanMiLCIvKipcbiAqINCc0L7QtNGD0LvRjCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtCz0L4g0LzQtdC90Y4g0L3QsCDQvNC+0LHQuNC70LVcbiAqIEBtb2R1bGUgTW9yZU1lbnVcbiAqL1xuXG5mdW5jdGlvbiBvcGVuKGVsKSB7XG4gIGlmIChlbCkge1xuICAgIGVsLmZhZGVJbigpLmFkZENsYXNzKCdvcGVuJykudHJpZ2dlcignb3BlbmVkJyk7XG4gICAgJCgnaHRtbCwgYm9keScpLmNzcyh7J292ZXJmbG93LXknOiAnaGlkZGVuJ30pO1xuICAgICQoJy5sYXlvdXQnKS5hZGRDbGFzcygnbW9yZS1tZW51LW9wZW5lZCcpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2VsZW1lbnQgaXMgcmVxdWlyZWQnKVxuICB9XG59XG5mdW5jdGlvbiBjbG9zZShlbCkge1xuICBpZiAoZWwpIHtcbiAgICBlbC5yZW1vdmVDbGFzcygnb3BlbicpLmRlbGF5KDUwMCkuZmFkZU91dCgpLnRyaWdnZXIoJ29wZW5lZCcpO1xuICAgICQoJ2h0bWwsIGJvZHknKS5jc3MoeydvdmVyZmxvdy15JzogJ2hpZGRlbid9KTtcbiAgICAkKCcubGF5b3V0JykucmVtb3ZlQ2xhc3MoJ21vcmUtbWVudS1vcGVuZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdlbGVtZW50IGlzIHJlcXVpcmVkJylcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChlbCkge1xuICAgIGVsLmFkZENsYXNzKCdvcGVuJykudHJpZ2dlcignc2hvd24nKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdlbGVtZW50IGlzIHJlcXVpcmVkJylcbiAgfVxufVxuZnVuY3Rpb24gaGlkZShlbCkge1xuICBpZiAoZWwpIHtcbiAgICBlbC5yZW1vdmVDbGFzcygnb3BlbicpLnRyaWdnZXIoJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2VsZW1lbnQgaXMgcmVxdWlyZWQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5NdyhlbCkge1xuICBpZiAoZWwpIHtcbiAgICBoaWRlKGVsLmNsb3Nlc3QoJy5tb3JlLW1lbnUtd2luJykpO1xuICAgIGVsLmZhZGVJbigpLmFkZENsYXNzKCdvcGVuJykudHJpZ2dlcignb3BlbmVkJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignZWxlbWVudCBpcyByZXF1aXJlZCcpO1xuICB9XG59XG5mdW5jdGlvbiBjbG9zZU13KGVsKSB7XG4gIGlmIChlbCkge1xuICAgIGVsLnJlbW92ZUNsYXNzKCdvcGVuJykuZGVsYXkoNTAwKS5mYWRlT3V0KCkudHJpZ2dlcignb3BlbmVkJyk7XG4gICAgc2hvdyhlbC5jbG9zZXN0KCcubW9yZS1tZW51LXdpbicpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdlbGVtZW50IGlzIHJlcXVpcmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsbChlbCkge1xuICBpZiAoZWwpIHtcbiAgICBsZXQgbWEgPSBlbC5jbG9zZXN0KCcubW0tYWN0aW9uJyk7XG4gICAgbGV0IG1yID0gbWEuZmluZCgnLm1tLXJlcycpO1xuICAgIGxldCB2YWw7XG4gICAgaWYgKG1hLmZpbmQoJ2lucHV0JykubGVuZ3RoKSB7XG4gICAgICB2YWwgPSBtYS5maW5kKCdpbnB1dCcpLnZhbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSBlbC5maW5kKCcudmFsJykudGV4dCgpO1xuICAgIH1cbiAgICBtci50ZXh0KHZhbCkudHJpZ2dlcignY2hhbmdlJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignZWxlbWVudCBpcyByZXF1aXJlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICQoJy5idG4tbW9yZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IG1tID0gJCh0aGlzKS5jbG9zZXN0KCcubW9yZS1tZW51JykuZmluZCgnLm1vcmUtbWVudS13aW4nKTtcbiAgICBvcGVuKG1tKTtcbiAgfSk7XG4gICQoJy5tb3JlLW1lbnUtd2luJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuICAkKCcubW9yZS1tZW51LXdpbicpLm9uKCdjbGljay1vdXRzaWRlJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2UoJCh0aGlzKSk7XG4gIH0pO1xuICAkKCcubGF5b3V0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQodGhpcykuZmluZCgnLm1tLXdpbi5vcGVuJykubGVuZ3RoKSB7XG4gICAgICAkKHRoaXMpLmZpbmQoJy5tbS13aW4ub3BlbicpLnRyaWdnZXIoJ2NsaWNrLW91dHNpZGUnKTtcbiAgICB9IGVsc2UgaWYgKCQodGhpcykuZmluZCgnLm1vcmUtbWVudS13aW4ub3BlbicpLmxlbmd0aCkge1xuICAgICAgJCh0aGlzKS5maW5kKCcubW9yZS1tZW51LXdpbi5vcGVuJykudHJpZ2dlcignY2xpY2stb3V0c2lkZScpO1xuICAgIH1cbiAgfSk7XG5cbiAgJCgnLm1tLXBhbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBtdyA9ICQodGhpcykuY2xvc2VzdCgnLm1tLWFjdGlvbicpLmZpbmQoJy5tbS13aW4nKTtcbiAgICBpZiAobXcubGVuZ3RoKSB7XG4gICAgICBvcGVuTXcobXcpO1xuICAgIH1cbiAgfSk7XG4gICQoJy5tbS13aW4nKS5vbignY2xpY2stb3V0c2lkZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlTXcoJCh0aGlzKSk7XG4gIH0pO1xuICAkKCcubW0tYXBwbHknKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgbXcgPSAkKHRoaXMpLmNsb3Nlc3QoJy5tbS13aW4nKTtcbiAgICBmaWxsKCQodGhpcykpO1xuICAgIGNsb3NlTXcobXcpO1xuICB9KTtcbiAgJCgnLm1vcmUtbWVudV9fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcubW9yZS1tZW51LXdpbicpKVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5pdFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9tb3JlLW1lbnUuanMiLCIvKipcbiAqINCa0L7RgNC30LjQvdCwXG4gKiBAbW9kdWxlIENhcnRcbiAqL1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAkKCcuanMtY2FydC1zaXplJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB2YWwgPSAkKHRoaXMpLnZhbCgpID8gJCh0aGlzKS52YWwoKSA6ICQodGhpcykudGV4dCgpO1xuICAgIGxldCBwcm9kdWN0ID0gJCh0aGlzKS5jbG9zZXN0KCcuY2FydC1wcm9kdWN0Jyk7XG4gICAgaWYgKHRoaXMudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHZhbCA9ICQodGhpcy5zZWxlY3RlZE9wdGlvbnNbMF0pLnRleHQoKTtcbiAgICB9XG4gICAgcHJvZHVjdC5maW5kKCcuanMtY2FydC1zaXplLXJlcycpLnRleHQodmFsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfSk7XG4gICQoJy5qcy1jYXJ0LXN1bScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdmFsID0gJCh0aGlzKS52YWwoKSA/ICQodGhpcykudmFsKCkgOiAkKHRoaXMpLnRleHQoKTtcbiAgICBsZXQgcHJvZHVjdCA9ICQodGhpcykuY2xvc2VzdCgnLmNhcnQtcHJvZHVjdCcpO1xuICAgIHByb2R1Y3QuZmluZCgnLmpzLWNhcnQtc3VtLXJlcycpLnRleHQodmFsKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgfSk7XG4gICQoJy5idG4tY2FydC1wcm9kdWN0LWRlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLmNhcnQtcHJvZHVjdCcpLnRyaWdnZXIoJ2RlbGV0ZWQnKTtcbiAgfSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluaXRcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvY2FydC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBOzs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBOzs7Ozs7OztBQ2xEQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7QUNwS0E7Ozs7OztBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFSQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBTEE7QUFSQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBUEE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBSEE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQWJBO0FBaUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaEtBOzs7OztBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7OztBQ25FQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7OztBQzlCQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7QUMzREE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7OztBQ3RDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7O0FDcERBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7QUNyR0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7OztBQ2hEQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7O0FDckJBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMzQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7OztBQ2xEQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7QUMxRkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7QUNwUUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7QUNoSEE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OzsiLCJzb3VyY2VSb290IjoiIn0=