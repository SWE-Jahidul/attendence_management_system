const express = require("express");
const connectDB = require("./db");
const authentic = require('./middleware/authenticate')
const routes = require('./routes');
const app = express();
app.use(express.json());
app.use(routes)

// How to Execute private Route

app.get("/private", authentic ,  async  (req, res) => {

  console.log("I am The valid user ", req.user);
  return res.status(200).json({ messages: "I am a private Route " });
});

// How to Execute public route

app.get("/public", (req, res) => {
  return res.status(200).json({ messages: "I am a public Route " });
});

app.get("/", (_, res) => {
  const obj = {
    name: "shafiur",
    email: "shafiur@gmail.com",
  };
  res.json(obj);
});

// Golbal Error Handleing
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Server Error Occurred " });
});

connectDB("mongodb://localhost:27017/attendence-db")
  .then(() => {
    console.log("Databse Connected !");
    app.listen(4000, () => {
      console.log("I am lisiting on port 4000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
