const router = require("express").Router();

const authRoutes = require("./auth");
const userRoutes = require('./users')
const authenticate = require('../middleware/authenticate')


router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users',  userRoutes);


// or
// For private route now login issue thats ehy hide this line 
// router.use('/api/v1/users', authenticate , userRoutes);

module.exports = router;
