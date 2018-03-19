(function($, Drupal) {
  Drupal.behaviors.overlayScroll = {
    attach: function attach(context, settings) {
      $('a[data-dialog-type="modal"]').click(function(e){
        var scroll = $(window).scrollTop();

        if(!$('body').hasClass('no-scroll')){
          $('body').addClass('no-scroll').css({ top: -scroll });
        }

        if(!$('html').hasClass('no-scroll')){
          $('html').addClass('no-scroll').css({ top: -scroll }).data('scroll', scroll);
        }
      });

      $(document).bind("DOMNodeRemoved", function(e)
      {
        if (e.target.className && e.target.className.split(' ').indexOf('ui-widget-overlay') >= 0){
          $('body').removeClass('no-scroll');
          $('html').removeClass('no-scroll');
          $(window).scrollTop($('html').data('scroll'));
        }
      });
    }
  }
})(jQuery, Drupal);