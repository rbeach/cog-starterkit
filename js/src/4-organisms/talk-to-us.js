(function($, Drupal) {
  Drupal.behaviors.talkToUs = {
    attach: function attach(context, settings) {
      var selectorTiles = $('.contact-type-selector .tiles');
      var slickInit = false;

      $('input[type="radio"]').each(function(){
        if($(this).prop('checked')){
          var contactType = '.contact-type--' + $(this).val();
          if(!$(contactType).hasClass('selected')){
            $(contactType).addClass('selected');
          }
        }
      });


      $('.contact-type').once().click((event) => {
        talkToUsForm(event);
      });

      function getTileTypeByIndex(index) {
        return selectorTiles.find('.slick-slide[data-slick-index=' + index + ']').attr('data-contact-type');
      }

      function selectTileByType(type) {
        $('.contact-type-selector input[value="' + type + '"]').prop('checked', true).trigger('click').trigger('change');
      }

      function talkToUsForm(event){
        //$('div[id^="edit-contact-form-intro"]').show();

        //Add Active class and de-select other options
        if($(event.currentTarget).hasClass('selected')){
          $(event.currentTarget).removeClass('selected');
        } else {
          $('.contact-type').removeClass('selected');
          $(event.currentTarget).addClass('selected');
        }
        //
        var type = $(event.currentTarget).attr('data-contact-type');

        selectTileByType(type);

        if ($(window).width() < 768) {
          setTimeout(function () {
            $('.ui-dialog').animate({ scrollTop: $('.js-webform-radios-fieldset').height() + 227 });
          }, 250);
        }

        // //Show all form items
        // var items = $('.form--talk-to-us__submit, .contact-form-element--hide, .talk-to-us-form-wrapper .form-item-interest');
        // var patientItems = $('.form--talk-to-us__submit, .contact-form-element--hide');
        //
        // //Intro Texts
        // $('.contact-intro-wrapper .form-item').hide();
        // $('.contact-intro-wrapper .intro-text--' + $(event.currentTarget).attr('data-contact-type')).show();
        //
        // if($(event.currentTarget).attr('data-contact-type') == 'patient'){
        //   items.removeClass('show');
        //   patientItems.addClass('show');
        // } else {
        //   items.removeClass('show');
        //   items.addClass('show');
        // }
        // event.stopImmediatePropagation();
      }

      function iconSlick(){
        if($(window).width() < 768){
          if(!slickInit){
            selectorTiles.slick();

            selectorTiles.on('init', function() {
              selectorTiles.slick('slickGoTo', 0);
            });

            selectorTiles.once().on('beforeChange', function(event, slick, currentSlide, nextSlide) {
              var type = getTileTypeByIndex(nextSlide);
              selectTileByType(type);
            });

            slickInit = true;
          }
        } else {
          if(selectorTiles && slickInit){
            selectorTiles.slick('unslick');
          }
          slickInit = false;
        }
      }

      // Turn tiles into a slider for mobile

      //$(window).resize(function(){
      //  if(selectorTiles){
      //    iconSlick();
      //  }
      //});

      //if(selectorTiles){
      //  iconSlick();
      //}
    }
  }
})(jQuery, Drupal);