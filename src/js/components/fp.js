/**
 * инициализация fullpage.js
 * https://github.com/alvarotrigo/fullpage.js
 * FP.init();
 */

function init(){
  let hash = (window.location.hash && (window.location.hash.length > 1)) ? window.location.hash : null;

  $('#fullpage').fullpage({
    menu: '#top-nav',
    verticalCentered: false,
    //lockAnchors: true,
    normalScrollElements: '.popup',
    afterRender: function () {
      let w = $(window).width();
      let h = $(window).height();
      if (w < h) {
        $.fn.fullpage.setResponsive(true);
      } else {
        $.fn.fullpage.setResponsive(false);
      }
      if (hash) {
        if ($(hash).hasClass('section')) {
          $.fn.fullpage.moveTo($(hash).data('anchor'));
        } else if ($(hash).hasClass('popup')) {
          $.afterlag(function(){
            Main.Popups.openPopup(hash);
          });
        }
        //Main.Helpers.removeHash();
      }
    },
    afterResize: function() {
      let w = $(window).width();
      let h = $(window).height();
      if (w < h) {
        $.fn.fullpage.setResponsive(true);
      } else {
        $.fn.fullpage.setResponsive(false);
      }
    }
  });
  
  $(window).on('popupopened', function() {
    $.fn.fullpage.setAllowScrolling(false);
  });
  $(window).on('popupclosed', function() {
    $.fn.fullpage.setAllowScrolling(true);
  });
};

module.exports = {init};