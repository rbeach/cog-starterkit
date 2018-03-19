(function($, Drupal) {
  Drupal.behaviors.docFinder = {
    attach: function attach(context, settings) {
      $('.docfinder-mobile-toggle a').once().click(function(){

        $('.finder-window').toggleClass('mobile-toggle');

        if($(this).text() == 'List'){
          $(this).text('Map');
        } else {
          $(this).text('List');
        }
      });
    }
  }
})(jQuery, Drupal);