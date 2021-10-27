require('dotenv').config();
const express = require("express");
const { MongoClient } = require("mongodb");

// Connection URL
console.log(process.env.MONGODB_URL);
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database Name
const dbName = "shop";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const customerCollection = db.collection("customers");

  // the following code examples can be pasted here...
  const findResult = await customerCollection.find({}).toArray();
  console.log("Found documents =>", findResult);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Docker container!!!!!!");
});

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
