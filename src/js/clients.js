/* global jQuery */

;(function ($) {
  $(document).ready(function () {
    var slider = $('.clients-slider')

    slider.slick({
      draggable: false,
      dots: false,
      swipe: false,
      arrow: true,
      centerMode: true,
      centerPadding: '300px',
      nextArrow: '<i class="arrowNext"><svg class="icon angle-right"><use xlink:href="#angle-right"></use></svg></i>',
      prevArrow: '<i class="arrowPrev"><svg class="icon angle-left"><use xlink:href="#angle-left"></use></svg></i>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '100px'
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: false,
            swipe: true,
            draggable: true
          }
        }
      ]
    })
  })
})(jQuery)
