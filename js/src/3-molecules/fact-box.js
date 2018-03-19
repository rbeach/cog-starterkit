(function($, Drupal) {
  Drupal.behaviors.factBox = {
    attach: function attach(context, settings) {
      $("div[class^=\'fact-box--\']").once().click((event) => {
        $(event.currentTarget).toggleClass('expanded');

        let box = $(event.currentTarget);
        if(box.hasClass('expanded')){
          box.addClass('z-index');
        } else {
          setTimeout(function(){box.removeClass('z-index')}, 420);
        }
      });
    }
  }
})(jQuery, Drupal);