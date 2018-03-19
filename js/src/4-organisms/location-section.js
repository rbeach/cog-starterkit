(function($, Drupal) {
  Drupal.behaviors.locationSection = {
    attach: function attach(context, settings) {
      //Initialize Parallax Scroll
      $(document).ready(function(){
        $('.parallax').parallax();
      });
    }
  }
})(jQuery, Drupal);