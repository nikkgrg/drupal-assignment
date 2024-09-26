(function ($) {
    $(document).ready(function () {
        $("#form").click(function(){
            var isValid = true;
            var name = $("#name").val();
            var email = $("#email").val();
            // Validate: Name should be at least 5 characters.
            if (name == '') {
                isValid = false;
                $("#form").addClass('error');
                // Display a custom error message
                $("#form").after('<div class="error-message">This field cannot be empty.</div>');
            } else if(email == ''){
                isValid = false;
                $("#form").addClass('error');
                // Display a custom error message
                $("#form").after('<div class="error-message">This field cannot be empty.</div>');
            } else {
                isValid = false;
                $.ajax({
                    type: 'POST',
                    url: Drupal.settings.basePath + 'myform-submit',
                    dataType: 'json',
                    data: JSON.stringify({ name: 'name',email:'email', }),
                    success: function(response) {
                        console.log('hi11111111' + response);
                        return false;
                        $('#form').html(response.message);
                    },
                    error: function(error) {
                        console.log('hi2222222'+error);
                        return false;
                        // Handle the error.
                        $('#form').html('An error occurred. Please try again.');
                    }
                });
            }
        });
    });
  })(jQuery);