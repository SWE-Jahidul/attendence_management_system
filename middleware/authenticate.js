const jwt = require('jsonwebtoken');
const User = require("../models/User");


async function authentication(req, res, next){
    try{
     let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized " });
    }   
   
      const decoded = jwt.verify(token, "secret-key");
      const user = await User.findById(decoded._id);
      if (!user) {
        return res.status(400).json({ message: "Invalid Token !" });
      }

     req.user = user;
     next();
      
    } catch (error) {
      return res.status(400).json({ message: "Invalid Token !" });
    }
}

module.exports = authentication