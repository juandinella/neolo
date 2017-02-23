/**
* Open menu in mobile
*/
+(function($) {
  var toggle = $('.mainNav-menuMobile');
  var navMobile = $('.mainNav-mobile');
  navMobile.hide();
  toggle.click(function(e){
    e.preventDefault();
    $(this).toggleClass("is-active");
    navMobile.slideToggle('fast');
  });
})(jQuery);

/**
* Home slider
*/
+(function($) {
  var slider, option;
  slider = $('.hero-slider');
  option = $('.heroBlock');

  option.on('click', function() {
    var slide, that;
    that = $(this);
    slide = that.attr('slide');
    option.removeClass('is-active');
    slider.slick('slickGoTo', slide);
    return that.addClass('is-active');
  });

  slider.slick({
    draggable: false,
    dots: false,
    swipe: false,
    fade: true
  });

})(jQuery)

/**
* Home slider Mobile
*/
+(function($) {
  var slider;
  slider = $('.heroMobile-slider');

  slider.slick({
    draggable: true,
    dots: true,
    swipe: true,
    adaptiveHeight: true
  });

})(jQuery)
/**
* Function custom-backgrounds
*/
+(function ($) {
  $('.custom-background').each(function () {
    var background = $(this).attr('data-background')
    $(this).css('background', 'url(' + background + ') no-repeat center / cover')
  })
}(jQuery))


/**
* Header Fixed
*/
+(function($) {
  var header = $('.mainHeader');
  var placeholder = $('.header-placeholder');
  var navPos = header.offset().top;

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();

    if (scrollPos >= navPos) {
      header.addClass('sticky');
      placeholder.addClass('block');
    } else {
      header.removeClass('sticky');
      placeholder.removeClass('block');
    }

  });
})(jQuery);

/**
* Dropdown
*/
+(function ($) {
  var hasMenu = $('.hasMenu');
  var dropdown = $('.dropdown');

  hasMenu.on('click', function(){
    dropdown.toggleClass('is-active');
    hasMenu.removeClass('menuSelected');
    if (dropdown.hasClass('is-active')) {
      hasMenu.addClass('menuSelected');
    }
  })
})(jQuery);


/**
* FAQ
*/
+(function($) {
  var question = $('.faqBlock-question')
  var answer = $('.faqBlock-answer')

  answer.hide();

  question.click(function(){
    $(this).next('.faqBlock-answer').slideToggle(250);
    $(this).toggleClass('question-active');

    if ($(this).hasClass('question-active')){
      $(this).find('.faqBlock-question_toggle').text('-');
    }else{
      $(this).find('.faqBlock-question_toggle').text('+');
    }
  });
})(jQuery);

//# sourceMappingURL=app.js.map
