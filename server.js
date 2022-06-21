const express = require("express");
const connectDB = require("./db");
const User = require("./models/User");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

// Registration Code
app.post("/register", async (req, res, next) => {
  /**
 * Request Import Source
  -- req body 
  -- req param  
  -- req query 
  -- req Header 
  -- req Cookies
 */

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Invalid Data" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Alredy Exist " });
    }

    user = new User({ name, email, password, accountStatus });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;

    await user.save();

    return res.status(201).json({ message: "User Created Sucefully ! ", user });
  } catch (e) {
    next(e);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid Credential",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credential !" });
    }

    delete user._doc.password;
    return res.status(200).json({ message: "Login Sucessefully !", user });
  } catch (e) {
    next(e);
  }
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
