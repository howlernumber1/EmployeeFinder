$(function() {
  const validateForm = function() {
    let isValid = true;

    // Using jQuery's each method, loop through the inputs
    // Sets isValid to false if any are empty
    $('.input').each(function() {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    // Using jQuery's each method, loop through the select elements
    // Sets isValid to false if any are unchosen
    $('.custom-select').each(function(i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;
  }
  // Render function to display match to modal
  const render = function(match) {

    // append result match to modal
    $('#result-name').text(match.name);
    $('#result-img').attr('src', match.photo)

    //toggle modal on
    $('#seeResult').modal('toggle');
  };

  //function to capture input values
  const surveyEntry = function(event) {
    event.preventDefault();

    // form validation 
    if (validateForm()) {

      //get inputs
      const surveyInfo = {
        name: $('#inputName').val().trim(),
        photo: $('#inputImg').val().trim(),
        scores: [
          $('#quest1').val().trim(),
          $('#quest2').val().trim(),
          $('#quest3').val().trim(),
          $('#quest4').val().trim(),
          $('#quest5').val().trim(),
          $('#quest6').val().trim(),
          $('#quest7').val().trim(),
          $('#quest8').val().trim(),
          $('#quest9').val().trim(),
          $('#quest10').val().trim()
        ]
      };

      //Post stored values into array
      $.post('api/employees', surveyInfo, render)
    } else {
      $('#error')
        .text('Please fill out all fields before submitting!')
        .addClass('alert alert-danger');
    }
  };

  $('#submitSurvey').on('click', surveyEntry)

});
