(function($, Drupal) {
  Drupal.behaviors.formValidation = {
    attach: function attach(context, settings) {

      //Text field - check if empty
      $('input[type="text"][required="required"], textarea[required="required"]').once().focusout(function(){
        if($(this).val() == ''){
          $(this).setValidationErrorMessage('This field is required');
        } else {
          $(this).validationSuccess();
        }
      });

      //Email address validation
      $('input[type="email"][required="required"]').once().focusout(function(){
        var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        if($(this).val() == ''){
          $(this).setValidationErrorMessage('This field is required');
        } else if ($(this).val() != '' && !emailReg.test($(this).val())){
          $(this).setValidationErrorMessage('Please enter a valid email address');
        } else {
          $(this).validationSuccess();
        }
      });


      //Validation Error - set Message
      $.fn.setValidationErrorMessage = function(message){
        if(!this.parent().hasClass('error')){
          this.parent().addClass('error');
        }
        if(this.parent().find('.error-message').length > 0){
          this.parent().find('.error-message').html(message);
        } else {
          this.after('<span class="error-message">' + message + '</span>');
        }
      }

      //Validation success - clear error class and message
      $.fn.validationSuccess = function(){
        this.parent().removeClass('error');
        this.parent().find('.error-message').remove();
      }
    }
  }
})(jQuery, Drupal);