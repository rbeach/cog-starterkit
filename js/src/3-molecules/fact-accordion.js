(function($, Drupal) {
  Drupal.behaviors.factAccordion = {
    attach: function attach(context, settings) {
      $(".fact-accordion div[class^=\'fact\']").once().click((event) => {
        var target = $(event.currentTarget);
        var content = target.find('.content');
        var title = target.find('.title__wrapper');

        if(!target.hasClass('expanded')) {

          //Close other open sections
          target.parent().find('.fact').each(function (i, t) {
            $(t).height($(t).find('.title__wrapper').outerHeight());
          });
          target.parent().find('.fact .content').css('opacity', '0');
          target.parent().find('.fact').removeClass('expanded');
          target.parent().find('.fact .expand-button').removeClass('opened');

          target.height(content.outerHeight() + title.outerHeight());
          target.addClass('expanded');
          target.find('.expand-button').addClass('opened');

          if(!target.parent().parent().hasClass('expanded')){
            target.parent().parent().addClass('expanded');
          }

          setTimeout(() => {
            target.find('.content').css('opacity', '1');
          }, 200);
        } else {
          target.find('.content').css('opacity', '0');

          setTimeout(() => {
            target.find('.expand-button').removeClass('opened');
            target.height(title.outerHeight());
            target.removeClass('expanded');
            target.parent().parent().removeClass('expanded');
          }, 200)

        }
      });
    }
  }
})(jQuery, Drupal);