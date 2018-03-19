(function($, Drupal) {
  Drupal.behaviors.faqItem = {
    attach: function attach(context, settings) {
      $(".faq-item .expand-button").unbind('click').bind('click', (event) => {
        const button = $(event.currentTarget);
        event.preventDefault();
        $(event.currentTarget).toggleClass('opened');
        button.parent().find(".faq__answer").slideToggle();
      });
    }
  }
})(jQuery, Drupal);