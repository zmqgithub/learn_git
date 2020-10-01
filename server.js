const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('<h1>Hello from server</h>')

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://liveschool110:liveschool110@cluster0.ou5lp.mongodb.net/sample_analytics?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("sample_analytics").collection("accounts");
  // perform actions on the collection object
  console.log(collection);
  client.close();
});