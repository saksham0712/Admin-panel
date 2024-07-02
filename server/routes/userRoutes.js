const express = require('express');
const { signup, login } = require('../controllers/userController');

const router = express.Routes();

router.post('/signup', signup);
router.post('/login', login);


module.exports = router;