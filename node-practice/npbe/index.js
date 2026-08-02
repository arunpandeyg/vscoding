const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nodepractice");
  console.log('dbs connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
  username: String,
  password: String
})
const User = mongoose.model("User", userSchema);

server.use(cors());
server.use(bodyParser.json());


//create
server.post("/demo", async (req, res) => {

  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  const doc = await user.save();

  console.log(doc);
  res.json(doc);
});
//read all
server.get('/demo', async(req, res) => {
  const docs = await User.find({});
  res.json(docs);
})
//read one
server.get("/demo/:id", async (req, res) => {
  try {
    const doc = await User.findById(req.params.id);
    res.json(doc);
  } catch(err) {
    res.json('error' +err);
  }
  
});
//update
server.put("/demo/:id", async (req, res) => {  
  
});
//delete
server.delete("/demo/:id", async (req, res) => {});


server.listen(8080, () => {
    console.log('server started');
});