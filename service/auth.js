const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { findUserByProperty, createNewUser } = require("./user");
const error = require("../utlis/error");

const registerService = async ({ name, email, password , roles, accountStatus}) => {
  console.log("+++", email);
  let user = await findUserByProperty("email", email);

  if (user) {
    throw error("User Alredy Exist", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return createNewUser({ name, email, password: hash, roles, accountStatus });
};

const loginService = async ({ email, password }) => {
  const user = await findUserByProperty("email", email);
  console.log(user);
  if (!user) {
    throw error ('Invalid Credential',400)
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw error ('Invalid Credential', 400)
  }
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    accoutStatus: user.accountStatus,
  };
  return jwt.sign(payload, "secret-key", {
    expiresIn: "2h",
  });
};

module.exports = {
  loginService,
  registerService,
};
