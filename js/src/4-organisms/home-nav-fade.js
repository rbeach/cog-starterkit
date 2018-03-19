(function($, Drupal) {
  Drupal.behaviors.homeNavFade = {
    attach: function attach(context, settings) {
      $('#masthead-wrapper').once().removeClass('fade-out');
    }
  }
})(jQuery, Drupal);


