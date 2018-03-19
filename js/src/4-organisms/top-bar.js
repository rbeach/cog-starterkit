(function($, Drupal) {
  Drupal.behaviors.topBar = {
    attach: function attach(context, settings) {
      $(window).scroll(() => {
        if ($(window).scrollTop() >= 31){
          $('.top-bar').addClass('fixed-bar');
        } else {
          $('.top-bar').removeClass('fixed-bar');
        }
      });

      $('.mobile-hamburger').unbind('click').bind('click', function (event) {
        if($(window).width() < 760){
          $(this).toggleClass('active');

          if($(this).hasClass('active')){
            $('.top-bar--links').addClass('active');
          } else {
            $('.top-bar--links').removeClass('active');
          }
        }
      });
    }
  }
})(jQuery, Drupal);