const express =  require("express");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");

const app = express();

const users = require('./routes/users')

const port = process.env.PORT || 3001;
const db = require("./models");
const cookieParser = require('cookie-parser');
require('dotenv').config();
console.log(process.env.SECRET)
app.use(cors())
app.use(cookieParser(process.env.SECRET));

// // Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets ( on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}
// make public a static folder
app.use(express.static("public"));

app.use(require('./routes'));
// // morgan logger for logging requests
app.use(logger("dev"));


// // API routes here

// // Send every other request to the React app
// // Define any API routes before this runs

app.get('/*', function (req, res, next) {
    res.render('home', {
    });
});

db.sequelize.sync({force: false}).then(() => {
    app.listen(port, () => {
        console.log("server is running on port: " + port)
    })
})