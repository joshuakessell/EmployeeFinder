// Dependencies
// ===========================================================

// "data"  is the saved information on the server.
const data = require('../data/employees.js');

// Routes
// ==========================================================

module.exports = function(app) {

    app.get('/api/employees', function (req, res) {
        res.send(data);
    });

    // "async" is a promise that does not provide the response until the "await" funciton is completed.
    app.post('/api/employees', async function (req, res) {
        // match holds the result of a function which will find the best match, sending req.body, which is sumbitted by the user.
        const match = await findMatch(req.body);
        // Posts the new scores to employees.js 
        data.push(req.body);
        console.log(match);
        // returns the match to the html.
        res.send(match);
    });

    // Function to find the best match based on "survey" (which is "req.body" in this case.)
    function findMatch(survey) {
        // pair holds the tentative result during the loop, while result will hold the final result.
        let pair, result = null;
        // loops through "data" to find the difference of each score betwen the submitted and saved user scores.
        // user is the function name which temporarily holds the values of "data" during this loop.
        data.forEach(user => {
            // total holds the user's total difference, used to find the closest match.
            let total;
            user.score.forEach((score, index) => {
                //difference holds the individual difference for each iteration
                let difference = score - survey.score[index];
                total += Math.abs(difference);
            });
            if (pair===null || total < pair){
                total = pair;
                result = user;
            }
        });
    return result;
    }

};