/* global jQuery */

;(function ($) {
  $(window).click(function () {
    $('.dropdown').removeClass('is-active')
    $('.hasMenu').removeClass('menuSelected')
  })

  $('.dropdown').click(function (event) {
    event.stopPropagation()
  })

  $('.hasMenu').click(function (event) {
    event.stopPropagation()
    var dropdown = '#dropdown-' + $(this).attr('id')
    $('.hasMenu').removeClass('menuSelected')
    $('.dropdown').not($(dropdown)).removeClass('is-active')
    $(dropdown).toggleClass('is-active')
    if ($(dropdown).hasClass('is-active')) {
      $(this).addClass('menuSelected')
    }
  })
})(jQuery)
