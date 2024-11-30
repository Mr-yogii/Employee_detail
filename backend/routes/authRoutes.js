const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

/**
 * Register a new user
 * @route POST /register
 * @access Public
 */
router.post('/register', registerUser);

/**
 * Login an existing user
 * @route POST /login
 * @access Public
 */
router.post('/login', loginUser);

module.exports = router;