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
    console.log(req.body);
    const employeeMatch = function() {

      let totalDiff = 100;
      let bestMatch;
      let bestMatchPhoto;

      for (let i = 0; i < employeeList[i].scores.length; i++) {

        let matchScore;

        for (let j = 0; j < array2.length; j++) {

          matchScore += Math.abs(employeeList[j].scores - req.body[j].scores)

          if (matchScore < totalDiff) {
            totalDiff = matchScore;
            bestMatch = employeeList[i];
          }
        }

      }

    };
    employeeList.push(req.body);
    res.end();
  })
};
