// Import express and path
const express = require ('express');
const path = require('path');

// Defining express app
const app = express();

// Setting port for localhost
const PORT = 8080;

// Setting up server to parse the body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up server public directory for the static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// ===========================================================

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//Starting server on PORT
app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
})