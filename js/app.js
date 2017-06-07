(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-47581672-1', 'auto');
ga('send', 'pageview');

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

/* global jQuery */

;(function ($) {
  $('.custom-background').each(function () {
    var background = $(this).attr('data-background')
    var position = $(this).attr('data-background-position')
    $(this).css('background', 'url(' + background + ') no-repeat ' + position + ' / cover')
  })
}(jQuery))

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

var _elev = window._elev || {};
_elev.account_id = '587903536964f';
(function () { var i,e;i=document.createElement('script'),i.type='text/javascript';i.async=1,i.src='https://cdn.elev.io/sdk/bootloader/v4/elevio-bootloader.js?cid=587903536964f',e=document.getElementsByTagName('script')[0],e.parentNode.insertBefore(i,e);})();

/* global jQuery */

;(function ($) {
  var question = $('.faqBlock-question')
  var answer = $('.faqBlock-answer')

  answer.hide()

  question.click(function () {
    $(this).next('.faqBlock-answer').slideToggle(250)
    $(this).toggleClass('question-active')

    if ($(this).hasClass('question-active')) {
      $(this).find('.faqBlock-question_toggle').text('-')
    } else {
      $(this).find('.faqBlock-question_toggle').text('+')
    }
  })
})(jQuery)

/**
* Hide FAQ
*/
;(function ($) {
  var $ShowHideMore = $('.topFaqs')
  $ShowHideMore.each(function () {
    var $times = $(this).children('.faqBlock')
    if ($times.length > 5) {
      $ShowHideMore.children(':nth-of-type(n+6)').addClass('moreShown').hide()
      $('.btn-more-less').show().addClass('more-times')
    }
  })

  $('.btn-more-less').click(function () {
    var that = $(this)
    var thisParent = that.closest('.faqContainer')

    if (that.hasClass('more-times')) {
      thisParent.find('.moreShown').fadeIn()
      that.toggleClass('more-times', 'less-times').find('.btn-text').html(' Ver menos preguntas')
    } else {
      thisParent.find('.moreShown').fadeOut()
      that.toggleClass('more-times', 'less-times').find('.btn-text').html('Ver todas las preguntas')
    }
  })
})(jQuery)

script.
  (function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
  var fbds = document.createElement('script');
  fbds.async = true;
  fbds.src = '//connect.facebook.net/en_US/fbds.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(fbds, s);
  _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '732285840138667']);
  })();
  window._fbq = window._fbq || [];
  window._fbq.push(['track', 'PixelInitialized', {}]);
noscript
  img(height='1', width='1', alt='', style='display:none', src='https://www.facebook.com/tr?id=732285840138667&ev=PixelInitialized')

window['_fs_debug'] = false;
window['_fs_host'] = 'www.fullstory.com';
window['_fs_org'] = '2C83M';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
if (e in m && m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); return;}
g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
g.clearUserCookie=function(c,d,i){if(!c || document.cookie.match('fs_uid=[`;`]`[`;`]`[`;`]*`')){
d=n.domain;while(1){n.cookie='fs_uid=;domain='+d+
';path=/;expires='+new Date(0).toUTCString();i=d.indexOf('.');if(i<0)break;d=d.slice(i+1)}}};
})(window,document,window['_fs_namespace'],'script','user');

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

/* global jQuery, location */

;(function ($) {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('.mainHeader').outerHeight()
        }, 1000)
        return false
      }
    }
  })
}(jQuery))

//# sourceMappingURL=app.js.map
