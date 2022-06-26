const router = require('express').Router();
const { registerController, loginContoller } = require("../controller/auth");

router.post("/register", registerController);

router.post("/login", loginContoller);

module.exports = router;
