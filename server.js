const express = require("express");
const connectDB = require("./db");

const app = express();

// Registration Code 
app.post("/register", (req, res) => {


});

app.get("/", (_, res) => {
  const obj = {
    name: "shafiur",
    email: "shafiur@gmail.com",
  };
  res.json(obj);
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
