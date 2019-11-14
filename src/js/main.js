const DeviceDetection = require("./components/device-detection");
const Helpers = require("./components/helpers");
const Carousel = require("./components/carousel");
const Forms = require("./components/forms");
const Popups = require("./components/popups");
const Tabs = require('./components/tabs');
const MainMenu = require('./components/main-menu');
const Aside = require('./components/aside');
const Basket = require('./components/basket');
const Order = require('./components/order');
const Selects = require('./components/selects');
const Scrollbar = require('./components/scrollbar');
const Accordion = require('./components/accordion');
const Profile = require('./components/profile');
const Modals = require('./components/modals');
const Filter = require('./components/filter');
const MoreMenu = require('./components/more-menu');
const Cart = require('./components/cart')

$(document).ready(function(){
  
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
  
  $.afterlag(function(){
    $('html').addClass('is-loaded');
  });
  
  //Popups.init();
  
  
  if ((window.innerWidth > document.body.clientWidth) && !$('html').hasClass('fp-enabled') && !DeviceDetection.isTouch()) {
    $('.layout').css({'padding-right': Helpers.getNativeScrollbarWidth() + 'px'});
  }
  
});


/**
 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
 * @example
 * Main.Form.isFormValid();
 */
module.exports = {
  DeviceDetection,
  Helpers,
  Carousel,
  Forms,
  Selects,
  Popups,
  Tabs,
  Accordion,
  MainMenu,
  Aside,
  Basket,
  Scrollbar,
  Order,
  Profile,
  Modals,
  Filter,
  MoreMenu,
  Cart
};