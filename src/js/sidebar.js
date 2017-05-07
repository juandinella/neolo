/* global jQuery */

;(function ($) {
  var toggle = $('.mainNav-menuMobile')
  var close = $('.sidebar-close')
  var overlay = $('.overlay')
  var sidebar = $('.sidebar')
  var body = $('body')
  var removeSidebar = function () {
    body.css({
      'overflow': 'inherit',
      'height': 'inherit'
    })
    sidebar.removeClass('is-active')
    overlay.removeClass('is-active')
  }
  toggle.on('click', function () {
    overlay.addClass('is-active')
    sidebar.addClass('is-active')
    return body.css({
      'overflow': 'hidden',
      'height': '100%'
    })
  })
  overlay.on('click', removeSidebar)
  close.on('click', removeSidebar)
})(jQuery)

;(function ($) {
  var rwdMenu = $('.rwd-menu')
  var topMenu = $('.rwd-menu > li > a')
  var parentLi = $('.rwd-menu > li')
  var backBtn = $('.back-btn')

  topMenu.on('click', function (e) {
    var thisTopMenu = $(this).parent()
    rwdMenu.addClass('rwd-menu-view')
    parentLi.removeClass('open-submenu')
    thisTopMenu.addClass('open-submenu')
  })

  backBtn.click(function () {
    var thisBackBtn = $(this)
    parentLi.removeClass()
    rwdMenu.removeClass('rwd-menu-view')
  })
})(jQuery)
