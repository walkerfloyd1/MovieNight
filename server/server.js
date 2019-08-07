const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://walkerfloyd:<password>@movienight-fwa6g.mongodb.net/test?retryWrites=true&w=majority"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const database = client.db("movie_night_db");
   // perform actions on the collection object
   client.close();
});