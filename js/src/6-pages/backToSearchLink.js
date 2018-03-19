//Dynamically creates the back link if coming from the docfinder.

(function($, Drupal) {
  Drupal.behaviors.backToSearchLink = {
    attach: function attach(context, settings) {

      var prevURL = $.cookie("previousUrl");

      if(prevURL && prevURL.includes('doc-finder')){
        $.cookie("lastDocSearch", prevURL, {path:"/"});
      }

      if($.cookie("lastDocSearch")){
        $('.bts-container').once().append('<a class="link--back" href="' + $.cookie("lastDocSearch") + '">Back to Search</a>')
      }

      $.cookie("previousUrl", window.location.href, {path:"/"});
    }
  }
})(jQuery, Drupal);