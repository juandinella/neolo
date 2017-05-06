/* global jQuery */

;(function ($) {
  $('.custom-background').each(function () {
    var background = $(this).attr('data-background')
    var position = $(this).attr('data-background-position')
    $(this).css('background', 'url(' + background + ') no-repeat ' + position + ' / cover')
  })
}(jQuery))
