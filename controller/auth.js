const { loginService, registerService } = require("../service/auth");

const registerController = async (req, res, next) => {
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
    const user = await registerService({ name, email, password });
    return res.status(201).json({ message: "User Created Sucefully ! ", user });
  } catch (e) {
    next(e);
  }
};

const loginContoller = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const token = await loginService({ email, password });
    return res.status(200).json({ message: "Login Sucessefully !", token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  loginContoller,
  registerController,
};
