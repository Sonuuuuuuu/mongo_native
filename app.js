const { MongoClient } = require('mongodb')

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {

    const movies = db.collection("movies");

   movies.insertOne({
    name:"panja",
    rating:6,
    review:"good"
   })
    // since this method returns the matched document, not a cursor, print it directly
    console.log(movies);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
