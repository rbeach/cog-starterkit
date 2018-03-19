(function($, Drupal) {
  Drupal.behaviors.mapOnLoadBehavior = {
    attach: function attach(context, settings) {
      $(window).on('load', function(){
        if(Drupal.geolocation){
          Drupal.geolocation.maps.forEach(function(map){
            var zoom = map.googleMap.zoom;
            map.googleMap.setZoom(zoom < 13 ? zoom : 13);
          });
        }
      });
    }
  }
})(jQuery, Drupal);