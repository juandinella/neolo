/* global jQuery */

;(function ($) {
  var slider, option
  slider = $('.hero-slider')
  option = $('.heroBlock')

  option.on('click', function () {
    var slide, that
    that = $(this)
    slide = that.attr('slide')
    option.removeClass('is-active')
    slider.slick('slickGoTo', slide)
    return that.addClass('is-active')
  })

  slider.slick({
    draggable: false,
    dots: false,
    swipe: false,
    fade: true
  })
})(jQuery)

/**
* Mobile
*/
;(function ($) {
  var slider
  slider = $('.heroMobile-slider')

  slider.slick({
    draggable: true,
    dots: true,
    swipe: true,
    adaptiveHeight: true
  })
})(jQuery)
