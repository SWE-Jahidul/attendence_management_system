const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { findUserByProperty, createNewUser } = require("./user");

const registerService = async ({ name, email, password }) => {
  let user = await findUserByProperty("email", email);

  if (user) {
    const error = new Error("User Alredy Exist");
    error.status = 400;
    throw error;
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
   console.log( hash);
  return createNewUser({name, email, password: hash});
};


const loginService = async () => {
  // const user = await User.findOne({ email });
  // if (!user) {
  //   return res.status(400).json({
  //     message: "Invalid Credential",
  //   });
  // }

  // const isMatch = await bcrypt.compare(password, user.password);
  // if (!isMatch) {
  //   return res.status(400).json({ message: "Invalid Credential !" });
  // }

  // delete user._doc.password;

  // const token = jwt.sign(user._doc, "secret-key", {
  //   expiresIn: "30s",
  // });
};

module.exports = {
  loginService,
  registerService,
};
