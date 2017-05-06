/* global jQuery */

;(function ($) {
  var header = $('.mainHeader')
  var placeholder = $('.header-placeholder')
  var navPos = header.offset().top
  $(window).scroll(function () {
    var scrollPos = $(this).scrollTop()
    if (scrollPos >= navPos) {
      header.addClass('sticky')
      placeholder.addClass('block')
    } else {
      header.removeClass('sticky')
      placeholder.removeClass('block')
    }
  })
})(jQuery)
