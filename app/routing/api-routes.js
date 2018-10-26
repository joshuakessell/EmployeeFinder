// Dependencies
// ===========================================================

const survey = require('../data/employees.js');

// Routes
// ==========================================================

module.exports = function(app) {

    app.get('/api/employees', function (req, res) {
        res.json(survey);
    });

    app.post('/api/employees', function(req, res) {
        userData.push(req.body);
        console.log(userData);
    res.json({ success: true });
    });

};