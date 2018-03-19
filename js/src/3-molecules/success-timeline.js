(function($, Drupal) {
  Drupal.behaviors.successTimeline = {
    attach: function attach(context, settings) {
      const years = $("div[class^=\'success-timeline\'] .timeline-year");
      const smArrow = $("div[class^=\'success-timeline\'] .arrow-sm");
      const isMobile = smArrow.is(":visible");
      let i = 0;
      let cycle = true;

      const selectYear = function (target) {
        $("div[class^=\'success-timeline\'] .timeline-year").removeClass("active");
        $(target).addClass("active");
        smArrow.css("top", $(target).position().top);
      };

      const runSequence = function () {
        if (cycle) {
          setTimeout(function () {
            if (i < years.length) {
              selectYear(years[i]);
              runSequence();
            }
            else {
              selectYear(years[0]);
            }
            i++;
          }, 1000);
        }
      };

      years.click((event) => {
        cycle = false;
        if (!isMobile || $(event.target).hasClass("year")) {
          selectYear(event.currentTarget);
        }
      });

      if (years.length) {
        runSequence();
      }
    }
  }
})(jQuery, Drupal);