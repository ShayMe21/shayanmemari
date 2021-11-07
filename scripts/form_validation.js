$(document).ready(function () {
  var validator = false;
  $('#contact_form').bootstrapValidator({
      // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        name: {
          validators: {
            stringLength: {
              min: 2,
            },
            notEmpty: {
              message: 'Please supply your name'
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'Please supply your email address'
            },
            emailAddress: {
              message: 'Please supply a valid email address'
            }
          }
        },
        comment: {
          validators: {
            stringLength: {
              min: 10,
              max: 200,
              message: 'Please enter at least 10 characters and no more than 200'
            },
            notEmpty: {
              message: 'Please provide some comment'
            }
          }
        }
      }
    })
    .on('success.form.bv', function (e) {

      validator = true;
      e.preventDefault();
    });

  $('#contact_form').on('submit', function (e) {
    // Bootstrap validator success
    if (validator == true) {

      let contactName = $('input[name="name"]').val();
      let contactEmail = $('input[name="email"]').val();
      let contactComment = $('textarea[name="comment"]').val();

      console.log(contactName, contactEmail, contactComment);

      var contactFormParams = {
        from_name: contactName,
        message: contactComment,
        reply_to: contactEmail,
      };

      emailjs.send('memshayan-service-id', 'template_5mgbzf9', contactFormParams)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
  })
});
