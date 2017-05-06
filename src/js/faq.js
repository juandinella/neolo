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
