const express = require('express');
const connectDB = require('./config/db.js')
const path = require('path');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

//Routes-- add more later

app.use('/users', require('./routes/users'));
//app.use('/api/favorites', require('./routes/favorites.js'));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers");
   next();
 });


if(process.env.NODE_ENV === 'production') {
   //set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
   console.log("Listening")
)