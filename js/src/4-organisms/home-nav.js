(function($, Drupal) {
  Drupal.behaviors.homeNav = {
    attach: function attach(context, settings) {

      var pageState = true;
      var animationRunning = false;

      //Init
      // $('.jquery-background-video').css('opacity', '1');

      $('.home-nav.masthead--home', context).once('homenavBehavior').each(function () {
        pageState = false;
        this.timer = setTimeout(() => {
          timeoutId = null;
          homeAnimation();
        }, 1800);
      }).mousemove(function(){
        clearTimeout(this.timer);
      });

      //Home Animation function
      async function homeAnimation() {

        animationRunning = true;

        await new Promise((resolve, reject) => setTimeout(resolve, 300));

        if($(window).width() > 1000) {
          await new Promise((resolve, reject) => setTimeout(resolve, 100));

          //Animation Starts with highlighting the active item
          setTimeout(() => {
            $('.home-nav.masthead--home .nav-item:first-child').addClass('active')
          }, 1000);

          await new Promise((resolve, reject) => setTimeout(resolve, 1200));

          //Then, hide the text
          setTimeout(() => {
            $('.home-nav.masthead--home .nav-item').addClass('hide-text')
          }, 500);

          await new Promise((resolve, reject) => setTimeout(resolve, 700));

          //Hide text completely
          $('.home-nav.masthead--home .nav-item').addClass('text-hidden');

          await new Promise((resolve, reject) => setTimeout(resolve, 350));

          //Expand Active Item
          $('.home-nav.masthead--home .nav-item.active').addClass('expanded');
          $('.home-nav.masthead--home .nav-item:not(.active)').addClass('collapsed');

          await new Promise((resolve, reject) => setTimeout(resolve, 200));
          $('.home-nav.masthead--home .nav-item:not(.active)').removeClass('text-hidden');
          $('.masthead-main').show();

          await new Promise((resolve, reject) => setTimeout(resolve, 500));
          $('.home-nav.masthead--home .nav-item:not(.active)').removeClass('hide-text');
          $('.masthead-main').addClass('visible');
          if($('.home-nav.masthead--home .nav-item.active').hasClass('text-hidden')){
            $('.home-nav.masthead--home .nav-item.active').removeClass('active');
          }

          pageState = true;
          animationRunning = false;
        }
      }

      async function returnToPageState(){
        await new Promise((resolve, reject) => setTimeout(resolve, 100));

        //Animation Starts with highlighting the active item
        setTimeout(() => {
          $('.home-nav .nav-item:first-child').addClass('active')
        }, 1000);

        await new Promise((resolve, reject) => setTimeout(resolve, 1200));

        //Then, hide the text
        setTimeout(() => {
          $('.home-nav .nav-item').addClass('hide-text')
        }, 500);

        await new Promise((resolve, reject) => setTimeout(resolve, 700));

        //Hide text completely
        $('.home-nav.masthead--home .nav-item').addClass('text-hidden');

        await new Promise((resolve, reject) => setTimeout(resolve, 350));

        //Expand Active Item
        $('.home-nav .nav-item.active').addClass('expanded');
        $('.home-nav .nav-item:not(.active)').addClass('collapsed');

        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        $('.home-nav .nav-item:not(.active)').removeClass('text-hidden');
        $('.masthead-main').show();

        await new Promise((resolve, reject) => setTimeout(resolve, 500));
        $('.home-nav .nav-item:not(.active)').removeClass('hide-text');
        $('.masthead-main').addClass('visible');
        if($('.home-nav .nav-item.active').hasClass('text-hidden')){
          $('.home-nav .nav-item.active').removeClass('active');
        }

        pageState = true;
        animationRunning = false;
      }

      async function returnToNavState(){

        animationRunning = true;
        //Fade out text
        $('.masthead-main').removeClass('visible');
        $('.home-nav .nav-item:not(active)').addClass('hide-text');

        await new Promise((resolve, reject) => setTimeout(resolve, 400));

        $('.masthead-main').hide();

        await new Promise((resolve, reject) => setTimeout(resolve, 400));

        //Return nav items to grid formation
        $('.home-nav .nav-item.expanded').removeClass('expanded');
        $('.home-nav .nav-item.collapsed').removeClass('collapsed');

        await new Promise((resolve, reject) => setTimeout(resolve, 400));

        $('.home-nav .nav-item').removeClass('text-hidden');

        await new Promise((resolve, reject) => setTimeout(resolve, 200));

        $('.home-nav .nav-item').removeClass('hide-text');

        pageState = false;
        animationRunning = false;

      }


      //After the initial animation, hover state
      var timeoutId;
      $('.masthead--home .masthead-main').once().mouseenter(() => {
        if(pageState && !animationRunning){
          if($(window).width() > 1000){
            this.timer = setTimeout(() => {
              timeoutId = null;
              returnToNavState();
            }, 2000);
          }
        }
      }).mouseleave(() => {
        clearTimeout(this.timer);
      });

      //Leaving nav items causes nav state to happen
      $('.masthead--home .nav-items').once().mouseleave(() => {
        if(!pageState && !animationRunning){
          if($(window).width() > 1000){
            this.timer = window.setTimeout(() => {
              returnToPageState();
            }, 2000);
          }
        }
      }).mouseenter(() => {
        clearTimeout(this.timer);
      });
    }
  }
})(jQuery, Drupal);
