const mongoose = require('mongoose'); // importing mongoose for using mongodb in this project

// env file code
const dotenv = require('dotenv');
dotenv.config();
//

const url = "mongodb://localhost:27017/Blogs";
// Code for Connecing database (Using Promise )
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error in connecting to the database:', error);
    process.exit(1); // Exit the application with an error code
});