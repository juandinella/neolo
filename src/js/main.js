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

  $('.hasMenu').click(function() {
    var dropdown = $('#dropdown-' + $(this).attr("id"));
    $(this).toggleClass('is-active');
    $(this).removeClass('menuSelected');
    if (dropdown.hasClass('is-active')) {
      $(this).addClass('menuSelected');
    }
  });
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

/**
* Clients slider
*/

+(function($) {
  $(document).ready(function() {
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
            centerPadding: '100px',
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
    });
  });
})(jQuery);

/**
* Function custom-backgrounds
*/
+(function ($) {
  $('.custom-background').each(function () {
    var background = $(this).attr('data-background')
    $(this).css('background', 'url(' + background + ') no-repeat center / cover')
  })
}(jQuery))
