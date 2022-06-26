const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User');

const registerService = async() =>{
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Alredy Exist " });
    }

    user = new User({ name, email, password, accountStatus });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    await user.save();
}

const loginService = async () =>{
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

    const token = jwt.sign(user._doc, "secret-key", {
      expiresIn: "30s",
    });
}
module.exports = {
    loginService,
    registerService
}