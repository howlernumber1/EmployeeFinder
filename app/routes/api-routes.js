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

  employeeList.push(req.body);
  res.end();
  })
};
