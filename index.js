const { log } = require('console');
const express = require('express'); // importing express
const port = 8000; // defining port
const db = require('./config/mongoos'); // requiring database
const app = express();  // creating express app

// Bodyparser (middle ware)
app.use(express.urlencoded({ extended: false }));

// Routes Code
app.use('/', require('./routes'));
// Server Code
app.listen(port, (err) => {
    if(err) log(`Error in Running Server ${err}`);
    log(`Server is Up and running on port number : ${port}`);
})