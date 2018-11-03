// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
let employeeList = require('../data/employees.js');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users 'visit' a page.
  // ---------------------------------------------------------------------------

  app.get('/api/employees', function(req, res) {
    res.json(employeeList)
    // console.log(json.stringify(employeeList));
  });

  app.post('/api/employees', function(req, res) {
    let resArray = [];
    let reqArray = [];
    reqArray.push(req.body)

    // function for the difference calculation
    const diffCalculation = function() {

      // outside loop on employee list array
      employeeList.forEach(function(el1) {

        // declaring variables to hold results
        let addVal = 0;
        let addVal2 = 0;
        let diff = 0;

        // callback function for reduce to add values
        let add = function(a, b) {
          return parseInt(a) + parseInt(b);
        }

        // inside loop for survey array
        reqArray.forEach(function(el2) {

          // run reduce function on each iteration for employee array and survey array
          addVal = el1.scores.reduce(add, 0);
          addVal2 = el2.scores.reduce(add, 0);

          // after subtracting the values store the results in a variable
          diff = Math.abs(addVal - addVal2)

        });
        // push the results to array3
        resArray.push({
          name: el1.name,
          photo: el1.photo,
          scores: diff
        });
      });
    }
    diffCalculation();

    // function to find the lowest number in array.
    // the lowest number will be the person with the least amount of difference to submited survey.
    function findMinMax(arr) {
      let min = arr[0].scores;

      for (let i = 1, len = arr.length; i < len; i++) {
        let v = arr[i].scores;
        min = (v < min) ? arr[i] : min;
      }

      return min;
    };

    // store the results in a variable and pass that back as a response.
    let match = findMinMax(resArray);
    res.json(match);

    //push survery results to employee list array
    employeeList.push(req.body);

    res.end();
  })
};
