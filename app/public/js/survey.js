$(function() {

  // Render function to display match to modal
  const render = function(match) {

    // append result match to modal
    $('#result-name').text(match.name);
    $('#result-img').attr('src', match.photo)

    //toggle modal on
    $('#seeResult').modal('toggle');
  }

  //function to capture input values
  const surveyEntry = function(event) {
    event.preventDefault();

    //get inputs
    const surveyInfo = {
      name: $('#inputName').val().trim(),
      photo: $('#inputImg').val().trim(),
      scores: [
        $('select#quest1').val().trim(),
        $('select#quest2').val().trim(),
        $('select#quest3').val().trim(),
        $('select#quest4').val().trim(),
        $('select#quest5').val().trim(),
        $('select#quest6').val().trim(),
        $('select#quest7').val().trim(),
        $('select#quest8').val().trim(),
        $('select#quest9').val().trim(),
        $('select#quest10').val().trim()
      ]
    }

    //Post stored values into array
    $.post('api/employees', surveyInfo, render)
  }

  $('#submitSurvey').on('click', surveyEntry)

});
