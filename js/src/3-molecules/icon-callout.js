(function($, Drupal) {
  Drupal.behaviors.iconCallout = {
    attach: function attach(context, settings) {
      //$('.icon-bar--links').slick();
      var slickInit = false;

      function iconSlick(){
        if($(window).width() < 768){
          if(!slickInit){
            $('.icon-bar--links').slick({ adaptiveHeight: true });
            $('.icon-bar--links .slick-slide').css('width', $('.slick-list').css('width'));
            slickInit = true;
          }
        } else {
          if($('.icon-bar--links') && slickInit){
            $('.icon-bar--links').slick('unslick');
          }
          slickInit = false;
        }
      }

      $(window).resize(function(){
        if($('.icon-bar--links')){
          iconSlick();
        }
      });

      if($('.icon-bar--links')){
        iconSlick();
      }

    }
  }
})(jQuery, Drupal);