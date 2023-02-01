// plugins/db.js
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://wiewworkmotion:0826521401Wiew@cluster0.pu7bm.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url, { useUnifiedTopology: true });
let db;

export default async (ctx, inject) => {
  if (!db) {
    await client.connect()
      .then(() => {
        console.log("Connected successfully to server");
        db = client.db("test");
      })
      .catch(err => {
        console.log(err.stack);
      });
  }

  inject('db', db)
}
